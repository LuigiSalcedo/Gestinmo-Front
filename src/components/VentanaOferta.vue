<template>
    
    <div @click="irOferta" class='ventana-inmueble'>
        <div class="inmueble-descripcion">
            <p>{{ oferta['id'] }}</p>
            <p>{{ oferta['creationDate'] }}</p>
            <p>{{ oferta["price"] }}</p>
        </div>
    </div>

</template>

<script>
    export default{
        name: "VentanaInmueble",
        props:{
            oferta:[],
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

