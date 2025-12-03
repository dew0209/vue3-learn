<template>
  <div class="app">
    <h2>sum1为：{{ person1 }}</h2>
    <h2>sum2为：{{ person2 }}</h2>
    <!-- 可以 -->
    <button @click="person1.car.brand += '~~'">修改sum1 的车</button>
    <!-- 不可以 -->
    <button @click="person2.car.brand += '~~'">修改sum2 的车</button>
    <!-- 不可以 -->
    <button @click="person2.age += 1">修改sum2 的年龄</button>
    <!-- 可以 -->
    <button @click="changeSum2">修改sum2</button>

    <br>
    <h2>car1为：{{ car1 }}</h2>
    <h2>car2为：{{ car2 }}</h2>
    <!-- 可以 -->
    <button @click="car1.price += 1">修改 car1 的价格</button>
    <!-- 可以 -->
    <button @click="car1.fadongji.xinghao += '8'">修改 car1 的发动机</button>

    <!-- 可以 -->
    <button @click="car2.price += 1">修改 car2 的价格</button>
    <!-- 不可以 -->
    <button @click="car2.fadongji.xinghao += '7'">修改 car1 的发动机</button>





  </div>

</template>

<script lang="ts" setup name="App">
    import { ref,reactive, shallowRef, shallowReactive } from 'vue';

    let person1 = ref({
      name:'李四',
      age:22,
      car:{
        brand:'奔驰'
      }
    });
    let person2 = shallowRef({
      name:'李四',
      age:22,
      car:{
        brand:'奔驰'
      }
    });

    function changeSum2(){
      
      person2.value = {
        name:'李四111111',
        age:2211,
        car:{
          brand:'11奔驰'
        }
      };
    }

    let car1 = reactive({
      brand:'奔驰333',
      price:333,
      fadongji:{
        xinghao:'v12',
        mali:333
      }
    })

    let car2 = shallowReactive({
      brand:'奔驰',
      price:222,
      fadongji:{
        xinghao:'v8',
        mali:222
      }
    })


</script>

<style scoped>
    .wraper .title {
      padding: 20px;
      text-align: center;
      min-width: 610px;
    }
    .wraper .small{
      font-size: 15px;
    }
    .wraper .list-group-item {
      min-width: 230px;
    }
</style>
