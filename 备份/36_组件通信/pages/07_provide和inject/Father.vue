<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>银子：{{ money }}</h4>
        <h4>车子：一辆{{ car.brand }}车，价格：{{ car.price }}</h4>
        <Child/>
    </div>
</template>

<script setup lang="ts">
    import { ref,reactive, provide } from 'vue';
    import Child from './Child.vue';

    let money = ref(1000);

    let car = reactive({
        brand:'奔驰',
        price:10000
    })

    function updateMoney(value:number){
        money.value -= value;
    }

    provide('moneyContent',{money,updateMoney});
    provide('car',car);

    
</script>

<style>
    .father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
        border-radius: 10px;
	}
</style>