---
title: 'astro 学习'
pubData: 2025-09-12
description: 'astro 入门学习'
author: 'newcode wen'

tags: ['astro', 'blog']

---

# Astro 学习

## 创建项目

```shell
npm create astro@latest
```

## 制作页面

在 `src/pages` 目录下创建一个 `.astro` 文件，就可以制作一个页面了， 然后往里面写入 html


```astro
---
title: 'hello astro'
---

<html>
  <head>
    <title>hello astro</title>
  </head>
  <body>
    <h1>hello astro</h1>
  </body>
</html>
```
需要注意的是 ast 的 fontmatter 脚本只包含 js 代码，不包含 ts

## 发表博客文章

在 `src/pages/posts` 目录下创建一个 `.md` 文件, 然后 Astro 会根据文档名创建对于的页面路由

