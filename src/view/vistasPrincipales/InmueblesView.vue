<template>
    <div  class="flex-column-bgblue-pd30">
        <label for="buscar" class="label-bold-17-start">Buscar</label>
        <br>

        <div class="flex-row-30gap">
            <input class="buscar" name="buscar" type="text">

            <fieldset>
                <legend>Tipo de busqueda</legend>
                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" value="id" checked>
                    <label for="tipo" class="label-bold-10-start">Identificación</label>
                </div>
                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" value="barrio">
                    <label for="tipo" class="label-bold-10-start">Barrio</label>
                </div>

                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" value="propietario">
                    <label for="tipo" class="label-bold-10-start">propietario</label>
                </div>
            </fieldset>
            
        </div>
    </div>
    <div class="flex-p10-g20">
        
        <AgregarButton @click="limpiar" ruta="/RegistrarInmueble" width="160px"/>
        <VentanaInmueble v-for="inmueble in inmuebles" :key="inmueble" :inmueble="inmueble" />
        
    </div>

</template>

<script>
    import VentanaInmueble from '@/components/VentanaInmueble.vue';
    import AgregarButton from '@/common/AgregarButton.vue';
    import { getToken } from '@/util/auth';
    import api from '@/services/api';
    import { useToast } from "vue-toastification";
    import "vue-toastification/dist/index.css";

    export default {
        name:"InmuebleView",
        mounted(){
            this.enviarTitulo()
            this.asignarToken()
            this.getInmuebles()
        },
        components:{
            VentanaInmueble,
            AgregarButton
        },
        methods:{
            enviarTitulo(){
                this.$emit('titulo-enviado',"Inmuebles");
            },
            limpiar(){
                const cliente = null;
                this.$store.commit('setCliente', cliente); 
            },
            asignarToken(){
                this.token = getToken();
            },
            async getInmuebles(){
                const toast = useToast();
                const response = await api.get("/api/private/properties/search/all", this.token)
                if(response){
                    this.inmuebles = response.data
                }else{
                    toast.error("No se encontraron inmuebles registrados")
                }
            }
        },
        data(){
            return{
                inmuebles:[],
                token:""
            }
        }
    }
</script>
