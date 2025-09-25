---
title: 'Rust 学习之 Cargo'
pubDate: 2025-09-11
description: 'Rust 学习之 Cargo'
author: 'newcode wen'

tags: ['rust']
image: {
  url: '/images/rust.png',
  alt: 'rust 学习'
}

---

## 介绍

Cargo 是 Rust 的构建系统和包管理器。

## 安装
 
cargo 的安装会在安装 `rustup` 时顺带安装，所以如果有安装 `rustup`, 通过以下命令验证即可

```shell
cargo --version
```

## 创建项目


### 新建项目
```shell
cargo new hello_cargo
```

然后会创建一个 `hello_cargo` 目录， 目录下有 `src` 目录和 `Cargo.toml` 文件。
目录结构如下

```
hello_cargo
├── Cargo.toml
└── src
    └── main.rs
```

新创建的项目会使用 git 进行版本控制以及生成 `.gitignore` 文件

`Cargo.toml` 是项目的配置文件， 用于指定项目的元数据、 依赖和构建配置, 结构如下：

```toml
[package]
name = "hello_cargo"
version = "0.1.0"
edition = "2021"

[dependencies]

```

- `name` 项目的名称
- `version` 项目的版本
- `edition` 项目使用的 Rust 版本, 例如 `2021`
- `dependencies` 项目的依赖


### 运行项目
创建好之后，直接使用 `cargo` 运行项目：

```shell
cargo build
```

该命令会项目根目录生成一个 `target` 目录和 `Cargo.lock` 文件， 并在`target` 目录下生成 `debug/hello_cargo` 可执行文件， 运行该可执行文件可以查看代码输出

```shell
./target/debug/hello_cargo
```

上述需要用户手动运行 `./target/debug/hello_cargo` 来查看输出。

为了方便起见， 可以使用 `cargo run` 来运行项目

```shell
cargo run
```

该命令会自动编译项目并运行 `target/debug/hello_cargo` 可执行文件， 并将输出打印到终端中，如果文件没有修改且已经编译过了，则直接运行，不会重新编译。

### 检查代码

Cargo 提供了 `cargo check` 命令来检查项目的代码是否有错误， 但不会编译项目， 因此速度很快。

```shell
cargo check
```

### 发布构建


Cargo 提供了 `cargo build --release` 命令来构建项目的发布版本。

```shell
cargo build --release
```

该命令会在 `target/release` 目录下生成 `hello_cargo` 可执行文件， 该文件的运行速度会更快， 因为它是经过优化的。

