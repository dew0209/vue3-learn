import { createApp } from 'vue'
import App from './App.vue'

/**
 * 
 * 1.setup中访问this是undefined。
 * 2.vue2的配置（data、methos......）中可以访问到setup中的属性、方法，
 *      但在setup中不能访问到Vue2的配置（data、method......）。
 * 3.如果与vue2冲突，则setup优先。
 * 
 */
createApp(App).mount('#app')
