import { createApp } from 'vue'
import App from './App.vue'

/**
 * 
 * 
 * Vue2的生命周期
 *      创建阶段：beforeCreate、created
 *      挂载阶段：beforeMount、mounted
 *      更新阶段：beforeUpdate、updated
 *      销毁阶段：beforeDestroy、destroyed
 * Vue3的生命周期
 *      创建阶段：setup
 *      挂载阶段：onBeforeMount、onMounted
 *      更新阶段：onBeforeUpdate、onUpdated
 *      卸载阶段：onBeforeUnmount、onUnmounted
 */
createApp(App).mount('#app')
