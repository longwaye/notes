const navConfig = require('./config/nav/index')

module.exports = {
	title: "Long's Notes",
	description: '不积跬步无以至千里',
	theme: 'reco',
	smoothScroll: true,
	themeConfig: {
		// 博客设置
		blogConfig: {
			category: {
				location: 2, // 在导航栏菜单中所占的位置，默认2
				text: '分类', // 默认 “分类”
			},
			tag: {
				location: 3, // 在导航栏菜单中所占的位置，默认3
				text: '标签', // 默认 “标签”
			},
		},
		nav: navConfig,
		sidebar: 'auto',
	},
	markdown: {
		lineNumbers: true,
	},
}
