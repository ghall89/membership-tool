import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import htmx from 'astro-htmx';
import alpinejs from '@astrojs/alpinejs';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
});

// , htmx(), alpinejs()
