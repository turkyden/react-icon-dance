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
import icon from './icon.png';

export default () => <Icon src={icon} />;
```

## Size

```tsx
import React from 'react';
import Icon from 'react-icon-dance';
import icon from './icon.png';

export default () => (
  <div className="flex space-x-6">
    <Icon size={48} src={icon} />
    <Icon size={64} src={icon} />
    <Icon size={96} src={icon} />
  </div>
);
```

## Interval

```tsx
import React from 'react';
import Icon from 'react-icon-dance';
import icon from './icon.png';

export default () => (
  <div className="flex space-x-6">
    <Icon interval={0} src={icon} />
    <Icon interval={20} src={icon} />
    <Icon interval={40} src={icon} />
  </div>
);
```
