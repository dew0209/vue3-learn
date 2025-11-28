import { createApp } from 'vue'
import App from './App.vue'

/**
 * 
 * 快速开始vue：
 *      1.创建vue项目：
 *              npm create vue@3.3.4
 *              根据提示一步步安装即可
 *      2.如果没有vite环境，请安装vite：
 *              npm install vite@3.2.38
 *      3.npm run dev。
 *              打开浏览器即可访问
 * 总结：
 *  1.vite项目中，index.html是项目的入口文件，在项目最外层。
 *  2.加载index.html后，vite解析<script type="module" src="xxx">指向的JavaScript。
 *  3.Vue3中是通过createApp函数创建一个应用实例。
 */
createApp(App).mount('#app')
