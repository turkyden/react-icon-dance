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
    'https://cdn.jsdelivr.net/npm/tailwindcss@2.0.2/dist/utilities.min.css',
  ],
  // more config: https://d.umijs.org/config
});
