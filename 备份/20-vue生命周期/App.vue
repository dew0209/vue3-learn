<template>
  <div class="app">
    <Person  v-if="isShow"/>
  </div>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref,onMounted} from 'vue';
  let isShow = ref(false);

  onMounted(()=>{
    console.log('父---挂载完毕')
  })

</script>

<style scoped>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>
