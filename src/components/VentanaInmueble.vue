<template>
    
    <div class="ventana-inmueble">

        <img :src=inmueble.src width="160px"  :alt="inmueble.name">
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
        },
        methods:{
            acturalizarImagen(){
                this.src = this.inmueble.src;
            }
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
    }

    .inmueble-descripcion{
        background-color: white;
        color: #2c3e50;
    }

    .ventana-inmueble:hover{
        transform: scale(1.1);
        transition: 350ms;
    }


</style>