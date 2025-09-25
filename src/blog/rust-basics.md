---
title: 'Rust 基础学习'
pubDate: 2025-09-11
description: 'Rust 基础'
author: 'newcode wen'

tags: ['rust']
image: {
  url: '/images/rust.png',
  alt: ''
}
---

## Hello World

初学一门语言，必须把 `Hello World` 写出来， 才能开始学习。

1. 新建一个 `hello_world` 目录

```shell
mkdir hello_world
cd hello_world
```

2. 新建一个 `main.rs` 文件, 并将以下代码写入 `main.rs` 文件

```rust
fn main() {
    println!("Hello World");
}
```


3. 编译并运行 `main.rs` 文件

```shell
rustc main.rs
./main
```

如果一切顺利， 你应该能在终端中看到 `Hello World` 输出。 


从以上就可以学习到以下几点：

1. 入口函数为 `main`
2. rustc 是 Rust 编译器， 用于将 Rust 代码编译为可执行文件, `main.rs` 编译成了 `main` 文件（windows 下是 `main.exe`）
3. 编译后的可执行文件可以在任何操作系统上运行， 包括 Windows、 macOS 和 Linux

对于简单的程序， 可以直接使用 `rustc` 编译并运行。 但对于复杂的程序， 建议使用 `Cargo` 来管理项目。

## 变量和可变性

在 Rust 中， 变量的声明通过关键字 `let` 进行声明

```rust
  let x = 5;
```

**默认情况下，变量是不可变的。** 一个 Rust 不可变的变量一旦被绑定到一个值， 就不能再改变这个值。

> 这里的不可变结合 JS 语言可以理解为 `const`， 而可变可以理解为 `let`


查看如下代码

```rust
fn main() {
    let x = 5;
    println!("x = {}", x);

    x = 6;
    println!("x = {}", x);
}
```
执行 `cargo run` 就会得到如下输出

```
% cargo run   
   Compiling variables_mutability v0.1.0 (/Users/wenfucheng/Documents/projects/rust_projects/variables_mutability)
error[E0384]: cannot assign twice to immutable variable `x`
 --> src/main.rs:5:5
  |
2 |     let x = 5;
  |         - first assignment to `x`
...
5 |     x = 6;
  |     ^^^^^ cannot assign twice to immutable variable
  |
help: consider making this binding mutable
  |
2 |     let mut x = 5;
  |         +++

For more information about this error, try `rustc --explain E0384`.
error: could not compile `variables_mutability` (bin "variables_mutability") due to 1 previous error
```

其中， `cannot assign twice to immutable variable` 错误提示了我们， 变量 `x` 是不可变的， 不能被重新赋值。

为了使变量可变， 我们需要在变量名前添加 `mut` 关键字。

```rust
fn main() {
    let mut x = 5;
    println!("x = {}", x);

    x = 6;
    println!("x = {}", x);
}
```

再次执行 `cargo run` 就会得到如下输出

```
% cargo run 
   Compiling variables_mutability v0.1.0 (/Users/wenfucheng/Documents/projects/rust_projects/variables_mutability)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.24s
     Running `target/debug/variables_mutability`
x = 5
x = 6
```

## 常量

顾名思义， 常量语义上本身就是是不可变的，如圆周率 π。

Rust 中，常量的声明使用 `const` 关键字进行声明

```rust
const PI: f64 = 3.1415926;
```

常量的类型必须被注解， 因为 Rust 是静态类型语言， 所以必须知道常量的类型。

同样的，常量只能声明为常量表达式， 而不能声明为运行时计算的结果。

> 常量的命名约定是使用全大写字母， 单词之间用下划线分隔。


## 数据类型

Rust 中的每个数据值都有一个确定的类型， 这使得 Rust 是一种静态类型语言。

Rust 中的数据类型可以分为以下几类：

1. 标量类型： 包括整数、 浮点数、 布尔值和字符。
2. 复合类型： 包括元组和数组。

看下面这段代码

```rust
let guess = "42".parse().expect("Not a number!");
```
然后执行，就会得到如下输出

```plaintext
cargo run 
   Compiling data_types v0.1.0 (/Users/wenfucheng/Documents/projects/rust_projects/data_types)
error[E0284]: type annotations needed
 --> src/main.rs:2:9
  |
2 |     let guess = "42".parse().expect("Not a number!");
  |         ^^^^^        ----- type must be known at this point
  |
  = note: cannot satisfy `<_ as FromStr>::Err == _`
help: consider giving `guess` an explicit type
  |
2 |     let guess: /* Type */ = "42".parse().expect("Not a number!");
  |              ++++++++++++

For more information about this error, try `rustc --explain E0284`.
error: could not compile `data_types` (bin "data_types") due to 1 previous error
```

这是因为变量 `guess` 的类型不能被推断出来， 所以需要显式地指定类型。

```rust
let guess: u32 = "42".parse().expect("Not a number!");
```

### 标量类型

Rust 中的标量类型包括整数、 浮点数、 布尔值和字符。

#### 整数类型

Rust 中的整数类型包括有符号和无符号两种。

有符号整数类型包括 `i8`、 `i16`、 `i32`、 `i64`、 `i128` 和 `isize`。

无符号整数类型包括 `u8`、 `u16`、 `u32`、 `u64`、 `u128` 和 `usize`。

其中， `isize` 和 `usize` 类型的位数取决于运行程序的计算机架构。 例如， 在 64 位架构上， `isize` 和 `usize` 类型的位数都是 64 位。

#### 浮点数类型

Rust 中的浮点数类型包括 `f32` 和 `f64`。

`f32` 类型是单精度浮点数， 占用 4 个字节。

`f64` 类型是双精度浮点数， 占用 8 个字节。

`f64` 是默认的浮点数类型， 因为它在大多数平台上都有较好的性能。

#### 布尔类型

Rust 中的布尔类型只有 `true` 和 `false` 两个值，大小为一个字节


#### 字符类型

Rust 中的字符类型是 `char`， 占用 4 个字节。

字符类型表示一个 Unicode 标量值， 所以可以表示任何 Unicode 字符。

```rust
let c = 'a';
```

需要注意的是，字符类型在 Rust 是单引号 `'` 括起来的， 而不是双引号 `""`。

### 复合类型

复合类型可以将多个值组合成一个类型。

Rust 中的复合类型包括元组和数组。


#### 元组

元组是将具有**多种类型的多个值**组合成一个类型。元组具有固定长度，不可以增大或减小，通过在括号中用逗号分隔每个值来创建元组。


```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
```

元组的每个位置都有一个类型， 元组的类型是由每个位置的类型组合而成的。

在上面的代码中， 元组 `tup` 包含了一个 `i32` 类型的元素、 一个 `f64` 类型的元素和一个 `u8` 类型的元素。

#### 数组

数组是将具有**相同类型的多个值**组合成一个类型。数组具有固定长度，不可以增大或减小。

```rust
let a = [1, 2, 3];
```

数组的每个元素都有相同的类型， 数组的类型是由元素的类型和数组的长度组合而成的。

在上面的代码中， 数组 `a` 包含了三个 `i32` 类型的元素。

