import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { sveltePreprocess } from 'svelte-preprocess';

export default defineConfig({
  paths: {
    base: '/country-flag-quiz'
  },
	plugins: [sveltekit()],
  preprocess: sveltePreprocess()
});
