import {createRouter,createWebHistory} from 'vue-router'

import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import News from '@/components/News.vue';

let router = createRouter({
        history:createWebHistory(),
        routes:[
            {
                path:'/home',
                component:Home
            },
            {
                path:'/news',
                component:News
            },
            {
                path:'/about',
                component:About
            },
        ]
});

export default router;