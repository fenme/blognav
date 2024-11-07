#!/bin/bash

# 定义备份目录
BACKUP_DIR=~/backup/apt-sources

# 创建备份目录
mkdir -p "$BACKUP_DIR"

# 备份当前的 sources.list 文件和 sources.list.d 目录
echo "备份当前源文件到 $BACKUP_DIR ..."
sudo cp /etc/apt/sources.list "$BACKUP_DIR/sources.list.backup"
sudo cp -r /etc/apt/sources.list.d "$BACKUP_DIR/sources.list.d.backup"

# 可选的源 URL
declare -A SOURCES
SOURCES=(
    ["官方源"]="https://blognav.fanma.eu.org/Sources/Debian/sources.list"
    ["中科大源"]="https://blognav.fanma.eu.org/Sources/USTC/sources.list"
    ["清华源"]="https://blognav.fanma.eu.org/Sources/Tsinghua/sources.list"
)

# 显示源列表
echo "请选择要切换的源："
select SOURCE_NAME in "${!SOURCES[@]}"; do
    if [[ -n "$SOURCE_NAME" ]]; then
        SOURCE_URL="${SOURCES[$SOURCE_NAME]}"
        echo "选择了 $SOURCE_NAME，下载源文件：$SOURCE_URL"
        break
    else
        echo "无效选择，请重新输入。"
    fi
done

# 下载并替换 sources.list
echo "从 $SOURCE_URL 下载新的 sources.list 文件 ..."
if wget -q -O /etc/apt/sources.list "$SOURCE_URL"; then
    echo "新的 sources.list 文件已下载并替换。"
else
    echo "下载失败，请检查 URL 或网络连接。"
    exit 1
fi

# 更新软件包列表
echo "更新软件包列表 ..."
sudo apt update

echo "源替换完成！"
