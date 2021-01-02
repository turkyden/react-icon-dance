# ⚓ Hook

You can wrap the icon with your customize tag like`<div>` with react hook `useIcon`.

## Default

You can inject the props in any html `tag` like this.

```tsx
import React from 'react';
import { useIcon } from 'react-icon-dance';

export default () => {
  const iconProps = useIcon({
    size: 64,
    interval: 10,
    src: 'https://cdn.jsdelivr.net/gh/turkyden/react-icon-dance@master/src/assets/@aliyun/ai.png'
  });
  return <div {...iconProps}></div>
};
```

## Difference

Compare the `useIcon` to the `<Icon>` like this.

```tsx
import React from 'react';
import Icon, { useIcon } from 'react-icon-dance';

export default () => {
  const size = 64;
  const interval = 10;
  const src = 'https://cdn.jsdelivr.net/gh/turkyden/react-icon-dance@master/src/assets/@aliyun/ai.png';

  const iconProps = useIcon({
    size,
    interval,
    src
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '10rem' }}>
      {/** Component Style**/}
      <Icon size={size} interval={interval} src={src} />

      {/** Hook Style**/}
      <i {...iconProps}></i>
    </div>
  )
};
```
