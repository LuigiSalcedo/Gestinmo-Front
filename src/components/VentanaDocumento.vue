<template>
    <label>{{ props.nombre }}</label>
    <button @click="descargarDocumento">Descargar</button>
    <button @click="eliminarDocumento" class="eliminar">Eliminar</button>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    nombre: {
        required: true,
        type: String
    }
})

const emit = defineEmits(['delete', 'download'])

const eliminarDocumento = () => {
    emit('delete', props.nombre)
}

const descargarDocumento = () => {
    emit('download', props.nombre)
}

</script>
<style scoped>
</style>