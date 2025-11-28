<template>
    <div class="person">
        <h1>当前和为sum：{{ sum }}</h1>
        <button @click="addSum">点我sum + 1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref} from 'vue'

    let sum = ref(0);

    function addSum(){
        sum.value += 1;
    }

</script>