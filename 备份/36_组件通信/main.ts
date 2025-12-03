import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

import router from '@/router/index'


/**
 * 组件间通信：
 *      1.props：父<->子之间通信
 *          父->子：属性
 *          子->父：函数
 *      2.自定义事件：子->父
 *          a.父亲给孩子绑定一个事件<Child :car="car" @send-toy="getToy" />
 *          b.孩子声明事件 const emit =  defineEmits(['send-toy'])  然后使用事件 <button @click="emit('send-toy',toy)">把玩具给父亲</button>
 *      3.mitt：与mq功能类似，可以实现任意组件间通信。
 *      4.v-model：父<->子
 *      5.$attrs：祖<->孙
 *              $attrs 是一个对象，包含所有父组件传入的标签属性。
 *              $attrs 会自动排除 props 中声明的属性(可以认为声明过的 props 被子组件自己 消费 了)
 *      6.$refs和$parents：
 *              $refs 父->子 值为对象，包含所有被 ref 属性标识的 DOM 元素或组件实例。 
 *              $parents 子->父 值为对象，当前组件的父组件实例对象。
 *      7.实现 祖和后代 直接通信。常用于祖孙之间
 *              在祖先组件中通过 provide 配置向后代组件提供数据
 *              在后代组件中通过 inject 配置来声明接收数据
 *      8.pinia：见之前的
 *      9.slot：
 *              默认插槽
 *              具名插槽
 *              作用域插槽
 */

let app = createApp(App);
let pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app')