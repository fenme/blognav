#!/bin/bash

# 下载并安装 Docker
echo "Downloading Docker installation script..."
curl -fsSL https://get.docker.com -o get-docker.sh

echo "Installing Docker..."
sudo sh get-docker.sh

# 检查 Docker 安装是否成功
if ! command -v docker &> /dev/null; then
    echo "Docker installation failed. Exiting."
    exit 1
fi

echo "Docker installed successfully."

# 验证安装
echo "Verifying Docker installation..."
docker -v

# 下载并安装 Docker Compose
echo "Downloading Docker Compose..."
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

echo "Applying executable permissions to Docker Compose..."
sudo chmod +x /usr/local/bin/docker-compose

# 检查 Docker Compose 安装是否成功
if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose installation failed. Exiting."
    exit 1
fi

# 验证安装
echo "Verifying Docker Compose installation..."
docker-compose --version

echo "Installation complete."