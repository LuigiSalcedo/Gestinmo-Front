<template>
    
    <div @click="irDetalleOferta" class="ventana-inmueble">

        <img v-if="oferta.inmueble.src!=null" :src=oferta.inmueble.src width="160px"  :alt="oferta.inmueble.nombre">
        <div class="inmueble-descripcion">
            <p>{{ oferta.id }}</p>
            <p>{{ oferta.inmueble.nombre }}</p>
            <p>{{ oferta.inmueble.barrio }}</p>
            <p>{{ oferta.inmueble.direccion }}</p>
            <p>{{ oferta.precio }}</p>
        </div>
    </div>

</template>

<script>
    export default{
        name: "VentanaInmueble",
        props:{
            oferta:{
                id:String,
                inmueble:Object,
                estado: Boolean,
                fecha: String,
                precio: String
            },
        },
        data(){
            return this.oferta;
        },
        methods:{
            irDetalleOferta() {
                this.$store.commit('setOferta', this.oferta); 
                this.$router.push("/oferta/"+this.oferta.id); 
            }
        }
    }
</script>

