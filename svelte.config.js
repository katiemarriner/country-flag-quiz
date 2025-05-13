import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      fallback: 'index.html',
      prerender: {
        entries: ['*']
      },
      strict: false
    }),
  paths: {
    base: '/country-flag-quiz'
  }
	}
};

export default config;
