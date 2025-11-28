<template>
    <div class="person">
        <h1>当前和为sum：{{ sum }}</h1>
        <button @click="addSum">点我sum + 1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

    let sum = ref(0);

    function addSum(){
        sum.value += 1;
    }

    console.log('创建完成');

    onBeforeMount(()=>{
        console.log("挂载前");
    })
    onMounted(()=>{
        console.log("挂载完毕");
    })
    onBeforeUpdate(()=>{
        console.log("更新之前");
    })
    onUpdated(()=>{
        console.log("更新完成");
    })
    onBeforeUnmount(()=>{
        console.log("卸载之前")
    })
    onUnmounted(()=>{
        console.log("卸载完成")
    })

</script>