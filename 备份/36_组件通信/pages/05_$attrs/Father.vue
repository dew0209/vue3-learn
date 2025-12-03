<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>{{ a }}</h4>
        <h4>{{ b }}</h4>
        <h4>{{ c }}</h4>
        <h4>{{ d }}</h4>
        <Child :a="a" :b="b" v-bind="{x:100,y:200}" :c="c" :updateA="updateA" :d="d"/>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Child from './Child.vue';
    let a = ref(1);
    let b = ref(2);
    let c = ref(3);
    let d = ref(4);

    function updateA(value:number){
        a.value = value;
    }

</script>

<style>
    .father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
        border-radius: 10px;
	}
</style>