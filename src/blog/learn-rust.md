---
title: 'Rust 学习'
pubDate: 2025-09-11
description: 'Rust 入门学习'
author: 'newcode wen'

tags: ['rust']
image: {
  url: '/images/rust.png',
  alt: 'rust 学习'
}

---
# Rust

## Rust 是什么

Rust 是系统性编程语言， 专注于安全性、高性能和并发性， 重点是零成本抽象。最主要的特点就是通过不使用 `GC` 实现内存安全。

## 为什么要使用 Rust

1. 性能：Rust 是一种系统级编程语言， 性能非常高。
2. 安全性：Rust 强调内存安全， 避免了常见的内存错误， 如空指针引用、 缓冲区溢出等。
3. 并发性：Rust 支持并发编程， 可以利用多核处理器的性能优势。
4. 零成本抽象：Rust 提供了零成本抽象的特性， 开发者可以在不损失性能的情况下， 编写高级的抽象代码。

作为一名前端开发人员，发现前端工具链逐渐都开始【锈】化， 比如 oxc、 swc 等，给前端构建系统带来很大的性能提升。
但终归还是以兴趣为主，主要是希望拓展自己的学习体系。




## Rust 开发环境安装

### 安装 Rust 和 Cargo

rust 有自己的下载工具和版本管理工具，就是 `rustup`, 所以在系统中，事先安装好 `rustup` 即可。

#### Mac 系统

1. 安装 `rustup`

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

`rustup` 安装时，还会同时安装 `Cargo`， 所以安装好后，直接在命令行里通过一下命令验证是否安装成功。

```shell
rustup --version
cargo --version
```

如果安装成功，会显示 `cargo` 的版本号。

Rust 更新

```shell
rustup update
```

2. 安装 `cargo`

cargo 是 rust 的包管理工具，类似 `npm` 或者 `yarn`。

### IDEs 和工具链

作为 VsCode 重度用户， 所以这里推荐使用 VsCode 作为 Rust 的开发环境。除此之外，还有 JetBrains 的 RustRover 也可以使用。

> 其他的 IDE 还包括 Vim、Emacs、Sublime Text 等。

#### Vscode 搭建 Rust 开发环境

Vscode 中搭建 Rust 开发环境主要通过安装 `rust-analyzer` 这个插件即可，其他的插件可以在后续实际使用情况逐步安装。


### Rust Playground

[Rust Playground](https://play.rust-lang.org/) 是一个在线的 Rust 代码编辑器， 可以在浏览器中直接编写、 运行和调试 Rust 代码。