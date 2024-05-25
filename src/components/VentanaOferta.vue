<template>
    
    <div @click="irOferta" class='ventana-inmueble'>

        <img v-if="oferta.inmueble.src!=null" :src=oferta.inmueble.src width="160px"  :alt="oferta.inmueble.id">
        <div class="inmueble-descripcion">
            <p v-if="oferta.estado">Activo</p>
            <p v-else>Inactivo</p>
            <p>{{ oferta.inmueble.barrio }}</p>
            <p>{{ oferta.inmueble.direccion }}</p>
            <p>${{ oferta.precio }}</p>
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
            irOferta() {
                console.log(this.oferta)
                this.$store.commit('setOferta', this.oferta); 
                this.$router.push(`/Ofertas/${this.oferta.id}`); 
            }
        }
    }
</script>

