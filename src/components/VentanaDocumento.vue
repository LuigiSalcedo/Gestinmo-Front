<template>
    <label>{{ props.nombre }}</label>
    <button>Descargar</button>
    <button class="eliminar">Eliminar</button>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    nombre: {
        required: true,
        type: String
    }
})
console.log(props.nombre);
</script>
<style scoped>
</style>