---
title: 'Rust 学习之函数和方法'
pubDate: 2025-09-24
description: 'Rust 学习之函数和方法'
author: 'newcode wen'

tags: ['rust']
image: {
  url: '/images/rust.png',
  alt: 'rust 学习'
}
---

## 函数

### 函数定义

Rust 中使用 `fn` 关键字来定义函数， 函数可以有参数和返回值。

```rust
fn main () {
  // function body

}
```

同变量名一样， 函数名也可以使用 snake case 命名法。

### 函数参数

函数可以定义参数， 函数的参数列表在函数名后的括号中定义， 每个参数都有一个名称和一个类型，**函数签名中，每个参数的类型是必须指定的**

> params， 人们认为是函数参数本身；argument， 人们认为是调用函数时传递的实际值。

```rust
fn main () {
  // function body
  another_function(5);
}

fn another_function (x: i32) {
  // function body
  println!("x: {}", x);
}
```

### 函数参数的类型

函数参数的类型在参数名后面指定， 多个参数之间用逗号隔开。

```rust
fn main () {
  // function body

}
```

### 函数返回值

函数可以有返回值， 返回值的类型在函数定义时指定， 返回值使用 `return` 语句返回。

```rust
fn main () {
  // function body
  let x = 5;
  let y = another_function(x);
  println!("y: {}", y);
}

fn another_function (x: i32) -> i32 {
  // function body
  x + 2
  // or return x + 2;
}
```

如果函数没有返回值， 可以省略返回值的类型， 或者使用 `()` 表示返回值为空。

```rust
fn main () {
  // function body

}
```

### 语句和表达式

- 语句是执行某些操作的指令， 没有返回值, 如函数定义
- 表达式是计算出一个值的指令， 可以是一个值、 一个函数调用、 一个操作符等。

举例

```rust

let x = 5; // 语句

let y = {
  let x = 3;
  x + 2
}; // 表达式

```

需要注意的是， `x + 2` 末尾没有分号， 这是因为 `x + 2` 是一个表达式， 而不是语句。