import {computed, ref,reactive,onMounted} from 'vue'

export default function (){

    let sum = ref(0);
    let bigSum = computed(()=>{
        return sum.value * 10;
    })

    function addSum(){
        sum.value += 1;
    }

    // 钩子
    onMounted(()=>{
        addSum()
    })
    
    return {sum,bigSum,addSum};
}