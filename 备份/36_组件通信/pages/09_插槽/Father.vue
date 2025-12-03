<template>
    <div class="father">
        <h3>父组件</h3>
        <div class="content">
            <!-- 默认插槽 -->
            <Game title="今日热门游戏">
                <template v-slot:default>
                    <ul>
                        <li v-for="y in games" :key="y.id">
                            {{ y.name }}
                        </li>
                    </ul>
                </template>
            </Game>

            <!-- 具名插槽 -->
            <Game title="今日美食城市">
                <template v-slot:s1>
                    <h3>{{ imgUrl }}</h3>
                </template>
            </Game>

            <!-- 作用域插槽 -->
             <Game title="热门游戏1">
                <template #s2="params">
                    <ul>
                        <li v-for="y in params.youxi" :key="y.id">
                            {{ y.name }}
                        </li>
                    </ul>
                </template>
            </Game>
        </div>
        
    </div>
</template>

<script setup lang="ts">
    import { ref,reactive, provide } from 'vue';
    import Game from './Game.vue';

    //默认插槽
    let games = reactive([
        {id:'asgytdfats01',name:'英雄联盟'},
        {id:'asgytdfats02',name:'王者农药'},
        {id:'asgytdfats03',name:'红色警戒'},
        {id:'asgytdfats04',name:'斗罗大陆'}
    ])

    let imgUrl = ref('这是一个图片')
    

    
</script>

<style>
    .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
</style>