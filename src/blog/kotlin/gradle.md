---
title: "Gradle 项目配置源"
pubDate: 2025-01-05
description: "配置 Gradle 和 Maven 国内镜像源，加速项目依赖下载"
author: "newcode wen"
tags: ["Kotlin", "Gradle"]
---


## 配置 gradlew 的源

`/gradle/wrapper/gradle-wrapper.properties`

```properties
distributionUrl=https\://mirrors.cloud.tencent.com/gradle/gradle-9.0.0-bin.zip
```

这里主要以腾讯源


## 配置 maven 源

`build.gradle.kts`


```kts

repositories {
    maven { url = uri("https://maven.aliyun.com/repository/public") }
    maven { url = uri("https://maven.aliyun.com/repository/gradle-plugin") }
    mavenCentral()
    intellijPlatform {
        defaultRepositories()
    }
}
```