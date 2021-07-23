---
title: 'utils'
date: 2021-07-23

tags:
  - utils
  - 方法
categories:
  - '笔记 note'
---

# _utils_

## 1. 时间处理过滤器

```js
Vue.filter('dateFormat', function(originVal) {
	const dt = new Date(originVal * 1000)

	const y = dt.getFullYear()

	const m = (dt.getMonth() + 1 + '').padStart(2, '0')

	const d = (dt.getDate() + '').padStart(2, '0')

	const hh = (dt.getHours() + '').padStart(2, '0')

	const mm = (dt.getMinutes() + '').padStart(2, '0')

	const ss = (dt.getSeconds() + '').padStart(2, '0')

	return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
```

## 2. CSS 四角

```css
margin: 40px auto;
box-shadow: inset 0px 0px 30px 0px rgba(83, 7, 71, 0.3);
opacity: 0.9;
width: 400px;
height: 400px;
background: linear-gradient(to top, #000, #000) left top no-repeat, /*上左*/
		linear-gradient(to right, #000, #000) left top no-repeat,
	/*左上*/ linear-gradient(to left, #000, #000) right top no-repeat, /*上右*/
		linear-gradient(to bottom, #000, #000) right top no-repeat,
	/*上右*/ linear-gradient(to left, #000, #000) left bottom no-repeat, /*下左*/
		linear-gradient(to bottom, #000, #000) left bottom no-repeat,
	/*左下*/ linear-gradient(to top, #000, #000) right bottom no-repeat, /*下右*/
		linear-gradient(to left, #000, #000) right bottom no-repeat; /*右下*/
background-size: 2px 19px, 16px 2px, 2px 16px, 14px 2px;
```

## 3.多事件绑定

```html
v-on="{ click: [suspendHaddle, pauseRunTable] }"
```

## 4.数据层级处理

```javascript
interface Data {
  id: number;
  pid: number;
  type: string;
  children?: Data[];
}

function initData() {
  function formatDatatree(data: Data[]) {
    const yiji = data.filter(i => i.pid === 0);
    const erji = data.filter(p => p.pid != 0);

    // return yiji;
    function dataToTree(yiji: Data[], erji: Data[]) {
      yiji.map(y => {
        erji.map((e, index) => {
          if (e.pid === y.id) {
            const _erji = JSON.parse(JSON.stringify(erji));
            _erji.splice(index, 1);
            dataToTree([e], _erji);
            if (y.children) {
              y.children.push(e);
            } else {
              y.children = [e];
            }
          }
        });
      });
    }
    dataToTree(yiji, erji);
    console.log(yiji);
  }
```

## 5.component（组件渲染）

```typescript
<!-- 回放按钮 -->
    <div class="icons-list" @click="btnChange">
      <component :is="btnType" @click="togglePlayback" />
    </div>
```

## 6.全局过滤

```typescript
import filters from './utils/filters'
app.config.globalProperties.$filters = filters
```
