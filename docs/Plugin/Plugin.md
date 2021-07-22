# _插件_

## 1.axios-mapper

> 在移动端和后台进行数据操作的时候，我们往往会将网络请求抽象一个 model 层，便于维护和开发使用。

前端用 TS 做项目，抽象 model 层是非常有必要。

[axios-mapper](https://github.com/RainManGO/axios-mapper)是用来解决这个问题，让请求直接返回 model。而且优化请求，防止过快点击重复请求。

功能

- [x] 更简单的 axios 请求返回自动转成 model
- [x] 自定义间隔时间，防止重复快速点击

安装

```shell
  npm install  axios-mapper
```

or

```shell
  yarn add axios-mapper
```

简单使用

1、基础配置

```js
import HttpClient, { HttpClientConfig } from '../src/index'
const config: HttpClientConfig = {
	baseURL: 'http://www.httpbin.org',
	headers: {
		token: 'your token',
	},
}
const https = new HttpClient(config)
export default https
```

2 、自动化产生 model

vscode extension : [json2ts](https://marketplace.visualstudio.com/items?itemName=GregorBiswanger.json2ts)

web：[http://json2ts.com](http://json2ts.com)

```javascript
// {
//     "slideshow": {
//       "author": "Yours Truly",
//       "date": "date of publication",
//       "slides": [
//         {
//           "title": "Wake up to WonderWidgets!",
//           "type": "all"
//         },
//         {
//           "items": [
//             "Why <em>WonderWidgets</em> are great",
//             "Who <em>buys</em> WonderWidgets"
//           ],
//           "title": "Overview",
//           "type": "all"
//         }
//       ],
//       "title": "Sample Slide Show"
//     }
//   }

export interface Slide {
	title: string;
	type: string;
}

export interface Slideshow {
	author: string;
	date: string;
	slides: Slide[];
	title: string;
}

export interface RootObject {
	slideshow: Slideshow;
}
```

3、请求时获得转换

```javascript
import https from './http'
import { RootObject } from './model'

https.request <
	RootObject >
	'/json'.then((res) => {
		console.log(res?.slideshow)
	})
```

全部配置

配置基于 AxiosRequestConfig 类，扩展新增默认参数和间隔时间

```javascript
export interface HttpClientConfig extends AxiosRequestConfig {
	//所有请求可以带默认参数
	defaultParams?: RequestParams;
	//click interval (点击间隔时间)
	clickInterval?: number;
}
```

vue 中使用

**src/apis/user.ts**

```tsx
import https from '@/utils/https'
import { RootObject } from '@/model/rootObject'
import { LoginModel } from '@/views/user-manager/login/model/loginModel'
import { RequestParams, ContentType, Method } from 'axios-mapper'

export const loginRequest = (userInfo: RequestParams) => {
	return https(false).request<RootObject<LoginModel>>(
		'user/login',
		Method.POST,
		userInfo,
		ContentType.json
	)
}
```

```tsx
'@/model/rootObject'
export interface RootObject<T> {
	code: number
	msg: string
	data: T
}
'@/views/user-manager/login/model/loginModel'
export interface LoginModel {
	accessToken: string
}
```

## 2. nprogress

加载进度条

```typescript
$ npm install --save nprogress 或者
$ yarn add nprogress

//用法
NProgress.start();
NProgress.done();
```

```typescript
//导入 router
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
	NProgress.start()
	next()
})

router.afterEach(() => {
	NProgress.done()
})
```
