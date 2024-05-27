<template>
    <div class="flex-p10-g20">
        <ventana-oferta :oferta="offers"/>
    </div>
    <button :onClick="abrirHistorial">Ver historial de ofertas</button>
    <div v-if="showHistory">
        <div v-for="offer in offersHistory" :key="offer">
            <ventana-oferta :oferta="offer"/>
        </div>
    </div>

</template>
<script>
    import VentanaOferta from '@/components/VentanaOferta.vue';
    import api from '@/services/api';
    import { getToken } from '@/util/auth';
    import { useToast } from "vue-toastification";
    import "vue-toastification/dist/index.css";

    export default {
        name:"InmuebleView",
        mounted(){
            this.asignarToken()
            this.getOffers()
        },
        components:{
            VentanaOferta
        },
        props:{
            propertyId:String
        },
        methods:{
            limpiar(){
                const cliente = null;
                this.$store.commit('setCliente', cliente); 
            },
            asignarToken(){
                this.token = getToken();
            },
            async getOffers(){
                const toast = useToast()
                const response = await api.get("/api/private/offers/search/property/"+this.propertyId, this.token)
                if(response.success){
                    this.offers = response.data
                }else{
                    toast.error("No se encontraron ofertas asociadas al inmueble")
                }
            },
            async abrirHistorial() {
                this.showHistory = !this.showHistory;
                if(this.showHistory) {
                    await this.getOffersHistory();
                }
            },
            async getOffersHistory() {
                const toast = useToast();
                const response = await api.get("/api/private/offers/search/property/"+this.propertyId+"/history", this.token);
                console.log(response);
                if(response.success){
                    this.offersHistory = response.data
                    console.log(response.data);
                }else{
                    toast.error("No se encontraron ofertas asociadas al inmueble")
                }
            }
        },
        data(){
            return{
                offers :[],
                offersHistory: [],
                showHistory: false,
            }
        }
    }
</script>
