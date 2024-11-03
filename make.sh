#!/bin/bash

set -o errexit

docker build \
    -f Dockerfile.base \
    -t gcr.io/thockin-joonix-dev/famf-base:latest .
docker build \
    -f Dockerfile.practice \
    -t gcr.io/thockin-joonix-dev/famf:practice .
docker build \
    -f Dockerfile.frfr \
    -t gcr.io/thockin-joonix-dev/famf:frfr .

docker push gcr.io/thockin-joonix-dev/famf-base:latest
docker push gcr.io/thockin-joonix-dev/famf:practice
docker push gcr.io/thockin-joonix-dev/famf:frfr

kubectl \
    --context famf \
    rollout restart deployment famf-practice
kubectl \
    --context famf \
    rollout restart deployment famf-frfr
