<template>
    <div class="person">
        <h1>需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h1>
        <h2>水温：{{ temp }} ℃</h2>
        <h2>高度：{{ height }} cm</h2>
        <button @click="changeTemp">修改水温</button>
        <button @click="changeHeight">修改高度</button>
        <br>
    </div>


</template>

<script lang="ts" setup name="Person">
    import {watchEffect,ref} from 'vue';

    let temp = ref(0);
    let height = ref(0);


    function changeTemp(){
        temp.value += 10;
    }

    function changeHeight(){
        height.value += 10;
    }

    watchEffect(()=>{
        if(temp.value >= 60 || height.value >= 80){
            console.log('发送请求~');
        }
    })


</script>