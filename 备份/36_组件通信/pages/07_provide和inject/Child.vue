<template>
    <div class="child">
        <h3>子组件</h3>
        <GChild/>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import GChild from './GChild.vue';
    
    
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