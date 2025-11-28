<template>
  <div class="app">
    <Person ref="ren" :personList="personList"/>
  </div>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import { type Persons } from '@/types';
    import {ref} from 'vue'

    let personList:Persons = [
        {id:'xwqwubfq01',name:'张三',age:60},
        {id:'xwqwubfq02',name:'李四',age:20},
        {id:'xwqwubfq03',name:'王二',age:10},
    ];

</script>

<style scoped>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>
