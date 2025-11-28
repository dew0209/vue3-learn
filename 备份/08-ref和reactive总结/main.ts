import { createApp } from 'vue'
import App from './App.vue'

/**
 * ref和reactive对比：
 *      宏观角度看：
 *          1.ref用来定义：基本类型数据、对象类型数据；
 *          2.reactive用来定义：对象类型数据。
 *      区别：
 *          1.ref创建的变量必须使用.value（可以使用volar插件自动添加.value）。
 *          2.reactive重新分配一个新对象，会失去响应式（可以使用Object.assign去整体替换）。
 *      使用原则：
 *          1.若需要一个基本类型的响应式数据，必须使用ref。
 *          2.若需要一个响应式对象，层级不深，ref、reactive都可以。
 *          3.若需要一个响应式对象，且层级较深，推荐使用reactive。
 * 
 */
createApp(App).mount('#app')
