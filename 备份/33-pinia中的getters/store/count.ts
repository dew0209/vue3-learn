import { defineStore } from "pinia";


export const useCountStore = defineStore('useCountStore',{
    actions:{
        increment(value:number){
            if(this.sum < 10){
                this.sum += value;
            }
        }
    },
    state(){
        return {
            sum:6,
            school:'北京校区',
            address:'北京xx号'
        }
    },
    getters:{
        bigSum:(state)=>state.sum * 10
    }
});