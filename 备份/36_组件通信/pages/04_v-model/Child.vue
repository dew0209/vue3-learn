<template>
    <input type="text" :value="ming" @input="emit('update:ming',$event.target.value)">
    <input type="text" :value="mima" @input="emit('update:mima',$event.target.value)">
</template>

<script setup lang="ts">
    defineProps(['ming','mima'])
    const emit = defineEmits(['update:ming','update:mima'])

</script>

<style scoped></style>