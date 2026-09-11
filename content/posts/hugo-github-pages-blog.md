---
title: 从零搭建免费个人博客：Hugo + GitHub Pages 实战小结
date: 2026-09-11T20:23:00+08:00
description: 零成本搭建个人博客的实战小结：技术选型、搭建流程、个性化定制、踩坑优化与安全建议。
tags: [Hugo, GitHub Pages, 静态博客, 建站]
---

# 从零搭建免费个人博客：Hugo + GitHub Pages 实战小结

## 一、为什么选这套方案

- **零成本**：不需要购买云服务器、域名和数据库
- **静态站点**：构建后就是纯 HTML/CSS/JS，访问快、无后端漏洞面
- **全自动发布**：写完文章 push 代码，GitHub Actions 自动构建并部署
- **长期可维护**：内容就是一堆 Markdown 文件，迁移自由

技术栈：**Hugo**（静态站点生成器）+ **hugo-theme-stack**（卡片风主题）+ **GitHub Pages**（免费托管）。

## 二、搭建流程（半天可完成）

1. 安装 Git、Hugo（extended 版）、GitHub CLI，全部来自官方渠道
2. `hugo new site` 创建站点，主题用 git submodule 引入，方便后续更新
3. 配置 `hugo.toml`：站点信息、导航菜单、侧边栏组件（包含：搜索/归档/标签）
4. 创建 GitHub 仓库并配置 Actions 工作流：检出代码 → `hugo --minify` 构建 → 部署到 Pages
5. 日常写作：Typora 编辑 Markdown，本地 `hugo server -D` 实时预览，推送即上线

核心目录结构：

```
my-blog/
├── content/posts/      # 文章
├── assets/scss/        # 自定义样式
├── layouts/            # 模板覆盖
├── static/             # 字体、图片、脚本
└── .github/workflows/  # 自动部署工作流
```

## 三、个性化定制思路

大部分效果只靠一个 `custom.scss` + 少量模板覆盖实现：

- **全站深色主题**：固定配色，隐藏浅色切换
- **自定义中文字体**：`@font-face` 引入 TTF，配合系统字体兜底
- **鼠标指针**：把图片提取成透明 PNG 作为光标，按下时切换另一张
- **背景雪花**：Canvas 绘制，粒子大小、速度、透明度随机
- **心跳分隔线**：SVG 波形平铺 + CSS 动画，让分界线模拟"跳动"
- **右侧悬浮组件**：默认收起贴边，鼠标靠近滑出，不挤占正文

## 四、踩坑与优化（干货）

1. **文章不显示**：日期写成了未来时间，Hugo 默认不构建未来日期的文章
2. **本地预览无样式**：`baseURL` 带子路径导致 CSS 404；改为相对根路径，正式域名由部署流程自动注入
3. **自定义 SCSS 不生效**：Hugo 资源缓存导致，清理 `resources/_gen` 后重新构建即可
4. **页面点击卡顿**：整屏 Canvas 雪花以 60fps 重绘占用主线程；降频到 30fps、减少粒子数、预加载图片指针后恢复流畅

## 五、安全与隐私

- 所有软件只从官方渠道获取，安装包校验哈希
- 静态站没有后端和数据库，天然没有服务器漏洞面
- 仓库里不写入任何密钥、密码、个人隐私；公开仓库的提交记录和构建日志人人可见，发布前先自查
- 素材版权：使用的字体均为免费授权

## 六、成果

博客地址：https://nno-coo.github.io/noo/

## 八、下载链接参考（均为官方渠道）

- **Hugo**（静态站点生成器）
  - 官网安装指南：https://gohugo.io/installation/
  - 官方发布页（Windows Extended 版）：https://github.com/gohugoio/hugo/releases
- **Git**：https://git-scm.com/downloads
- **GitHub CLI**：https://cli.github.com/
- **GitHub 账号注册**：https://github.com/signup
- **GitHub Pages 官方文档**：https://docs.github.com/pages
- **hugo-theme-stack 主题**：https://github.com/CaiJimmy/hugo-theme-stack
- **Typora**（Markdown 编辑器）：https://typora.io/
- **winget 包管理器**（可选，命令行安装上述工具）：https://learn.microsoft.com/windows/package-manager/

> 提示：以上均为官方发布页；下载后建议校验哈希，或直接用系统包管理器安装，不要从来路不明的第三方站点下载。免费中文字体请从字体作者的官方发布页获取，并确认授权范围。