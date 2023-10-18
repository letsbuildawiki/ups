import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.letsbuilda.dev/',
	base: '/ups',
	integrations: [
		starlight({
			title: 'UPS',
			editLink: {
				baseUrl: 'https://github.com/letsbuildawiki/ups/edit/main/',
			},
			lastUpdated: true,
			social: {
				discord: 'https://discord.gg/hqPw9duXtP',
				github: 'https://github.com/letsbuildawiki/ups',
			},
			sidebar: [
				{
					label: 'Home',
					link: '/'
				},
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
