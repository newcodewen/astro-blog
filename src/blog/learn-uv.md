---
title: 'uv 学习'
pubDate: 2025-09-11
description: 'uv 入门学习'
author: 'newcode wen'

tags: ['uv', 'python']
image: {
  url: '/images/uv.png',
  alt: 'uv 学习'
}

---

# uv 

## 安装

Mac 系统

```shell
curl -LsSf https://astral.sh/uv/install.sh | sh
```

当然，也可以通过 `pipx` 安装 

```shell
pipx install uv
```

```shell
To add $HOME/.local/bin to your PATH, either restart your shell or run:

 source $HOME/.local/bin/env (sh, bash, zsh)
 source $HOME/.local/bin/env.fish (fish)
```

安装好后，还要将 `uv` 加
```shellß
uv --version
```

## 功能

### python 版本管理

- `uv python install` 安装 python 版本
- `uv python list` 查看可用的 python 版本
- `uv python find` 查找已安装的 python 版本
- `uv python pin` 固定当前项目使用一个指定的 python 版本
- `uv python uninstall` 卸载 python 版本

这里建议通过 `chsrc` 设置镜像源

```shell
chsrc set uv
```

### 脚本管理

执行稳定的 python 脚本

- `uv run <script>` 执行 python 脚本
- `uv add --script ` 添加一个依赖至一个脚本
- `uv remove --script` 从脚本中移除一个依赖

### 项目管理

通过 `pyproject.toml` 管理项目

- `uv init` 初始化一个项目
- `uv add <package>` 添加一个依赖至项目
- `uv remove <package>` 从项目中移除一个依赖
- `uv lock` 锁定项目依赖
- `uv sync` 同步项目依赖
- `uv run <command>` 运行项目中的命令
- `uv tree` 查看项目依赖树
- `uv build` 导出项目依赖
