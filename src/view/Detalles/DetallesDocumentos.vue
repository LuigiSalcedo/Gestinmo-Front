<template>
    <h2>Documents</h2>
    <label>Subir un archivo: <input type="file" @change="handleFileChange" /></label>
    <button :onClick="subirArchivo">Subir archivo</button>
</template>
<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { mapState } from 'vuex';
import {api, handleResponse } from "@/services/api";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { getToken } from "@/util/auth";

let documents = ref([]);
let file = ref(null);
let inmueble = computed(() => mapState(["inmueble"]));
let obtenerArchivos = async () => {
    const toast = useToast();
    const response = await api.get("/api/private/documents/search/" + this.inmueble['id'], getToken());
    if (response.success) {
        toast.success("Se cargaros los documentos de inmueble.")
    }
    documents.value = response.data;
}

let subirArchivo = async () => {
    let formData = new FormData();
    formData.append("file", file.value);
    let serverResponse = await fetch('http://localhost:8080/api/private/documents/save/' + inmueble["id"], {
        method: 'POST',
        headers: {
            'Content-Type': 'application:json',
            "Authorization": getToken()
        },
        body: formData
    }).then(() => {return response.json()});
    obtenerArchivos();
}

const handleFileChange = (event) => {
      file.value = event.target.files[0];
};
</script>
<style scoped></style>