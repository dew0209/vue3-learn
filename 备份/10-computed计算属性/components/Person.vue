<template>
    <div class="person">
        <input type="text" v-model="firstName"/>
        <input type="text" v-model="lastName"/>
        <button @click="changeName">将名字改成li-si</button>
        全名：<span>{{ fullName }}</span>
    </div>


</template>

<script lang="ts" setup name="Person">
    import {computed, ref,toRef,toRefs} from 'vue';
    import {reactive} from 'vue';

    let firstName = ref('zhang');;
    let lastName = ref('san');

    let fullName = computed({
        get(){
            //ComputedRefImpl
            console.log(fullName);
            return firstName.value + '-' + lastName.value;
        },
        set(value){
            var [a,b] = value.split('-');
            firstName.value = a;
            lastName.value = b;
        }
    })

    function changeName(){
        fullName.value = 'li-si';
    }

</script>