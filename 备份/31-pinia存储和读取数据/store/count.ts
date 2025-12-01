import { defineStore } from "pinia";


export const useCountStore = defineStore('useCountStore',{
    state(){
        return {
            sum:6
        }
    }
});