<template>
    <div class="person">
        <!-- setup使用 -->
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字：</button>
        <button @click="changeAge">修改年龄：</button>
        <button @click="showTel">查看联系方式：</button>
        <br/>
    </div>


</template>

<script lang="ts" setup name="Person">
    
    let name = '张三';
    let age = 18;
    let tel = '13888888888';

    function changeName(){
        name += '~';
        console.log('name',name);
    }
    function changeAge(){
        age += 1;
        console.log('age',age);
    }
    function showTel(){
        alert(tel);
    }

</script>