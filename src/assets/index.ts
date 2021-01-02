// const images: { [name: string]: string } = {}

// const req = require.context('./@aliyun', true, /\.png$/)

// const reqList = req.keys();

// for (const filename of reqList) {
//   const name = filename.replace('./', '').replace('.png', '')
//   images[name] = req(filename)
// }

// export default images

import ai from'./@aliyun/ai.png';
import big_data from'./@aliyun/big_data.png';
import cdn from'./@aliyun/cdn.png';
import cloud_essentials from'./@aliyun/cloud_essentials.png';
import cloud_native from'./@aliyun/cloud_native.png';
import dev_ops from'./@aliyun/dev_ops.png';
import enterprise_service from'./@aliyun/enterprise_service.png';
import hybrid_cloud from'./@aliyun/hybrid_cloud.png';
import iot from'./@aliyun/iot.png';
import product_list from'./@aliyun/product_list.png';
import product_outline from'./@aliyun/product_outline.png';
import security from'./@aliyun/security.png';
import storage from'./@aliyun/storage.png';
import video from'./@aliyun/video.png';

export default {
  'ai': ai,
  'big_data': big_data,
  'cdn': cdn,
  'cloud_essentials': cloud_essentials,
  'cloud_native': cloud_native,
  'dev_ops': dev_ops,
  'enterprise_service': enterprise_service,
  'hybrid_cloud': hybrid_cloud,
  'iot': iot,
  'product_list': product_list,
  'product_outline': product_outline,
  'security': security,
  'storage': storage,
  'video': video
}