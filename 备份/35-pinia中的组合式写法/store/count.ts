import { defineStore } from "pinia";
import {ref} from 'vue'
import { computed } from "vue";

export const useCountStore = defineStore('useCountStore',()=>{
    let sum = ref(6);
    let school = '北京校区';
    let address = '北京xx号';
   
    function increment(value:number){
        if(sum.value < 10){
            sum.value += value;
        }
    }
    let bigSum = computed({
        get(){
            return sum.value * 10;
        },
        set(){
            
        }
    });

    return {sum,school,increment,bigSum}
});