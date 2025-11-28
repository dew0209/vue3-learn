<template>
    <div class="person">
        <!-- setup使用 -->
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字：</button>
        <button @click="changeAge">修改年龄：</button>
        <button @click="showTel">查看联系方式：</button>
        <br/>

        <!-- setup和vue2使用上的差异 -->
        <h2>a：{{ a }}</h2>
        <h2>b：{{ b }}</h2>
        <h2>c：{{ c }}</h2>
        <button @click="showD">显示d</button>
    </div>


</template>

<script lang="ts">
    export default{
        name:"Person",
        data(){
            return {
                a:'1',
                c:'vue2-c'
            }
        },
        methods:{
            showD(){
                // 可以通过this.xxx访问setup中的内容
                console.log(this.tel);
                console.log("ddddddddddddddd");
            }
        },
        setup(){
            // 相当于vue2的data
            let name = "张三";
            let age = 18;
            let tel = 13888888888;
            let b = 2;
            let c = 'vue3-c';

            console.log(this);

            //相当于vue2的methods
            function changeName(){
                name += '~';
                console.log('name：',name);
            }

            function changeAge(){
                age += 1;
                console.log('age：',age);
            }

            function showTel(){
                alert(tel);
            }
            //返回值：有两种
            //1.返回一个对象
            //一定要交出去，不然template上读取不到
            return {name,age,tel,b,c,changeName,changeAge,showTel};
            //2.返回一个函数，自定义渲染内容
            //整个模板就展示的是哈哈
            // return ()=>'哈哈';
        }
    }
</script>