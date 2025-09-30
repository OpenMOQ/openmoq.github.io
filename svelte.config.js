import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || ''
    },
    alias: {
      $assets: './src/assets',
      $images: './src/images',
      $icons: './src/icons',
      $logos: './src/logos'
    }
  }
};

export default config;
