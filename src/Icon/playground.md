# ✨ Playground

You can wrap the icon with your customize tag under the react hook `useIcon`.

## Try it now

```tsx
/**
 * compact: true
 * inline: true
 */
import React, { useState } from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Icon from 'react-icon-dance';
import assets from '../assets/index.ts';
import 'antd/dist/antd.css';

export default () => {
  const [size, setSize] = useState(144);

  const [interval, setInterval] = useState(20);

  const [frame, setFrame] = useState(20);

  const [src, setSrc] = useState(
    'https://cdn.jsdelivr.net/gh/turkyden/react-icon-dance@master/src/assets/@aliyun/ai.png',
  );

  return (
    <>
      <div className="flex">
        <div className="w-2/3 h-96 flex">
          <div className="w-full h-full bg-gray-100 shadow-inner flex flex-col justify-center items-center text-gray-400 pattern-dots-sm">
            <Icon size={size} interval={interval} src={src} frame={frame} />
          </div>
          <div className="w-28 h-full bg-gray-100 overflow-auto text-gray-300 pattern-grid-sm">
            <img className="w-full" src={src} />
          </div>
        </div>
        <section className="w-1/3 pl-8">
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
              <span className="text-gray-500">Frame</span>
              <span className="text-gray-800">{frame} fps</span>
            </p>
            <input
              type="range"
              className="w-full"
              min={0}
              max={20}
              value={frame}
              onChange={e => setFrame(e.target.value)}
            />
            <p className="py-2 flex justify-between items-center">
              <span className="text-gray-500">Upload</span>
            </p>
            {/**
            <input
              type="text"
              className="w-full"
              value={src}
              onChange={e => setSrc(e.target.value)}
            />**/}
            <Upload
              name="file"
              action="https://sm.ms/api/v2/upload"
              headers={{
                authorization: 'Basic 14ac5499cfdd2bb2859e4476d2e5b1d2bad079bf',
              }}
              onChange={info => {
                if (info.file.status !== 'uploading') {
                  console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                  message.success(
                    `${info.file.name} file uploaded successfully`,
                  );
                } else if (info.file.status === 'error') {
                  message.error(`${info.file.name} file upload failed.`);
                }
              }}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
        </section>
      </div>
      <div className="flex flex-wrap w-5/6 py-10">
        {Object.values(assets).map(src => (
          <div
            className="flex flex-wrap flex-col justify-center items-start"
            key={src}
            onClick={e => setSrc(src)}
          >
            <div className="border border-solid border-transparent hover:border-gray-200 rounded-lg p-8 cursor-pointer">
              <Icon size={64} interval={20} src={src} />
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-gray-500 text-center">Comming soon ...</h3>
    </>
  );
};
```
