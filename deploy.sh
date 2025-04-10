#!/bin/bash

# Default to staging if no environment is specified
ENVIRONMENT=${1:-staging}

# Validate environment
if [[ "$ENVIRONMENT" != "staging" && "$ENVIRONMENT" != "production" ]]; then
  echo "Error: Environment must be either 'staging' or 'production'"
  exit 1
fi

# Set environment-specific variables
if [[ "$ENVIRONMENT" == "staging" ]]; then
  IMAGE="coc-hyd:staging"
  NAMESPACE="staging"
else
  IMAGE="coc-hyd:production"
  NAMESPACE="production"
fi

# Create namespace if it doesn't exist
kubectl create namespace $NAMESPACE --dry-run=client -o yaml | kubectl apply -f -

# Apply environment-specific configuration
envsubst < deployment.yaml | kubectl apply -f - -n $NAMESPACE

echo "Deployed to $ENVIRONMENT environment in namespace $NAMESPACE" 