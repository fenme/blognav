# 自助链接

通过本项目，可以把你的网站链接很方便地添加到我的博客导航网上面来。
  
首先 Fork 此项目到你的仓库列表当中，然后再你的仓库表里找到 blognav 仓库。
  
进入 blognav 仓库并找到 blognav/content/Blognav 目录，在此目录添加一个文件，文件名建议以你网站的域名为名建立一个 `.md` 文件。（示例：fanma.eu.org.md）

在文件里根据下面的格式填写相关的信息，填写完成后保存提交即可。



## 链接格式

```md
---
title: "网站名称"
description: "网站地址"
featured_image: "/images/logos/blognav.fanma.eu.org.png"
date: 2023-02-20T23:25:17+08:00
---

这里填写网站简介说明。
```

网站图标可以上传到你的 blognav 仓库 `blognav/themes/BlogNav/static/images/logos/` 目录下即可,
上传到 blognav 仓库的图标地址为 `/images/logos/blognav.fanma.eu.org.png` ，其中 blognav.fanma.eu.org.png 为你的网站图标文件名称。

## Pull requests

上面的操作做好后，就点击仓库菜单栏的 `Pull requests` 链接按钮，在 `Pull requests` 页面找到 `New pull request` 按钮，点击 `New pull request` 按钮进行提交一个新的拉取请求。

拉取请求提交完成后，等待 [博客导航网](https://blognav.fanma.eu.org/) 确认你的网站链接添加后，你的网站就可以显示在 `博客导航网` 的首页上面了。