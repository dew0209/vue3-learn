<template>
    <div class="person">
        <h1>当前和为sum：{{ sum }}，放大十倍后：{{ bigSum }}</h1>
        <button @click="addSum">点我sum + 1</button>
        <br>
        <img v-for="(item,index) in dogList" :src="item" :key="index"/>
        <button @click="addOneDog">点我再来一只小狗</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {computed, ref,reactive} from 'vue';
    import useSum from '@/hooks/useSum.ts'
    import useDog from '@/hooks/useDog.ts'
    

    let {sum,bigSum,addSum} = useSum();
    let {dogList,addOneDog} = useDog();

    
    



</script>