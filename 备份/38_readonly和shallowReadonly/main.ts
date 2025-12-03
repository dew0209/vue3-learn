import { createApp } from 'vue'
import App from './App.vue'



/**
 * readonly：用于创建一个对象的深只读副本。
 * shallowReadonly：与  readonly 类似，但只作用于对象的顶层属性。
 */

let app = createApp(App);

app.mount('#app')