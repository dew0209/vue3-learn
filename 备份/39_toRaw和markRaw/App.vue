<template>
  <div class="app">
    <h3>你好</h3>
    <h3>{{ p2.age }}</h3>
    <h3>{{ p4.age }}</h3>
    <button @click="p2.age += 1">点我</button>
    <button @click="p4.age += 1">点我</button>
  </div>

</template>

<script lang="ts" setup name="App">
    import { ref,reactive, shallowRef, shallowReactive, readonly, shallowReadonly, toRaw, markRaw } from 'vue';

    //reactive可以用  ref是没啥用的
    let p1 = ref({
      name:'李四',
      age:22,
      car:{
        brand:'奔驰'
      }
    });
    let p2 = toRaw(p1);
    console.log(p1);
    console.log(p2);
    //不能这样写，没啥用，已经是响应式的，在包起来没啥用
    //let p3 = markRaw(p2.value);
    //这样可以，即使被p4手动搞成响应式，也是没效果的
    let p3 = markRaw({
      name:'李四',
      age:22,
      car:{
        brand:'奔驰'
      }
    });
    let p4 = reactive(p3);
</script>

<style scoped>
    .wraper .title {
      padding: 20px;
      text-align: center;
      min-width: 610px;
    }
    .wraper .small{
      font-size: 15px;
    }
    .wraper .list-group-item {
      min-width: 230px;
    }
</style>
