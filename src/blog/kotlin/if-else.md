---
title: "Kotlin 条件控制：if-else 和 when"
pubDate: 2025-01-05
description: "学习 Kotlin 中的条件判断语句 if-else 和多分支判断 when 的使用方法"
author: "newcode wen"
tags: ["Kotlin"]
---

## if-else

`if-else` 用于结果判断

```kotlin
val score = 2
val res = if (score > 2) "yes" else "no"
```

另一种写法

```kotlin
val res = if (score > 2) {
    "yes"
} else {
    "no"
}
```


## when

`when` 用于多分支判断

```kotlin
val score = 2
val res = when (score) {
    1 -> "A"
    2 -> "B"
    3 -> "C"
    else -> "D"
}
```

`when`  多条件和范围语法判断

```kotlin
val score = 2
val res = when (score) {
    1, 2 -> "A"
    3, 4 -> "B"
    in 5..10 -> "C"
    else -> "D"
}
```
