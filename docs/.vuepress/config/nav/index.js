module.exports = [
	{ text: '主页', link: '/', icon: 'reco-home' },
	{ text: '时间轴', link: '/timeline/', icon: 'reco-date' },
	{
		text: '笔记',
		items: [
			{ text: 'TypeScript', link: '/views/TypeScript/TypeScript' },
			{ text: 'utils', link: '/views/Utils/Utils' },
			{ text: 'Plugins', link: '/views/Plugin/Plugin' },
		],
	},
	{
		text: '快速访问🎈',
		icon: 'reco-home',
		items: [
			{
				text: 'Vue3中文文档',
				link: 'https://www.vue3js.cn/docs/zh/',
			},
			{
				text: 'Cesium中文API',
				link: 'http://cesium.xin/cesium/cn/Documentation1.72/index.html',
			},
		],
	},
]
