---
title: 'astro 学习'
pubDate: 2025-09-12
description: 'astro 入门学习'
author: 'newcode wen'

tags: ['astro', 'blog']
image: {
  url: '/images/astro.png',
  alt: 'astro 学习'
}

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
</html>ß
```
需要注意的是 astro 的 fontmatter 脚本只包含 js 代码，不包含 ts

astro 的语法类似 JSX

### 添加样式 

在 style tag 中，通过 `define:vars={{variableName1, variableName2}}` 来引用 frontmatter 中的变量

```astro
---
const titleColor = 'purple'
---

<html>
  <head>
    <title>hello astro</title>
    <style define:vars={{titleColor}}>
      h1 {
        color: var(--titleColor);
      }
    </style>
  </head>
  <body>
    <h1>hello astro</h1>
  </body>
</html>
```

全局样式，通过 `src/styles/global.css` 来添加全局样式

## 发表博客文章

在 `src/pages/posts` 目录下创建一个 `.md` 文件, 然后 Astro 会根据文档名创建对于的页面路由


## 组件

组件创建在 `src/components` 目录下

### 组件的创建



函数组件的创建，需要在 `src/components` 目录下创建一个 `.astro` 文件， 文件名就是组件的名称

可以通过 `Astro.props` 来获取组件的 props

同时在组件中通过 style 标签来添加样式

```astro
---
const { title } = Astro.props;
---

<h1>{title}</h1>

<style>
  h1 {
    color: var(--titleColor);
  }
</style>
```

### 组件插槽

Astro 的插槽通过 `slot` 标签来实现

## 脚本

Astro 脚本的添加，需要在 `src/scripts` 目录下创建一个 `.js` 文件，文件名就是脚本的名称

然后可以在组件中通过 `import` 来引入脚本， 来实现客户端的交互


## Astro API

- `import.meta.global()` 从项目中访问文件的数据，返回一个对象数组
- `getStaticPaths()` 批量创建多个页面

## 动态页面路由

Astro 中，动态路由通过 `[param].astro` 来实现， 其中 `param` 就是动态路由的参数

例如 `[id].astro` 就是一个动态路由， 其中 `id` 就是动态路由的参数

### 动态路由的参数

动态路由的参数可以通过 `Astro.params` 来获取

例如 `[id].astro` 中， 可以通过 `const { id } = Astro.params` 来获取 `id` 参数

### 动态路由的页面数据

动态路由的页面数据可以通过 `getStaticPaths` 来获取

例如 `[id].astro` 中， 可以通过 `getStaticPaths` 来获取所有的 `id` 参数

```astro
---
export async function getStaticPaths() {
  return [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];
}
---
```


## 添加订阅源

Astro 通过 `@astrojs/rss` 来添加订阅源

### 安装

```shell
npm install @astrojs/rss
```

### 配置

通过添加 `rss.xml.js` 文件来配置订阅源

```js
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
```

## Astro 群岛

### 添加 React 群岛

```shell
pnpm astro add react
```

然后按照提示就可以了


### 群岛组件

群岛组件其实跟对应的 UI 框架的组件是一样的， 只是需要在组件使用时添加 `client:load` 或者 `client:visible` 等**注水的组件**来指定组件的渲染时机

> 注水的组件就是在页面渲染时，需要加载 JS 代码进行页面交互的组件

假如我们有一个 React 组件 `Greeting`， 我们可以在 `src/components` 目录下创建一个 `Greeting.tsx` 文件， 包含部分交互的 JS 代码

使用时， 注水的组件需要添加 `client:load` 或者 `client:visible` 等属性来指定组件的渲染时机， **只针对 UI 框架的组件**

```astro
<Greeting client:load messages={["你好", "你好呀", "安好"]} />
```

## Astro 内容集合（Content Collections）

Astro 的内容集合是在 Astro 管理内容集的最佳方式。结构相似的数据集可以定义为一个集合，可以 Markdown 或者 数据文件（如 JSON、YAML 等）

内容集合依靠 typescript 为编辑器提供 Zod 验证、智能提示和类型检查。

相关的 typescript 配置如下：

1. 扩展 Astro 的 `strict` 配置如下

```JSON
{
  "extends": "astro/tsconfigs/strict",
}

2. 或者添加 `strictNullChecks` 配置如下

```JSON
{
  "compilerOptions": {
    "strictNullChecks": true,
  }
}
```


