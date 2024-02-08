import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';
import vercel from '@astrojs/vercel/serverless';
import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), auth()],
  output: 'server',
  adapter: vercel(),
});
