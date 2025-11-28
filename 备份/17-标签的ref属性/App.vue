<template>
  <div class="app">
    <h2 ref="title2222">你好111</h2>
    <h2 ref="title233332">你好222</h2>
    <button @click="showLog">测试</button>
    <Person ref="ren"/>
  </div>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {ref} from 'vue'

    // 用在普通DOM标签上，获取的是DOM节点。
    let title2222 = ref()
    // 用在组件标签上，获取的是组件实例对象。
    let ren = ref();
    function showLog(){
      console.log('title2222：',title2222.value);
      console.log('ren：',ren.value);
    }

</script>

<style scoped>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>
