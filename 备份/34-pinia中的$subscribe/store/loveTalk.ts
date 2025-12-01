import { defineStore } from "pinia";


export const useTalkStore = defineStore('talk',{
    state(){
        return {
            talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    },
})