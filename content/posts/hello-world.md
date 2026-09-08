---
title: "你好，世界！"
date: 2026-09-08T10:00:00+08:00
draft: true
tags: ["博客"]
description: "这是我的第一篇文章，欢迎来到我的个人博客！"
summary: "这是我的第一篇文章，欢迎来到我的个人博客！"
---

欢迎来到我的个人博客！🎉

这是我搭建的第一篇文章，简单介绍一下这个博客：

- 使用 **Hugo** 静态站点生成器
- 主题是 **hugo-theme-stack**（卡片风格，左侧菜单导航）
- 托管在 **GitHub Pages** 上，完全免费

## 如何写新文章

在博客项目目录打开终端，运行：

```bash
hugo new content posts/my-new-post.md
```

然后编辑 `content/posts/my-new-post.md` 文件，把 `draft: true` 改为 `draft: false` 即可。

## 本地预览

```bash
hugo server -D
```

打开 <http://localhost:1313> 即可预览。

写好后提交并推送，GitHub Actions 会自动把博客部署到 GitHub Pages。
