# 🗳️ Component

The `<Icon />` is wrapped with html tag and defaulted `<i>`.

## Type

```tsx
import React from 'react';
import Icon from 'react-icon-dance';

export default () => (
  <div
    style={{ display: 'flex', justifyContent: 'space-around', width: '20rem' }}
  >
    <Icon type="ai" />
    <Icon type="big_data" />
    <Icon type="cdn" />
  </div>
);
```

## Src

You can customize your icon url by the `src` properties.

```tsx
import React from 'react';
import Icon from 'react-icon-dance';

export default () => (
  <div
    style={{ display: 'flex', justifyContent: 'space-around', width: '20rem' }}
  >
    <Icon src="https://cdn.jsdelivr.net/gh/turkyden/react-icon-dance@master/src/assets/@aliyun/cloud_essentials.png" />
    <Icon src="https://cdn.jsdelivr.net/gh/turkyden/react-icon-dance@master/src/assets/@aliyun/cloud_native.png" />
    <Icon src="https://cdn.jsdelivr.net/gh/turkyden/react-icon-dance@master/src/assets/@aliyun/dev_ops.png" />
  </div>
);
```

## Size

You can customize the `size` of your icon under the premise of ensuring the `quality` of the picture.

```tsx
import React from 'react';
import Icon from 'react-icon-dance';

export default () => (
  <div
    style={{ display: 'flex', justifyContent: 'space-around', width: '20rem' }}
  >
    <Icon type="ai" size={48} />
    <Icon type="ai" size={64} />
    <Icon type="ai" size={96} />
  </div>
);
```

Tips: the unit of size is `px`

## Frame

The `frame` number of icon animate.

```tsx
import React from 'react';
import Icon from 'react-icon-dance';

export default () => (
  <div
    style={{ display: 'flex', justifyContent: 'space-around', width: '20rem' }}
  >
    <Icon type="ai" frame={5} />
    <Icon type="ai" frame={10} />
    <Icon type="ai" frame={20} />
  </div>
);
```

Tips: Recommend `20` fps (Frames Per Secondames)

## Interval

The speed of icon animate `interval`.

```tsx
import React from 'react';
import Icon from 'react-icon-dance';

export default () => (
  <div
    style={{ display: 'flex', justifyContent: 'space-around', width: '20rem' }}
  >
    <Icon type="ai" interval={0} />
    <Icon type="ai" interval={20} />
    <Icon type="ai" interval={40} />
  </div>
);
```

Tips: (fast `0`) -> (middle `20`) -> (slow `40`)
