<template>
    <div class="person">
        <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
        <br>
        <h1>测试：</h1>
        <h1>{{ arr.a.b.c }}</h1>
        <button @click="changeC">修改c的值</button>
    </div>


</template>

<script lang="ts" setup name="Person">
    import {reactive, ref,watch} from 'vue';

    let person = reactive({
        name:'张三',
        age:18
    });

    function changeName(){
        person.name += '~';
    }

    function changeAge(){
        person.age += 1;
    }

    function changePerson(){
        Object.assign({name:'李四',age:90});
    }
    
    //情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
    //有一点区别，修改整个不触发
    watch(person,(newValue,oldValue)=>{
        console.log('person变化了：',newValue,oldValue);
    })


    let arr = reactive({
        a:{
            b:{
                c:999
            }
        }
    });

    function changeC(){
        arr.a.b.c = 888;
    }


    watch(arr,(newValue,oldValue)=>{
        console.log('arr变化了',newValue,oldValue);
    })


</script>