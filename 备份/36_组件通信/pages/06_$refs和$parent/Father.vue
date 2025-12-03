<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>房产：{{ house }}</h4>
        <button @click="changeToy">修改Child1的玩具</button>
        <button @click="changeBook">修改Child2的书籍</button>
        <button @click="changeAllBook($refs)">修改所有孩子的书籍</button>
        <Child1 ref="c1"/>
        <Child2 ref="c2"/>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Child1 from './Child1.vue';
    import Child2 from './Child2.vue';
    
    let house = ref(4);

    let c1 = ref();
    let c2 = ref();

    function changeToy(){
        c1.value.toy += 1;        
    }

    function changeBook(){
        c2.value.book += 1;
    }

    function changeAllBook(refsChild:any){
        for(let key in refsChild){
            refsChild[key].book += 3;
        }
    }

    defineExpose({house});

</script>

<style>
    .father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
        border-radius: 10px;
	}
</style>