## Design

Icon Dance 是一个可交互式的 Icon 实现方式，与直接传统的呈现 Gif 动态图相比，它具有交互趣味性，当用户鼠标经过 Icon 时，Icon 会执行一些的动画效果。

我们为什么不做成 canvas 和 svg，首先，他们的难度比较大，我们推崇使用工具生成而非手写的方式让设计师去实现视觉效果。

| 技术       | 可交互性 | 开发难度   |
| ---------- | :------: | :--------- |
| Icon Dance |    ✅    | ⭐⭐       |
| Gif        |    ⛔    | ⭐         |
| Canvas     |    ✅    | ⭐⭐⭐⭐⭐ |
| svg        |    ⛔    | ⭐⭐⭐     |

### Guide

Ai 绘制矢量图形，导入 PS 进行 GIF 动画制作，然后将 GIF 的每一帧拆成单独的图层，平铺至一张画布。

### Test

将制作好的图片上传至 Icon Dance Playground 测试一下交互效果吧。

### Comming

后续我们将开发 Icon Dance 的插件

- Sketch
- Adobe XD
- Figma Web

敬请期待 ...
