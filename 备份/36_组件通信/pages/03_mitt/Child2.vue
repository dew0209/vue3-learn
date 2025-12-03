<template>
    <div class="child1">
        <h3>子组件1</h3>
        <h4>电脑：{{ computer }}</h4>
        <h4 v-show="toy">哥哥给的玩具：{{ toy }}</h4>
    </div>



</template>

<script setup lang="ts">
    import {ref,onUnmounted} from 'vue';
    import emitter from '@/utils/emitter';

    let computer = ref('惠普');
    let toy = ref('');

    emitter.on('send-toy',(value:any)=>{
        toy.value = value;
    })

    onUnmounted(()=>{
        emitter.off('send-toy');    
    })

</script>


<style scoped>
    .child1{
		margin-top: 50px;
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
	.child1 button{
		margin-right: 10px;
	}
</style>