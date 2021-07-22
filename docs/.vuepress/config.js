module.exports = {
	title: 'Long_Note',
	description: '主页',
	base: '/notes/',
	themeConfig: {
		sidebarDepth: 1,
		rightMenuBar: true,
		pageButton: true,
		nav: [
			{ text: 'TypeScript', link: '/TypeScript/TypeScript' },
			{ text: 'utils', link: '/Utils/utils.md' },
			{ text: '插件', link: '/Plugin/Plugin' },
		],
		sidebar: [
			{
				mode: 'structuring',
				collapsable: true,
			},
			['./TypeScript/TypeScript', 'TypeScript'],
			['./Utils/utils', 'utils'],
			['./Plugin/Plugin', '插件'],
			{
				title: '其他',
				collapsable: false,
			},
		],
	},
}
