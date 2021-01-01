## Changelog

`antd` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。
#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## 4.9.4

- 🐞 修复 Menu 在 Chrome 下 hover 色延迟变化的问题。[#28372](https://github.com/ant-design/ant-design/pull/28372)
- 🐞 修复 Tree 的节点连接线在滚动时位置偏移的问题。[#28354](https://github.com/ant-design/ant-design/pull/28354) [@maksnester](https://github.com/maksnester)
- 💄 修复 Table 固定列 `z-index` 样式让 Dropdown 无法展示在最顶层的问题。[#28346](https://github.com/ant-design/ant-design/pull/28346)
- TypeScript
  - 🤖 修复 `message.loading()` 返回函数的定义。[#28362](https://github.com/ant-design/ant-design/pull/28362)

## 4.9.3

`2020-12-14`

- 💄 修复 Badge 独立使用时展示/收起动画跳动的问题。[#28240](https://github.com/ant-design/ant-design/pull/28240)
- 🐞 修复 Table `filters` 不支持数字和 boolean 类型的问题。[#28220](https://github.com/ant-design/ant-design/pull/28220) [@Meowu](https://github.com/Meowu)
- 💄 修复 Tree 当 `selectable={false}` 时节点依然有 hover 背景色的问题。[#28269](https://github.com/ant-design/ant-design/pull/28269)
- 💄 修复 Statistics 小数点字体大小问题。[#28223](https://github.com/ant-design/ant-design/pull/28223)
- TypeScript
  - 🤖 修复 Tree `draggable` 支持函数的定义。[#28262](https://github.com/ant-design/ant-design/pull/28262) [@DavidSichau](https://github.com/DavidSichau)
  - 🤖 修复 Image.PreviewGroup 类型。[#28263](https://github.com/ant-design/ant-design/pull/28263) [@liuchao233](https://github.com/liuchao233)
  - 🤖 优化 `message().then` 的 TS 定义。[#28304](https://github.com/ant-design/ant-design/pull/28304)
  - 🤖 修正 TransferProps 的 `titles` 类型为 ReactNode。[#28326](https://github.com/ant-design/ant-design/pull/28326) [@jacklee814](https://github.com/jacklee814)
  