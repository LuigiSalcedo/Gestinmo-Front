<template>
    <div class="flex-column" style="width: 200px;">
        <label class="label-bold-17-start">{{ props.nombre }}</label>
        <br>
        <div class="flex-row-30gap">
            <button @click="descargarDocumento">Descargar</button>
            <button @click="eliminarDocumento" class="eliminar">Eliminar</button>
        </div>
    </div>
    
   
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