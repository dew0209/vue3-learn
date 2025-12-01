import { createApp } from 'vue'
import App from './App.vue'


/**
 * hooks：
 *  把setup函数中使用的Composition API进行了封装（再封装一次）。
 *  优势：复用代码, 让`setup`中的逻辑更清楚易懂。
 * 
 */
createApp(App).mount('#app')