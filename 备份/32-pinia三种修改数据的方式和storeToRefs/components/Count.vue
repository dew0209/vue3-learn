<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2>
        <h3>欢迎来到:{{ countStore.school }}，坐落于：{{ countStore.address }}</h3>
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
    let countStore = useCountStore();

    let selectedValue = ref(1);

    console.log(countStore);

    function addN(){
        //方式一：直接修改
        // countStore.sum += selectedValue.value;
        //方式二：批量修改
        // countStore.$patch({
        //     school:'上海校区',
        //     address:'上海xx号'
        // })
        //方式三：调用方法修改
        countStore.increment(selectedValue.value)
    }

    function mulN(){
        countStore.sum -= selectedValue.value;
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