import { createApp } from 'vue'
import App from './App.vue'



/**
 * shallowRef：创建一个响应式数据，但只对顶层属性进行响应式处理
 * shallowReactive：创建一个浅层响应式对象，只会使对象的最顶层属性变成响应式的，对象内部的嵌套属性则不会变成响应式的
 */

let app = createApp(App);

app.mount('#app')