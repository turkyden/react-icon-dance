import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Icon Dance',
  favicon: 'https://turkyden.com/img/logo.svg',
  logo: 'https://turkyden.com/img/logo.svg',
  outputPath: 'docs-dist',
  base: `/react-icon-dance/`,
  publicPath: process.env.NODE_ENV === 'production' ? '/react-icon-dance/' : '/',
  // more config: https://d.umijs.org/config
});
