<template>
    <div class="person">
        <!-- {{  }}  插值语法 -->
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <!-- @click点击事件 -->
        <button @click="changeName">修改名字：</button>
        <button @click="changeAge">修改年龄：</button>
        <button @click="showTel">查看联系方式：</button>
    </div>

</template>

<script lang="ts">
    export default{
        name:'Person',
        // 属性区域
        data(){
            return {
                name:'张三',
                age:18,
                tel:'13888888888'
            }
        },
        // 方法区域
        methods:{
            changeName(){
                this.name += '~';
            },
            changeAge(){
                this.age += 1;
            },
            showTel(){
                alert(this.tel);
            }
        }
    }
</script>