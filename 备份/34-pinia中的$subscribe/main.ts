import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';


let app = createApp(App);
let pinia = createPinia();
/**
 * pinna:
 *      借助 storeToRefs 将 store 中的数据转为 ref 对象，方便在模板中使用。
 *      注意：pinia提供的 storeToRefs 只会将数据做转换，而 Vue 的 toRefs 会转换 store 中数据。
 */

app.use(pinia);
app.mount('#app')