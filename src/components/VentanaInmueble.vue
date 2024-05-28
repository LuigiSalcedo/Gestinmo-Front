<template>
    
    <div @click="irDetalleInmueble" class="ventana-inmueble">

        <img v-if="imagen!=null" :src="imagen" width="160px" :alt="inmueble['id']">
        <img v-else src="@/assets/simbolos/default.png" width="160px" :alt="inmueble['id']">
        <div class="inmueble-descripcion">
            <p>{{ inmueble['id'] }}</p>
            <p>{{ inmueble['neighborhood']['name'] }}</p>
            <p>{{ inmueble['address'] }}</p>
            <p>{{ inmueble['clientOwner']['name'] }}</p>
        </div>
    </div>

</template>

<script>
    import api from '@/services/api'
    import { getToken } from '@/util/auth';
    export default{
        name: "VentanaInmueble",
        props:{
            inmueble: Object
        },
        data(){
            return {imagen: ""}
        },
        mounted(){
            this.getImagen();
        },
        methods:{
            irDetalleInmueble() {
                this.$store.commit('setInmueble', this.inmueble); 
                this.$router.push(`/Inmuebles/${this.inmueble.id}`); 
            },
            async getImagen() {
                let serverResponse = await api.get_without_format('/api/private/documents/search/' + this.inmueble.id + "/imagen.png", getToken());
                if(serverResponse.status > 204) {
                    this.imagen = null;
                    return;
                }
                const blob = await serverResponse.blob();
                this.imagen = URL.createObjectURL(blob);
                console.log(this.imagen)
            },
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