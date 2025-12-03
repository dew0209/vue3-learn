import { createRouter,createWebHistory } from "vue-router";

import Props from '@/pages/01_props/Father.vue'
import CustomEvent from '@/pages/02_自定义事件/Father.vue'
import Mitt from '@/pages/03_mitt/Father.vue'
import VModel from '@/pages/04_v-model/Father.vue'
import Attrs from '@/pages/05_$attrs/Father.vue'
import RefsParents from '@/pages/06_$refs和$parent/Father.vue'
import ProvideInhect from '@/pages/07_provide和inject/Father.vue'
import Slot from '@/pages/09_插槽/Father.vue'

export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/props',
            component:Props
        },
        {
            path:'/customEvent',
            component:CustomEvent
        },
        {
            path:'/mitt',
            component:Mitt
        },
        {
            path:'/VModel',
            component:VModel
        },
        {
            path:'/Attrs',
            component:Attrs
        },
        {
            path:'/RefsParents',
            component:RefsParents
        },
        {
            path:'/ProvideInhect',
            component:ProvideInhect
        },
        {
            path:'/Slot',
            component:Slot
        }
    ]
});