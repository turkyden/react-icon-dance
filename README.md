# Getting Started

A icon dance style cpmponent deved with react.

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
import Icon from 'react-icon-dance';
import icon from '../assets/icon.png';

function App() {
  return (
    <Icon size={64} interval={10} src={icon} />
  )
}
```

## 📔 API

| Params     | Description                                  | Type     | Default |
|------------|:----------------------------------------------|:----------|:---------|
| async | The async properties of extarnal resources `<script>` | `boolean` | true       |
| media | The media properties of extarnal resources `<link>`, support `all`/`screen`/`print`/`handheld` | `string` | all       |
| target | The DOM or Refs of container which need to load the `<img>` | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      |

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