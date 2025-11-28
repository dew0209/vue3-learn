<template>
    <div class="person">
        <h2>一辆车：品牌->{{ pingpai }}，价格->{{ price }}</h2>
        <button @click="changeCarPrice">修改汽车的价格</button>
        <button @click="changeCar">修改整俩车</button>
        <br>
    </div>


</template>

<script lang="ts" setup name="Person">
    import {ref,toRef,toRefs} from 'vue';
    import {reactive} from 'vue';

    let car = reactive({
        pingpai:'奔驰',
        price:2000
    })

    //这样不是响应式的，点击事件触发，并不会改页面值
    //let {pingpai,price} = car;

    //解构出来的对象是ref类型的
    //1.toRefs解构出来是响应式的
    //let {pingpai,price} = toRefs(car);
    //2.也可以使用toRef结构
    let pingpai = toRef(car,'pingpai');
    let price = toRef(car,'price');


    function changeCarPrice(){
        price.value += 1;
        console.log(price);
    }

    function changeCar(){
        Object.assign(car,{pingpai:'奥迪',price:3000})
    }

</script>