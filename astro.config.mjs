import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: "/ups",
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				discord: 'https://discord.gg/hqPw9duXtP',
				github: 'https://github.com/letsbuildawiki/ups',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
