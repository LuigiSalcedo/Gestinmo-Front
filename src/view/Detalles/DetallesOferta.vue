<template>
    <h2>Oferta: {{ oferta['id'] }}</h2>
    <div class="flex-column-bgblue-pd30">
        <div class="flex-row-30gap">
        
        <div class="div-parrafo-blanco">
            
            <p class="label-bold-17-start">{{ oferta["catchmentType"]['name'] }}: {{ oferta['property']['neighborhood']['name'] }}</p>
            <p class="label-bold-17-start">Propietario</p>
            {{oferta['property']['neighborhood']['name']}}
            <p class="label-bold-17-start">Descripción</p>
            {{ oferta['property']['observations'] }}
    
            <div class="flex-row-30gap">
                <div class="flex-column">
                    <p class="label-bold-17-start">Barrio</p>
                    {{ oferta['property']['neighborhood']['name'] }}
                </div>
                <div class="flex-column">
                    <p class="label-bold-17-start">Dirección</p>
                    {{ oferta['property']['address'] }}
                </div>
            </div>
            
            <p class="label-bold-17-start">Precio</p>
            {{oferta['price']}}
            <br>
        </div>
            
        </div>
        <br>
        <br>
       <div class="flex-row-30gap">
            <button @click="eliminar()" class="eliminar">Eliminar</button>
       </div>
       
    </div>
    
</template>

<script>
import api from '@/services/api';
import { getToken } from '@/util/auth';
import { mapState } from 'vuex'
    import { useToast } from "vue-toastification";
    import "vue-toastification/dist/index.css";

    export default{
        name: "DetallesOferta",
        components:{
        },
        data(){
            return{
                precio: {nombre: "Precio", tipo:"Number", name:"precio"},
                captacion: {nombre: "Captación", tipo:"Text", name:"captacion"},
                estado:"false",
                guardar:"false",
                token:""
            }
        },
        computed:{
            ...mapState(["oferta"])
        },
        mounted(){
            this.asignarToken()
        },
        methods:{
            async eliminar(){
                const toast = useToast()
                const response = await api.delete("/api/private/offers/delete/"+this.oferta['id'], this.token)
                if(response.success){
                    toast.success("Se elimino la oferta correctamente")
                    this.$router.push("/Inmuebles")
                }else{
                    toast.error("no se pudo eliminar la oferta")
                }
            },
            asignarToken(){
                this.token = getToken()
            }
        }
    }
</script>

<style>
    .div-parrafo-blanco{
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 20px;
        align-items: flex-start;
    }
</style>