<template>
    <div class="game">
        <h2>{{ title }}</h2>
        <slot>默认内容</slot>
        <br>
        <slot name="s1">默认内容</slot>
        <br>
        <slot name="s2" :youxi="games" x="哈哈" y="你好"></slot>
    </div>
</template>

<script setup lang="ts">
    import { ref,reactive, provide } from 'vue';
    let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟1'},
    {id:'asgytdfats02',name:'王者农药1'},
    {id:'asgytdfats03',name:'红色警戒1'},
    {id:'asgytdfats04',name:'斗罗大陆1'}
  ])
    defineProps(['title']);
    
</script>

<style scoped>

  .game {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
   
</style>