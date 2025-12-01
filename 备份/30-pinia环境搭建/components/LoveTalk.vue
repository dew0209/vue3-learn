<template>
    <div class="talk">
        <button @click="getTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talkItem in talkList" :key="talkItem.id">
                {{ talkItem.title }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>

    import axios from 'axios';
    import { ref,reactive } from 'vue';
    import {nanoid} from 'nanoid';

    let talkList = reactive([
        {id:'ftrfasdf01',title:'今天你有点怪，哪里怪？怪好看的！'},
        {id:'ftrfasdf02',title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
        {id:'ftrfasdf03',title:'心里给你留了一块地，我的死心塌地'}
    ])
    async function getTalk(){

        try{
            //接口坏了，随便整个随机id吧
            let title = nanoid();
            let obj = {id:nanoid(),title}
            // 放到数组中
            talkList.unshift(obj)
        }catch(error){
            console.log(error);
        }
    }


</script>

<style>
</style>