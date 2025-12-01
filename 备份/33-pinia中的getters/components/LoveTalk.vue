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

    import {nanoid} from 'nanoid';
    import {useTalkStore} from '@/store/loveTalk'

    let {talkList} = useTalkStore();
    console.log(talkList);
    function getTalk(){

        try{
            //接口坏了，随便整个随机id吧
            let title = nanoid();
            let obj = {id:nanoid(),title}
            talkList.unshift(obj)
        }catch(error){
            console.log(error);
        }
    }


</script>

<style>
</style>