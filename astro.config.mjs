import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import htmx from 'astro-htmx';
import alpinejs from '@astrojs/alpinejs';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), htmx(), alpinejs()],
  output: 'server',
  adapter: vercel()
});