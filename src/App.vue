<template>
  <div class="app">
    <h3>你好</h3>
    
  </div>

</template>

<script lang="ts" setup name="App">
    import { ref,reactive, shallowRef, shallowReactive, readonly, shallowReadonly, toRaw, markRaw } from 'vue';

    
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
