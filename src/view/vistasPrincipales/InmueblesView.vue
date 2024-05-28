<template>
    <div  class="flex-column-bgblue-pd30">
        <label for="buscar" class="label-bold-17-start">Buscar</label>
        <br>

        <div class="flex-row-30gap">
            <input class="buscar" name="buscar" type="text" v-model="filterValue">

            <fieldset>
                <legend>Tipo de busqueda</legend>
                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" value="id" v-model="selectedValue" checked>
                    <label for="tipo" class="label-bold-10-start">Identificación</label>
                </div>
                <!--
                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" v-model="selectedValue" value="barrio">
                    <label for="tipo" class="label-bold-10-start">Barrio</label>
                </div> -->

                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" v-model="selectedValue" value="client">
                    <label for="tipo" class="label-bold-10-start">Propietario</label>
                </div>
            </fieldset>
            <button @click="filtrarInmuebles">Filtrar</button>
            <button @click="getInmuebles">Limpiar filtros</button>
            
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
                this.filterValue = ""
            },
            async filtrarInmuebles() {
                const toast = useToast();
                let baseEndpoint = '/api/private/properties/search/' + this.selectedValue + "/" + this.filterValue;
                const response = await api.get(baseEndpoint, this.token);
                if(response.data == null) {
                    toast.error("No se encontraron resultados");
                    return;
                }

                if(this.selectedValue == 'client') {
                    this.inmuebles = response.data;
                    toast.success("Se han filtrado los inmuebles")
                    return;
                }

                this.$store.commit('setInmueble', response.data);
                this.$router.push(`/Inmuebles/${response.data.id}`); 
            }
            
        },
        data(){
            return{
                inmuebles:[],
                token:"",
                selectedValue: "id",
                filterValue: ""
            }
        }
    }
</script>
