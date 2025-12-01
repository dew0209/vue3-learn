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
 *      
 *      1.history模式
 *          history:createWebHistory()
 *          优点：URL更加美观，不带有`#`，更接近传统的网站URL。
 *          缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有404错误。
 *      2.hash模式
 *          history:createWebHashHistory()
 *          优点：兼容性更好，因为不需要服务器端处理路径。
 *          缺点：URL带有`#`不太美观，且在SEO优化方面相对较差。
 * 
 */

//使用路由器
app.use(router);
app.mount('#app')