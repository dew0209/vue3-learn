<template>
    <div class="person">
        <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
        <h2>当前求和：{{ sum }}</h2>
        <button @click="changeSum">点我sum + 1</button>
    </div>


</template>

<script lang="ts" setup name="Person">
    import {reactive, ref,watch} from 'vue';

    let sum = ref(0);

    function changeSum(){
        sum.value += 1;
    }

    let watchSum = watch(sum,(newValue,oldValue)=>{
        console.log('sum变化了：',newValue,oldValue);
        if(newValue >= 10){
            //结束监听
            watchSum();
        }
    });


</script>