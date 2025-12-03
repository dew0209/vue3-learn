<template>
    <div class="father">
        <h3>子组件</h3>
        <h4>玩具：{{ toy }}</h4>
        <button @click="emit('send-toy',toy)">把玩具给父亲</button>        
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    let toy = ref('奥特曼');
    const emit =  defineEmits(['send-toy'])
</script>

<style>
    .father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>