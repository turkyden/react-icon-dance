# Hook

You can wrap the icon with your customize tag under the react hook `useIcon`.

## Default

```tsx
import React from 'react';
import { useIcon } from 'react-icon-dance';
import icon from './icon.png';

export default () => {
  const iconProps = useIcon({
    size: 64,
    interval: 10,
    src: icon
  });

  return <i {...iconProps}></i>
};
```