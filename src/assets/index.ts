const images: { [name: string]: string } = {}

const req = require.context('./@aliyun', true, /\.png$/)

const reqList = req.keys();

for (const filename of reqList) {
  const name = filename.replace('./', '').replace('.png', '')
  images[name] = req(filename)
}

export default images
