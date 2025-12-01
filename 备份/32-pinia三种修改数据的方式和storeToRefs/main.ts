import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';


let app = createApp(App);
let pinia = createPinia();


/**
 * 
 *      
 *      //方式一：直接修改
        countStore.sum += selectedValue.value;
        //方式二：批量修改
        countStore.$patch({
            school:'上海校区',
            address:'上海xx号'
        })
        //方式三：调用方法修改
        countStore.increment(selectedValue.value)
 * 
 */

app.use(pinia);
app.mount('#app')