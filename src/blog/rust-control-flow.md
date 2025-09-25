---
title: 'Rust 学习之控制流'
pubDate: 2025-09-24
description: 'Rust 学习之控制流'
author: 'newcode wen'

tags: ['rust']
image: {
  url: '/images/rust.png',
  alt: 'rust 学习'
}
---

## 控制流

rust 中的控制流包括 `if` 表达式、 `loop` 循环、 `while` 循环、 `for` 循环等。

### if 表达式

`if` 表达式用于根据条件执行不同的代码分支。

```rust
let number = 6;

if number % 2 == 0 {
    println!("number is even");
} else {
    println!("number is odd");
}
```

需要注意的是， `if` 表达式的条件必须是 `bool` 类型， 否则会编译错误。与 JS 等语言不同。

`if` 和 `else if` 可以处理多个分支条件

```rust
let number = 6;

if number % 2 == 0 {
    println!("number is even");
} else if number % 3 == 0 {
    println!("number is divisible by 3");
} else {
    println!("number is odd");
}
```

结合 `let` 表达式使用

```rust
let number = 6;

let is_even = if number % 2 == 0 {
    true
} else {
    false
};
```

上述如果不同分支返回的数据类型不同， 就会编译报错

```rust
let condition = true;
let num = if condition {
    10
} else {
    "ten"
};

```

```plaintext
error[E0308]: `if` and `else` have incompatible types
 --> src/main.rs:6:9
  |
3 |       let num = if condition {
  |  _______________-
4 | |         10
  | |         -- expected because of this
5 | |     } else {
6 | |         "ten"
  | |         ^^^^^ expected integer, found `&str`
7 | |     };
  | |_____- `if` and `else` have incompatible types

For more information about this error, try `rustc --explain E0308`.
error: could not compile `playground` (bin "playground") due to 1 previous error
```

> 在 Rust 中，代码块的计算结果是最后一个表达式的值， 数字本身也是表达式。


### 循环

rust 提供了三种循环： `loop`、 `while`、 `for`。


#### loop 循环


`loop` 循环会无限执行， 直到 `break` 语句被执行。

```rust
loop {
    println!("again!");
}
```
上面的代码会无限打印 `again!`， 直到程序被手动终止。

同样，我们可以从 loop 循环中返回值

```rust
let mut counter = 0;

let result = loop {
    counter += 1;

    if counter == 10 {
        break counter * 2;
    }
};

println!("The result is: {}", result); // 20
```

也可以在 loop 中使用 return 语句， 来返回一个值, 但是这种情况**不仅仅退出循环，而是总是退出当前函数**

loop 循环的标签， 可以用于在 `break` 或 `continue` 语句中指定退出或继续的循环



#### while 循环

`while` 循环会在条件为 `true` 时执行循环体， 否则退出循环。

> 我们可以使用 loop 结合 if 表达式来实现 `while` 循环的功能

```rust
let mut number = 3;

while number != 0 {
    println!("number: {}", number);
    number -= 1;
}
```

#### for 循环

for 循环是为集合中的每个元素执行一次循环体


```rust
let a = [1, 2, 3];

for element in a {
    println!("element: {}", element);
}
```

