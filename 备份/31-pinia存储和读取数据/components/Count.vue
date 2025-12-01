<template>
    <div class="count">
        <h2>当前求和为：{{ constStore.sum }}</h2>
        <select v-model.number="selectedValue">
            <option :value="1" :key="1">1</option>
            <option :value="2" :key="2">2</option>
            <option :value="3" :key="3">3</option>
        </select>
        <button @click="addN">加</button>
        <button @click="mulN">减</button>
    </div>
</template>

<script lang='ts' setup>
    import {ref} from 'vue';
    import {useCountStore} from '@/store/count'
    let constStore = useCountStore();

    let selectedValue = ref(1);

    function addN(){
        
    }

    function mulN(){
        
    }



</script>

<style scoped>
    .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>