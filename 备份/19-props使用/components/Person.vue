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
    defineProps(['personList']);


</script>