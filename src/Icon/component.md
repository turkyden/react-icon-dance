# Component

The `<Icon />` is wrapped by `<div>`.

## Default

```tsx
import React from 'react';
import Icon from 'react-icon-dance';

export default () => <Icon />; // <Icon type="ai" />
```

## Type

```tsx
import React from 'react';
import Icon from 'react-icon-dance';

export default () => (
  <div className="flex space-x-6">
    <Icon type="ai" />
    <Icon type="big_data" />
    <Icon type="cdn" />
  </div>
); 
```

## Src

```tsx
import React from 'react';
import Icon from 'react-icon-dance';

const src = 'https://cdn.jsdelivr.net/gh/turkyden/react-icon-dance@master/src/assets/@aliyun/ai.png';

export default () => <Icon src={src} />;
```

## Size

```tsx
import React from 'react';
import Icon from 'react-icon-dance';

const src = 'https://cdn.jsdelivr.net/gh/turkyden/react-icon-dance@master/src/assets/@aliyun/ai.png';

export default () => (
  <div className="flex space-x-6">
    <Icon size={48} src={src} />
    <Icon size={64} src={src} />
    <Icon size={96} src={src} />
  </div>
);
```

## Interval

```tsx
import React from 'react';
import Icon from 'react-icon-dance';

const src = 'https://cdn.jsdelivr.net/gh/turkyden/react-icon-dance@master/src/assets/@aliyun/ai.png';

export default () => (
  <div className="flex space-x-6">
    <Icon interval={0} src={src} />
    <Icon interval={20} src={src} />
    <Icon interval={40} src={src} />
  </div>
);
```
