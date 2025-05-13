import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/country-flag-quiz',
	plugins: [sveltekit()]
});
