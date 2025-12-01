import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';


let app = createApp(App);
let pinia = createPinia();
/**
 * 
 * storeToRefs:
 *      借助 storeToRefs 将 store 中的数据转为 ref 对象，方便在模板中使用。
 *      注意：pinia提供的 storeToRefs 只会将数据做转换，而 vue 的 toRefs 会转换 store 中数据。
 * 
 * getters:
 *      当state中的数据，需要经过处理后再使用时，可以使用getters配置。
 */

app.use(pinia);
app.mount('#app')