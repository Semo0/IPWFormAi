# Installation Guide for IPWFormAi Project

This guide will walk you through setting up and running the IPWFormAi project using the pre-built Docker image from Docker Hub.

## Prerequisites

Before starting, make sure the following software is installed on your system:

1. **Docker**:  
   - [Install Docker](https://docs.docker.com/get-docker/).
   - Verify installation with:
     ```bash
     docker --version
     ```

2. **Docker Compose** (if using Docker Compose):  
   - Docker Compose comes with Docker Desktop (Windows and Mac). For Linux, install it separately.
   - Verify installation with:
     ```bash
     docker-compose --version
     ```

3. **Git** :  
   - [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
   - Verify installation with:
     ```bash
     git --version
     ```

---

## Step 1: Clone the Repository

First, clone the project repository from GitHub using:

```bash
git clone https://github.com/Semo0/IPWFormAi.git
```

## Step 2: Get into project directory

```bash
cd IPWFormAi
```
## Step 2: Pull the Docker Image from Docker Hub

```bash
docker pull sem0/bp-group-16:1.1
```

# Docker commands 

1. Run the container 
```bash
docker-compose up
```
This will launch the container, set up the environment, and expose Jupyter Notebook on port 8888.

2. Stop the container:

```bash
docker-compose down
```
3. View running containers:

```bash
docker-compose ps
```
4. Restart the container:

```bash
docker-compose ps
```
5. Check container logs:

```bash
docker-compose logs
```

### To open Jupyter Notebook 

- In the browser :
```bash
http://localhost:8888
```
If Asked for a token :
ipwvia16