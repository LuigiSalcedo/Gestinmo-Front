<template>
    <label>{{ props.nombre }}</label>
    <button>Descargar</button>
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

const emit = defineEmits(['delete'])

const eliminarDocumento = () => {
    emit('delete', props.nombre)
}

</script>
<style scoped>
</style>