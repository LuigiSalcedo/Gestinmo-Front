<template>
    
    <div class="ventana-inmueble">

        <img v-if="inmueble.src" :src=inmueble.src width="160px"  :alt="inmueble.name">
        <div class="inmueble-descripcion">
            <p>{{ inmueble.nombre }}</p>
            <p>{{ inmueble.direccion }}</p>
            <p>{{ inmueble.cliente }}</p>
        </div>

    </div>

</template>

<script>
    export default{
        name: "VentanaInmueble",
        props:{
            inmueble:{
                nombre:String,
                direccion:String,
                cliente:String,
                src: String
            },
        },
        data(){
            return this.inmueble;
        }
    }
</script>

<style>

    .ventana-inmueble{
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 160px;
        color: #2c3e50;
    }

    .inmueble-descripcion{
        background-color: white;
        color: inherit;
    }

    .ventana-inmueble:hover{
        transform: scale(1.1);
        transition: 350ms;
        color: #81BDDE;
    }


</style>