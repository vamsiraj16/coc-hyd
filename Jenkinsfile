pipeline {
    agent any
    
    environment {
        // GCP project details
        GCP_PROJECT_ID = credentials('GCP_PROJECT_ID')
        GCP_CREDENTIALS = credentials('GCP_CREDENTIALS_JSON')
        
        // Application details
        APP_NAME = 'coc-hyd'
        CONTAINER_NAME = 'coc-hyd'
        CONTAINER_TAG = "${BUILD_NUMBER}"
        
        // Deployment details
        DEPLOYMENT_NAME = 'coc-hyd-deployment'
        
        // Environment
        ENVIRONMENT = params.ENVIRONMENT ?: 'staging'
        
        // Notification details
        SLACK_CHANNEL = '#deployments'
    }
    
    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['staging', 'production'],
            description: 'Select the environment to deploy to'
        )
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Security Scan - Dependencies') {
            steps {
                sh 'npm audit'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
                // Add code coverage reporting
                // publishCoverage adapters: [coberturaAdapter('coverage/cobertura-coverage.xml')]
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Authenticate with GCP
                    sh '''
                        echo "$GCP_CREDENTIALS" > /tmp/gcp-credentials.json
                        gcloud auth activate-service-account --key-file=/tmp/gcp-credentials.json
                        gcloud config set project $GCP_PROJECT_ID
                        gcloud auth configure-docker
                    '''
                    
                    // Build and push Docker image
                    sh '''
                        docker build -t gcr.io/$GCP_PROJECT_ID/$CONTAINER_NAME:$CONTAINER_TAG .
                        docker push gcr.io/$GCP_PROJECT_ID/$CONTAINER_NAME:$CONTAINER_TAG
                        docker tag gcr.io/$GCP_PROJECT_ID/$CONTAINER_NAME:$CONTAINER_TAG gcr.io/$GCP_PROJECT_ID/$CONTAINER_NAME:latest
                        docker push gcr.io/$GCP_PROJECT_ID/$CONTAINER_NAME:latest
                    '''
                }
            }
        }
        
        stage('Security Scan - Docker Image') {
            steps {
                sh '''
                    trivy image gcr.io/$GCP_PROJECT_ID/$CONTAINER_NAME:$CONTAINER_TAG
                '''
            }
        }
        
        stage('Deploy to Staging') {
            when {
                expression { ENVIRONMENT == 'staging' }
            }
            steps {
                script {
                    // Create or update secrets in Secret Manager
                    sh '''
                        echo "$YOUTUBE_API_KEY" | gcloud secrets create youtube-api-key --data-file=- --replication-policy="automatic" || echo "$YOUTUBE_API_KEY" | gcloud secrets versions add youtube-api-key --data-file=-
                        echo "$YOUTUBE_CHANNEL_ID" | gcloud secrets create youtube-channel-id --data-file=- --replication-policy="automatic" || echo "$YOUTUBE_CHANNEL_ID" | gcloud secrets versions add youtube-channel-id --data-file=-
                        echo "$YOUTUBE_PLAYLIST_ID" | gcloud secrets create youtube-playlist-id --data-file=- --replication-policy="automatic" || echo "$YOUTUBE_PLAYLIST_ID" | gcloud secrets versions add youtube-playlist-id --data-file=-
                    '''
                    
                    // Deploy using Google Deployment Manager
                    googleDeploymentManager(
                        credentialsId: 'GCP_CREDENTIALS_JSON',
                        deploymentName: "${DEPLOYMENT_NAME}-staging",
                        configPath: 'config.yaml',
                        projectId: "${GCP_PROJECT_ID}"
                    )
                }
            }
        }
        
        stage('Approve Production Deployment') {
            when {
                expression { ENVIRONMENT == 'production' }
            }
            steps {
                input message: 'Approve deployment to production?'
            }
        }
        
        stage('Deploy to Production') {
            when {
                expression { ENVIRONMENT == 'production' }
            }
            steps {
                script {
                    // Create or update secrets in Secret Manager
                    sh '''
                        echo "$YOUTUBE_API_KEY" | gcloud secrets create youtube-api-key --data-file=- --replication-policy="automatic" || echo "$YOUTUBE_API_KEY" | gcloud secrets versions add youtube-api-key --data-file=-
                        echo "$YOUTUBE_CHANNEL_ID" | gcloud secrets create youtube-channel-id --data-file=- --replication-policy="automatic" || echo "$YOUTUBE_CHANNEL_ID" | gcloud secrets versions add youtube-channel-id --data-file=-
                        echo "$YOUTUBE_PLAYLIST_ID" | gcloud secrets create youtube-playlist-id --data-file=- --replication-policy="automatic" || echo "$YOUTUBE_PLAYLIST_ID" | gcloud secrets versions add youtube-playlist-id --data-file=-
                    '''
                    
                    // Deploy using Google Deployment Manager
                    googleDeploymentManager(
                        credentialsId: 'GCP_CREDENTIALS_JSON',
                        deploymentName: "${DEPLOYMENT_NAME}-production",
                        configPath: 'config.yaml',
                        projectId: "${GCP_PROJECT_ID}"
                    )
                }
            }
        }
    }
    
    post {
        always {
            // Clean up
            sh 'rm -f /tmp/gcp-credentials.json'
        }
        
        success {
            echo 'Pipeline completed successfully!'
            // Send success notification
            // slackSend channel: "${SLACK_CHANNEL}", color: 'good', message: "Pipeline ${env.JOB_NAME} #${env.BUILD_NUMBER} completed successfully!"
        }
        
        failure {
            echo 'Pipeline failed!'
            // Send failure notification
            // slackSend channel: "${SLACK_CHANNEL}", color: 'danger', message: "Pipeline ${env.JOB_NAME} #${env.BUILD_NUMBER} failed!"
        }
    }
} 