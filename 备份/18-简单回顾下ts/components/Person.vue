<template>
    <div class="person">
        <ul>
            <li v-for="person in personList" :key="person.id">
                {{ person.name }}
            </li>
        </ul>
    </div>


</template>

<script lang="ts" setup name="Person">
    import { type PersonInter,type Persons } from '@/types';

    let personList:Persons = [
        {id:'xwqwubfq01',name:'张三',age:60},
        {id:'xwqwubfq02',name:'李四',age:20},
        {id:'xwqwubfq03',name:'王二',age:10},
    ];


</script>