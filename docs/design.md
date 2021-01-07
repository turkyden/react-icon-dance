## Design

Icon Dance 是一个可交互式的 Icon 实现方式，与直接传统的呈现 Gif 动态图相比，它具有交互趣味性，当用户鼠标经过 Icon 时，Icon 会执行一些的动画效果。

我们为什么不做成 canvas 和 svg，首先，他们的难度比较大，我们推崇使用工具生成而非手写的方式去实现人机交互效果。

| Type       | 实现效果 | 可交互性 | 开发难度 |
| ---------- | -------- | :------: | :------: |
| Icon Dance |          |    :     |   ⭐⭐   |
| Gif        |          |    ⛔    |    ⭐    |
| Canvas     |          |          |          |
| svg        |          |          |          |

`antd` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。
