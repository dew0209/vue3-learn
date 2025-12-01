import {createRouter,createWebHistory,createWebHashHistory  } from 'vue-router'

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import News from '@/pages/News.vue';
import Detail from '@/pages/Detail.vue';

let router = createRouter({
        //history:createWebHashHistory(),
        history:createWebHistory(),
        routes:[
            {
                name:'homeCom',
                path:'/home',
                component:Home
            },
            {
                name:'newsCom',
                path:'/news',
                component:News,
                children:[
                    {
                        name:'newDetail',
                        path:'detail/:id/:title/:content?',
                        component:Detail,
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
                    }
                ]
            },
            {
                name:'aboutCom',
                path:'/about',
                component:About
            },
        ]
});

export default router;