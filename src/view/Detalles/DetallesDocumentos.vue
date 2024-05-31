<template>
    <div class="flex-column-bgblue-pd30">
        <label class="label-bold-17-start">Subir un archivo: <input type="file" @change="handleFileChange" /></label>
        <br>
        <button :onClick="subirArchivo">Subir archivo</button>
        <h3>Documentos disponibles</h3>

        <div class="flex-row-gap20">
            <div class="flex-column-borderwhite" v-for="document in documents" :key="document">
                <VentanaDocumento
                @download="descargarDocumento"
                @delete="eliminarDocumento" :nombre="document"/>
            </div>
        </div>
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
    const response = await api.get("/api/private/documents/search/" + props.inmueble.id, getToken());
    if (!response.success) {
        document.value = []
        return
    }
    documents.value = response.data;
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

const eliminarDocumento = async (nombreDocumento) => {
    const toast = useToast()
    const endpoint = "/api/private/documents/delete/" + props.inmueble.id + "/" + nombreDocumento
    const serverResponse = await api.delete(endpoint, getToken())
    if(serverResponse > 204) {
        toast.error("Ocurrió un error al eliminar el archivo")
        return
    }
    toast.success("Archivo elimnado correctamente")
    await obtenerArchivos()
}

const descargarDocumento = async (nombreDocumento)  => {
    const toast = useToast()
    const endpoint = "/api/private/documents/search/" + props.inmueble.id + "/" + nombreDocumento
    const serverResponse = await api.get_without_format(endpoint, getToken())
    if(serverResponse.status > 204) {
        toast.error("Parece que ocurrió un error descargando el archivo")
        return
    }
    const blob = await serverResponse.blob()
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', nombreDocumento);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}   

const handleFileChange = (event) => {
      file.value = event.target.files[0];
};

obtenerArchivos();
</script>

<style scoped>
    .flex-column-borderwhite{
        display: flex;
        flex-direction: column;
        border:4px solid white;
        border-radius: 4px;
        padding: 10px;
        text-overflow: ellipsis;
    }
    .flex-row-gap20{
        display: flex;
        flex-direction: row;
        gap: 10px   ;
    }
</style>