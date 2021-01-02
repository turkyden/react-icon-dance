# Hook

You can wrap the icon with your customize tag under the react hook `useIcon`.

## Default

```tsx
import React from 'react';
import { useIcon } from 'react-icon-dance';

const src = 'https://cdn.jsdelivr.net/gh/turkyden/react-icon-dance@master/src/assets/@aliyun/ai.png';

export default () => {
  const iconProps = useIcon({
    size: 64,
    interval: 10,
    src: src
  });

  return <i {...iconProps}></i>
};
```
