#!/bin/bash

set -e

name=$1

if [ -z "$name" ]; then
  echo "Please provide a name as an argument."
  exit 1
fi

# Build and push Docker image
docker build -t "${name}" .
docker tag "${name}" "registry.digitalocean.com/kubectl/${name}"
docker push "registry.digitalocean.com/kubectl/${name}"

# Apply the DigitalOcean Kubernetes manifest
doctl registry kubernetes-manifest | kubectl apply -f -

# Patch the default service account
kubectl patch serviceaccount default -p '{"imagePullSecrets": [{"name": "registry-kubectl"}]}'

# Create a deployment and expose it
kubectl create deployment "${name}" --image="registry.digitalocean.com/kubectl/${name}"
kubectl expose deployment "${name}"
kubectl expose deployment "${name}" --type=LoadBalancer --port 80 --target-port 8080

# Get the external IP address of the LoadBalancer service
external_ip=$(kubectl get service "${name}" -o jsonpath="{.status.loadBalancer.ingress[0].ip}")
echo "External IP: ${external_ip}"
