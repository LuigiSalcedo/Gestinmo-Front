<template>
    
    <div @click="irDetalleInmueble" class="ventana-inmueble">

        <img v-if="inmueble.src!=null" :src=inmueble.src width="160px"  :alt="inmueble.nombre">
        <img v-else src="@/assets/simbolos/default.png" width="160px" alt="">
        <div class="inmueble-descripcion">
            <p>{{ inmueble['id'] }}</p>
            <p>{{ inmueble['neighborhood']['name'] }}</p>
            <p>{{ inmueble['address'] }}</p>
            <p>{{ inmueble['clientOwner']['name'] }}</p>
        </div>
    </div>

</template>

<script>
    export default{
        name: "VentanaInmueble",
        props:{
            inmueble: Object,
        },
        data(){
            return this.inmueble;
        },
        methods:{
            irDetalleInmueble() {
                this.$store.commit('setInmueble', this.inmueble); 
                this.$router.push(`/Inmuebles/${this.inmueble.id}`); 
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