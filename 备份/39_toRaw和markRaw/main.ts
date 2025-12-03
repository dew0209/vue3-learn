import { createApp } from 'vue'
import App from './App.vue'



/**
 * toRaw：用于获取一个响应式对象的原始对象， toRaw 返回的对象不再是响应式的，不会触发视图更新。
 * markRaw：标记一个对象，使其 永远不会 变成响应式的。
 */

let app = createApp(App);


app.mount('#app')