<template>
    <div class="father">
        <h3>父组件</h3>
        
        <!-- v-model用在html标签上 -->
        <input type="text" v-model="userName">
        <!-- 相当于 -->
        <!-- <input type="text" :value="userName" @input="userName = (<HTMLInputElement>$event.target).value"> -->


        <h4>{{ userName }}</h4>
        <h4>{{ passWord }}</h4>

        <!-- v-model用在组件标签上 -->
        <!-- <Child v-model:ming="userName" v-model:mima="passWord" /> -->
        <!-- 相当于 -->
        <Child 
        :ming="userName" 
        @update:ming="userName = $event"
        :mima="passWord" 
        @update:mima="passWord = $event"
        />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Child from './Child.vue';
    
    let userName = ref('zhangsan');
    let passWord = ref('123456');

</script>

<style>
    .father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
        border-radius: 10px;
	}
    .father button{
        margin-left: 5px;
    }
</style>