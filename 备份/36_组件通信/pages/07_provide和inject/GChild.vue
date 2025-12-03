<template>
    <div class="child">
        <h3>孙组件</h3>
        <h4>银子：{{ money }}</h4>
        <h4>爷爷的车子：一辆{{ car.brand }}车，价格：{{ car.price }}</h4>
        <button @click="updateMoney(6)">花爷爷的钱</button>
    </div>
</template>

<script setup lang="ts">
    import { ref,inject } from 'vue';
    let {money,updateMoney} = inject('moneyContent');
    let car = inject('car');


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