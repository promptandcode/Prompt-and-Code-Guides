// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Prompt and Code Guides',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://www.promptandcode.dev' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'How To Get The Most Out Of Vibe Coding', slug: 'how-to-get-the-most-out-of-vibe-coding/example' },
						// { label: 'Step by Step Guide to v0.dev Development', slug: 'step-by-step-guide-to-v0-development/example' },						
						{ label: 'Creating Effective Prompts', slug: 'creating-effective-prompts/example' },
					],
				},
				{
					label: 'Articles',
					items: [
						{ label: 'Cursor Tips for Product Manager', slug: 'cursor-tips-for-product-manager/example' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});