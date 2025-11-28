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
    import {ref} from 'vue';

    let name = ref('张三');
    let age = ref(18);
    let tel = '13888888888';

    function changeName(){
        //RefImpl对象，value是实际的值
        console.log(ref);
        //在js中需要.vaue操作，是响应式的。
        name.value += '~';
        console.log('name',name);
    }
    function changeAge(){
        //这样不是响应式的，和模板中是两个对象，无法做到响应式
        age = ref(22);
        console.log('age',age.value);
    }
    function showTel(){
        alert(tel);
    }

</script>