import { createApp } from 'vue'
import App from './App.vue'

/**
 * 用在普通DOM标签上，获取的是DOM节点。
 * 用在组件标签上，获取的是组件实例对象。
 * 注意：let xxx 的名字要和ref中的值一样
 */
createApp(App).mount('#app')
