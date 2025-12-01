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
 *      to的两种写法：
 *          <!--简化前：需要写完整的路径（to的字符串写法） -->
 *          <router-link to="/news/detail">跳转</router-link>
 *          <!--简化后：直接通过名字跳转（to的对象写法配合name或者path属性） -->
 *          <RouterLink :to="{path:'/news'}">新闻</RouterLink>
 *          <RouterLink :to="{name:'aboutCom'}">关于</RouterLink>
 *      嵌套路由：children使用，不要带/
 *          {
                 name:'newsCom',
                 path:'/news',
                 component:News,
                 children:[
                     {
                         path:'detail',
                         component:Detail,
                     }
                 ]
             }

 *      query传参：
 *              <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail?id=${newItem.id}&title=${newItem.title}&content=${newItem.content}`">{{ newItem.title }}</RouterLink> -->

                <!-- 第二种写法 -->
                <RouterLink :to="{
                    path:'/news/detail',
                    query:newItem
                }">{{ newItem.title }}</RouterLink>

        params传参：

                <!-- 第一种写法 -->
                <RouterLink :to="`/news/detail/${newItem.id}/${newItem.title}/${newItem.content}`">{{ newItem.title }}</RouterLink>
                
                <!-- 第二种写法 -->
                <RouterLink :to="{
                    name:'newDetail',
                    params:newItem,
                }">{{ newItem.title }}</RouterLink>
                
                传递params参数时，若使用to的对象写法，必须使用name配置项，不能用path。
                传递params参数时，需要提前在规则中占位。
        路由-props开启
                    // 第一种写法：将路由收到的所有params参数作为props传给路由组件
                    // props:true
                    // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
                    // props(route){
                    //     return route.params;
                    // }
                    // 第三种写法：对象写法，可以自己决定将什么作为props给路由组件
                    props: {
                        id:'xxxxxxx111',
                        title:'xxxxx33',
                        content:'doqwndqw'
                    },  
        路由-replace属性
                    1. 作用：控制路由跳转时操作浏览器历史记录的模式。
                    2. 浏览器的历史记录有两种写入方式：分别为 push 和 replace：
                        push：是追加历史记录（默认值）。
                        replace：是替换当前记录。
        路由-重定向：
                    将特定的路径，重新定向到已有路由。
                    {
                        path:'/',
                        //重定向
                        redirect:'/home '
                    },
        
 */

//使用路由器
app.use(router);
app.mount('#app')