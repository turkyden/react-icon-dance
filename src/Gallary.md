

```tsx
/**
 * compact: true
 * inline: true
 */
import React, { useState } from 'react';
import Icon from 'react-icon-dance';
import images from './assets/index.ts';

export default () => {

  const [size, setSize] = useState(96);

  const [interval, setInterval] = useState(20);

  return (
    <div className="flex flex-wrap">
      {
        Object.values(images).map(src => (
          <div className="w-1/4 h-64 bg-white shadow-inner flex flex-col justify-center items-center">
            <Icon size={size} interval={interval} src={src} />
          </div>
        ))
      }
    </div>
  )
};
```
