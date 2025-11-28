<template>
    <div class="person">
        <h2>一辆车：品牌->{{ car.pingpai }}，价格->{{ car.price }}</h2>
        <button @click="changeCarPrice">修改汽车的价格</button>
        <button @click="changeCar">修改整俩车</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="updateFirstGame">修改第一个游戏</button>
        <br>
        <h2>多层次结构</h2>
        <h2>{{ obj.a.b.c }}</h2>
        <button @click="changeC">修改c的值</button>
    </div>


</template>

<script lang="ts" setup name="Person">
    import {reactive} from 'vue';

    let car = reactive({
        pingpai:'奔驰',
        price:2000
    })

    function changeCarPrice(){
        //Proxy对象
        console.log(car);
        car.price += 1;
    }

    function changeCar(){
        // 不对
        //car = {pingpai:'奥迪',price:3000};
        // 不对
        //car = reactive({pingpai:'奥迪',price:3000});
        //方式一：
        // car.pingpai = '奥迪';
        // car.price = 3000;
        //方式二：
        Object.assign(car,{pingpai:'奥迪',price:3000})
    }

    let games = reactive([
        {id:'dqbudiwuiqhdq01',name:'王者荣耀'},
        {id:'dqbudiwuiqhdq02',name:'原神'},
        {id:'dqbudiwuiqhdq03',name:'第五人格'}
    ])

    function updateFirstGame(){
        games[0].name = '皇室战争';
    }
    

    let obj = reactive({
        a:{
            b:{
                c:'test'
            }
        }
    })

    function changeC(){
        obj.a.b.c += '~';
    }

</script>