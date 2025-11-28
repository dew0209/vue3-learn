<template>
    <div class="person">
        <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}，{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改整个车</button>
        <br>
    </div>


</template>

<script lang="ts" setup name="Person">
    import {reactive,watch} from 'vue';

    let person = reactive({
        name:'张三',
        age:18,
        car:{
            c1:'奔驰',
            c2:'宝马'
        }
    });

    function changeName(){
        person.name += '~';
    }

    function changeAge(){
        person.age += 1;
    }

    function changeC1(){
        person.car.c1 += '~';
    }

    function changeC2(){
        person.car.c2 += '~';
    }

    function changeCar(){
        Object.assign(person.car,{c1:'雅迪',c2:'艾玛'});
    }
    
    

    

    //情况五：监视多个数据
    watch([person.car,()=>person.name],(newValue,oldValue)=>{
        console.log('person变化了：',newValue,oldValue);
    },{deep:true})


</script>