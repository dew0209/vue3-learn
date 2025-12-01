import { createApp } from 'vue'
import App from './App.vue'

//引入路由器
import router from '@/router/';

let app = createApp(App);

/**
 * /xxxx ---> xxx组件
 *      路由组件通常存放在pages 或 views 文件夹，一般组件通常存放在components文件夹。
 *      通过点击导航，视觉效果上 消失 了的路由组件，默认是被 卸载 掉的，需要的时候再去 挂载。
 * 
 */

//使用路由器
app.use(router);
app.mount('#app')