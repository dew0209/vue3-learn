<template>
    <div class="person">
        <h1 ref="title2222">hehehehehe</h1>
        <button @click="ceshi">测试</button>
        <br>
    </div>


</template>

<script lang="ts" setup name="Person">
    import {ref} from 'vue';

    let title2222 = ref();

    function ceshi(){
        console.log("title2222：",title2222.value);
    }



</script>