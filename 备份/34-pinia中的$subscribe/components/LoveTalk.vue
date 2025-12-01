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

    let useTalkListStore = useTalkStore();
    let {talkList} = useTalkListStore;
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

    useTalkListStore.$subscribe((mutate,state)=>{
        console.log('talkStore里面保存的数据发生了变化',mutate,state)
        localStorage.setItem('talkList',JSON.stringify(state.talkList))
    })

    


</script>

<style>
</style>