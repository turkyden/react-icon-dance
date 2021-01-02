import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Icon Dance',
  favicon: 'https://turkyden.com/img/logo.svg',
  logo: 'https://turkyden.com/img/logo.svg',
  hash: true,
  outputPath: 'docs-dist',
  base: `/react-icon-dance/`,
  publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn.jsdelivr.net/gh/turkyden/react-icon-dance@gh-pages/' : '/',
  theme: {
    '@c-primary': '#ff6a00',
  },
  styles: [
    'https://unpkg.com/pattern.css',
    'https://cdn.jsdelivr.net/npm/tailwindcss@2.0.2/dist/utilities.min.css',
    `.__dumi-default-previewer-demo {
      padding: 40px 24px;
      color: rgba(209,213,219,1);
      background-image: radial-gradient(currentColor .5px, transparent .5px);
      background-size: calc(10 * .5px) calc(10 * .5px);
    }`
  ],
  
  // more config: https://d.umijs.org/config
});
