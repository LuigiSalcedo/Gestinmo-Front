<template>
    <div class="flex-p10-g20">
        <ventana-oferta :oferta="offers"/>
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
            }
        },
        data(){
            return{
                offers :[]
            }
        }
    }
</script>
