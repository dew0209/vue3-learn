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