<template>
    <label>Subir un archivo: <input type="file" @change="handleFileChange" /></label>
    <button :onClick="subirArchivo">Subir archivo</button>
    <h3>Documentos disponibles</h3>
    <div class="flex-row-gap30" v-for="document in documents" :key="document">
        <VentanaDocumento :nombre="document"/>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import api from "@/services/api";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { getToken } from "@/util/auth";
import { defineProps } from 'vue';
import VentanaDocumento from '@/components/VentanaDocumento.vue'

let documents = ref([]);
let file = ref(null);
const props = defineProps({
    inmueble: {
        required: true
    }
});
let obtenerArchivos = async () => {
    const toast = useToast();
    console.log(props.inmueble);
    const response = await api.get("/api/private/documents/search/" + props.inmueble.id, getToken());
    if (response.success) {
        toast.success("Se cargaronn los documentos de inmueble.")
    }
    documents.value = response.data;
    console.log(documents.value);
}

let subirArchivo = async () => {
    const toast = useToast();
    if(!file.value) {
        toast.error("No hay archivo seleccionado.")
        return;
    }
    let formData = new FormData();
    formData.append("file", file.value);
    let serverResponse = await api.post_file("/api/private/documents/save/" + props.inmueble.id, formData, getToken());
    if(serverResponse.statusCode > 204) {
        toast.error("Ocurrió un error al subir el archivo.");
        return;
    }
    toast.success("El archivo se subió correctamente");
    await obtenerArchivos();
}

const handleFileChange = (event) => {
      file.value = event.target.files[0];
};

obtenerArchivos();
</script>
<style scoped></style>