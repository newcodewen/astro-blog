---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Rust 学习'
pubDate: 2025-09-11
description: 'Rust 入门学习'
author: 'newcode wen'

tags: ['rust']

---

## 版本

`1.89.0`

## 安装


rust 有自己的下载工具和版本管理工具，就是 `rustup`, 所以系统中，事先安装好 `rustup` 即可。

### Mac 系统

1. 安装 `rustup`

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

`rustup` 安装时，还会同时安装 `Cargo`

Rust 更新

```shell
rustup update
```

2. 安装 `cargo`

cargo 是 rust 的包管理工具，类似 `npm` 或者 `yarn`。