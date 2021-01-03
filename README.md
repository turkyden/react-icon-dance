# Getting Started

[![npm](https://img.shields.io/npm/v/react-icon-dance?color=orange)](https://www.npmjs.com/package/react-image-dangling)&nbsp;
[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://github.com/umijs/dumi)&nbsp;
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/react-icon-dance/badge)](https://www.jsdelivr.com/package/npm/react-icon-dance)&nbsp;
![License](https://img.shields.io/npm/l/react-icon-dance?style=flat-square&color=red)&nbsp;

An icon dance style cpmponent deved with react.

## 📦 Install

```bash
yarn add react-icon-dance
```

or you can:

```bash
npm install react-icon-dance
```

## 🚀 Usage

```jsx | pure
import React from 'react';
import Icon from 'react-icon-dance';

function App() {
  return (
    <Icon type="ai" size={64} interval={10} />
  )
}
```

or you can created by the React Hook `useIcon`

```jsx | pure
import React from 'react';
import { useIcon } from 'react-icon-dance';

function App() {
  const iconProps = useIcon({
    type: 'ai', 
    size: 64,
    interval: 10
  })

  return (
    <i { ...iconProps } />
  )
}
```

## 📔 API

| Params     | Description                                  | Type     | Default |
|------------|:----------------------------------------------|:----------|:---------|
| type | The media properties of extarnal resources `<link>`, support `all`/`screen`/`print`/`handheld` | `string` | all       |
| src | The async properties of extarnal resources `<script>` | `string` | 'ai'       |
| size | The DOM or Refs of container which need to load the `<img>` | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      |
| interval | The DOM or Refs of container which need to load the `<img>` | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      |
| frame | The DOM or Refs of container which need to load the `<img>` | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | 20      |

### 🔢 Coming Soon

- autoPlay
## 🔨 Contribute

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

## License

MIT