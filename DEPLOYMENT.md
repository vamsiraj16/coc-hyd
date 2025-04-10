# Deployment Guide: Grace Landing Glow

This guide provides instructions for setting up Jenkins CI/CD and deploying the application to Google Cloud Platform (GCP).

## Prerequisites

1. **Jenkins Server**
   - Jenkins installed and running
   - Docker plugin installed
   - Git plugin installed
   - Credentials plugin installed

2. **Google Cloud Platform**
   - GCP account with billing enabled
   - Google Cloud SDK installed
   - Docker and Cloud Run APIs enabled
   - Service account with appropriate permissions

3. **Git Repository**
   - Repository with the application code
   - Jenkins has access to the repository

## Setting Up GCP

1. **Create a GCP Project**
   ```bash
   gcloud projects create grace-landing-glow --name="Grace Landing Glow"
   gcloud config set project grace-landing-glow
   ```

2. **Enable Required APIs**
   ```bash
   gcloud services enable cloudbuild.googleapis.com
   gcloud services enable run.googleapis.com
   gcloud services enable containerregistry.googleapis.com
   ```

3. **Create a Service Account**
   ```bash
   gcloud iam service-accounts create jenkins-deployer \
     --display-name="Jenkins Deployer"
   ```

4. **Grant Permissions to the Service Account**
   ```bash
   gcloud projects add-iam-policy-binding grace-landing-glow \
     --member="serviceAccount:jenkins-deployer@grace-landing-glow.iam.gserviceaccount.com" \
     --role="roles/cloudbuild.builds.builder"
   
   gcloud projects add-iam-policy-binding grace-landing-glow \
     --member="serviceAccount:jenkins-deployer@grace-landing-glow.iam.gserviceaccount.com" \
     --role="roles/run.admin"
   
   gcloud projects add-iam-policy-binding grace-landing-glow \
     --member="serviceAccount:jenkins-deployer@grace-landing-glow.iam.gserviceaccount.com" \
     --role="roles/storage.admin"
   ```

5. **Create and Download Service Account Key**
   ```bash
   gcloud iam service-accounts keys create jenkins-deployer-key.json \
     --iam-account=jenkins-deployer@grace-landing-glow.iam.gserviceaccount.com
   ```

## Setting Up Jenkins

1. **Install Required Plugins**
   - Go to Jenkins > Manage Jenkins > Manage Plugins
   - Install the following plugins:
     - Docker Pipeline
     - Google Cloud Platform
     - Credentials Binding

2. **Configure GCP Credentials**
   - Go to Jenkins > Manage Jenkins > Credentials > System > Global credentials
   - Add new credentials:
     - Kind: Secret file
     - File: Upload the `jenkins-deployer-key.json` file
     - ID: `GCP_CREDENTIALS_JSON`
   - Add another credential:
     - Kind: String
     - Secret: Your GCP project ID
     - ID: `GCP_PROJECT_ID`

3. **Configure Environment Variables**
   - Go to Jenkins > Manage Jenkins > Configure System
   - Add the following environment variables:
     - `YOUTUBE_API_KEY`: Your YouTube API key
     - `YOUTUBE_CHANNEL_ID`: Your YouTube channel ID
     - `YOUTUBE_PLAYLIST_ID`: Your YouTube playlist ID (optional)

4. **Create a Pipeline Job**
   - Go to Jenkins > New Item
   - Enter a name for the job (e.g., `grace-landing-glow-pipeline`)
   - Select "Pipeline" and click OK
   - In the Pipeline section:
     - Definition: Pipeline script from SCM
     - SCM: Git
     - Repository URL: Your repository URL
     - Branch Specifier: */main (or your default branch)
     - Script Path: Jenkinsfile

## Running the Pipeline

1. **Trigger the Pipeline**
   - Click "Build Now" to manually trigger the pipeline
   - Or configure webhooks to automatically trigger on code changes

2. **Monitor the Build**
   - View the build progress in the Jenkins console
   - Check for any errors or warnings

3. **Access the Deployed Application**
   - Once the pipeline completes successfully, the application will be deployed to Cloud Run
   - The URL will be displayed in the Jenkins console output

## Troubleshooting

1. **Jenkins Build Failures**
   - Check the Jenkins console for error messages
   - Verify that all required plugins are installed
   - Ensure credentials are correctly configured

2. **GCP Deployment Issues**
   - Verify that the service account has the necessary permissions
   - Check that the GCP APIs are enabled
   - Review the Cloud Run logs for any deployment errors

3. **Application Issues**
   - Check the application logs in Cloud Run
   - Verify that environment variables are correctly set
   - Test the application locally before deploying

## Maintenance

1. **Updating Dependencies**
   - Regularly update npm dependencies
   - Test the application after updates
   - Deploy using the Jenkins pipeline

2. **Scaling**
   - Cloud Run automatically scales based on traffic
   - Monitor usage and adjust resources as needed

3. **Backups**
   - Regularly backup your application code
   - Consider setting up a disaster recovery plan 