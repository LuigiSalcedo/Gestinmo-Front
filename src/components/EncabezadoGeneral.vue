
<template>
    <div class="encabezado">
        <h1 class="titulo-encabezado">
            {{ titulo }}
        </h1>

        <LogoCasaVentas tamaño="100px" />

    </div>
</template>

<script >
import LogoCasaVentas from '@/common/LogoCasaVentas.vue';
export default{
    name: 'EncabezadoGeneral',
    components:{
        LogoCasaVentas
    },
    props:{
        titulo: String
    }
}
</script>

<style>
    .encabezado{
        display: flex;
        width: 97%;
        color: white;
        background-color:#2c3e50;
        justify-content:space-between;
        padding: 20px;
    }
    .titulo-encabezado{
        margin-top: 2.8%;
    }
</style>