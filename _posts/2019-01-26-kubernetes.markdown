---
layout: post
title:  "Kubernetes"
categories: [code, notes]
---

https://kubernetes.io/docs/reference/kubectl/cheatsheet/

Create, list, and delete clusters on Google Kubernetes Engine:

```bash
gcloud container clusters create some-cluster
gcloud container clusters list

  # NAME          LOCATION    MASTER_VERSION  MASTER_IP      MACHINE_TYPE   NODE_VERSION   NUM_NODES  STATUS
  # some-cluster  us-east1-b  1.10.11-gke.1   35.196.79.168  n1-standard-1  1.10.11-gke.1  3          RUNNING

gcloud container clusters delete cluster-name # Delete cluster
```

Set and view cluster context:

```bash
kubectl config use-context gke_some-project_some-zone_some-cluster

 # Switched to context "gke_some-project_some-zone_some-cluster".

kubectl config current-context

  # gke_some-project_some-zone_some-cluster
```

Create and list container deployments:

```bash
kubectl run some-deployment --image=nginx

  # deployment.apps "some-deployment" created

kubectl get deployments

  # NAME              DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
  # some-deployment   1         1         1            1           17s

kubectl get pods

  # NAME                               READY     STATUS    RESTARTS   AGE
  # some-deployment-548db9d48c-7qsqt   1/1       Running   0          41s
```

Expose and check services:

```bash
kubectl expose deployment some-deployment --port 80 --type LoadBalancer
kubectl get services

  # NAME              TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)        AGE
  # kubernetes        ClusterIP      10.47.240.1     <none>           443/TCP        48m
  # some-deployment   LoadBalancer   10.47.247.192   35.196.187.108   80:30248/TCP   1m

curl 35.196.187.108:80

  # ...
  # <title>Welcome to nginx!</title>
  # ...
```

Get logs:

```bash
kubectl logs some-pod # View logs
kubectl logs -f some-pod # Stream logs
```

Open interactive shell:

```bash
kubectl exec some-pod -it -c some-deployment bin/bash
```

Generate YAML (or JSON) config from running deployment (or pod):

```bash
kubectl get deployments some-deployment --export -o yaml > some-deployment.yaml

# After changes to file, running deployment can be updated using:
kubectl replace -f some-deployment.yaml

```
