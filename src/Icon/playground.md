# Playground

You can wrap the icon with your customize tag under the react hook `useIcon`.

## Try it

```tsx
/**
 * compact: true
 * inline: true
 */
import React, { useState } from 'react';
import Icon from 'react-icon-dance';
import icon from './icon.png';

export default () => {

  const [size, setSize] = useState(144);

  const [interval, setInterval] = useState(20);

  const [src, setSrc] = useState(window.location.origin + icon);

  return (
    <div className="flex">
      <div className="w-2/3 h-96 bg-gray-100 shadow-inner flex flex-col justify-center items-center">
        <Icon size={size} interval={interval} src={src} />
      </div>
      <section className="w-1/3 pl-8 py-2">
        <div className="w-64 h-64">
          <h3 className="text-lg pb-4">Customize</h3>
          <p className="py-2 flex justify-between items-center">
            <span className="text-gray-500">Size</span>
            <span className="text-gray-800">{size} px</span>
          </p>
          <input
            type="range"
            className="w-full"
            min={24}
            max={160}
            value={size}
            onChange={e => setSize(e.target.value)}
          />
          <p className="py-2 flex justify-between items-center">
            <span className="text-gray-500">Interval</span>
            <span className="text-gray-800">{interval} ms</span>
          </p>
          <input
            type="range"
            className="w-full"
            min={0}
            max={40}
            value={interval}
            onChange={e => setInterval(e.target.value)}
          />
          <p className="py-2 flex justify-between items-center">
            <span className="text-gray-500">Src</span>
          </p>
          <input
            type="text"
            className="w-full"
            value={src}
            onChange={e => setSrc(e.target.value)}
          />
        </div>
      </section>
    </div>
  )
};
```
