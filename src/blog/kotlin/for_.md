---
title: "Kotlin 循环语句 for"
pubDate: 2025-01-05
description: "学习 Kotlin 中的循环语句 for 的使用方法"
author: "newcode wen"
tags: ["Kotlin"]
---

# Kotlin 循环语句 for


`for` 循环用于遍历集合或范围

```kotlin
fun main() {
    val range = 1..100 step 2

    for (i in range) {
        println(i)
    }
}

```

