import { createApp } from 'vue'
import App from './App.vue'

/**
 * computed：
 *      根据已有数据计算出新数据
 *      例如，a b计算出c，一般来说，a和b是响应式的，改变的话，c也会改变（结合get方法），同时，c改变，a和b也可以改变（结合set方法）
 */
createApp(App).mount('#app')
