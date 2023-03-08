import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://low-carbon.digital',
	integrations: [tailwind({
		config: { applyBaseStyles: false },
	})],
});
