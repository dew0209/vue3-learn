<template>
    <div class="child">
        <h3>孙组件</h3>
        <h4>a:{{ a }}</h4>
        <h4>b:{{ b }}</h4>
        <h4>c:{{ c }}</h4>
        <h4>d:{{ d }}</h4>
        <h4>x:{{ x }}</h4>
        <h4>y:{{ y }}</h4>
        <button @click="updateA(6)">更新爷爷的a</button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    defineProps(['a','b','c','d','x','y','updateA'])

</script>

<style>
    .child{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>