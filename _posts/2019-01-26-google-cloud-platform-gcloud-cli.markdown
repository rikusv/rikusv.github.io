---
layout: post
title:  "Google Cloud Platform `gcloud` CLI"
categories: [code, notes]
---

Create a project:

```bash
gcloud projects create some-project
```

Activate billing for the project in the [Cloud Console](https://console.cloud.google.com).

> **Managing configurations**
>
> Create or activate a configuration to avoid having to pass project, zone, etc. arguments to `gcloud` all the time:
>
> ```bash
gcloud config configurations create some-configuration
> ```
>
> ```bash
gcloud config configurations activate some-configuration
> ```
>
> To view config for a configuration:
>
> ```bash
gcloud config configurations describe some-configuration
> ```
>
> To set config in active configuration:
>
> ```bash
gcloud config set project some-project
> ```

Activate Compute API:

```bash
gcloud services enable compute.googleapis.com
```

Set Compute zone:

```bash
gcloud config set compute/zone some-zone
```

> To list available zones:
>
> ```bash
gcloud compute zones list
> ```

Create a Compute instance from an image:

```bash
gcloud compute instances create my-instance --image-project=ubuntu-os-cloud --image=ubuntu-1804-bionic-v20181222 --machine-type=f1-micro
```

> To list available images:
> ```bash
gcloud compute images list
> ```
>
> To list available machine types:
> ```bash
gcloud compute machine-types list
> ```

SSH to the created instance:

```bash
gcloud compute ssh my-instance
```

Install Docker on `my-instance`:

```bash
sudo snap install docker
```
