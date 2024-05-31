<template>
    <div  class="flex-column-bgblue-pd30">
        <label for="buscar" class="label-bold-17-start">Buscar</label>
        <br>

        <div class="flex-row-30gap">
            <input class="buscar" name="buscar" type="text" v-model="filterValue">

            <fieldset>
                <legend>Tipo de busqueda</legend>
                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" value="name" v-model="selectedType" checked>
                    <label for="tipo" class="label-bold-10-start">Nombre</label>
                </div>
                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" value="id" v-model="selectedType">
                    <label for="tipo" class="label-bold-10-start">Identificación</label>
                </div>
                
            </fieldset>
            <button :onClick="filtrar">Buscar</button>
            <button :onClick="getCliente">Limpiar filtros</button>
        </div>
    </div>
    <div class="flex-p10-g20">
        <AgregarButton ruta="/RegistrarCliente" width="140px"/>
            <VentanaCliente v-for="cliente in clientes" 
            :key="cliente"
            :clienteD="cliente"
            />
    </div>
   
</template>

<script>
    import VentanaCliente from '@/components/VentanaCliente.vue';
    import AgregarButton from '@/common/AgregarButton.vue';
    import api from '@/services/api';
    import { getToken } from '@/util/auth';
    import { useToast } from "vue-toastification";
    import "vue-toastification/dist/index.css";

    export default {
        components: { VentanaCliente,
            AgregarButton
         },
        name:"ClientesView",
        data(){
            return{
                clientes: [],
                token:"",
                filterValue: "",
                selectedType: 'name'
            }
        },
        mounted(){
            this.asignarToken()
            this.enviarTitulo(),
            this.getCliente()
        },
        methods:{
            enviarTitulo(){
                this.$emit('titulo-enviado',"Clientes");
            },
            async getCliente(){
                const response = await api.get('/api/private/clients/search', this.token)
                const toast = useToast();
                if(response.success){
                    this.clientes = response.data;
                }else{
                    toast.error("No se encontraron clientes registrados")
                }
                this.filterValue = "";
            },
            asignarToken(){
                this.token = getToken();
            },
            async filtrar() {
                let endpoint = '/api/private/clients/search/' + this.selectedType + "/" + this.filterValue;
                const response = await api.get(endpoint, this.token);
                const toast = useToast();
                if(response.data == null) {
                    toast.error("Cliente no encontrado");
                    return;
                }
                if(this.selectedType == 'id') {
                    toast.success("Cliente encontrado");
                    this.$store.commit('setCliente', response.data);
                    this.$router.push(`/Clientes/${response.data.id}`); 
                }
                else if(this.selectedType == 'name') {
                    this.clientes = response.data;
                }
            }
        }
    }

</script>

<style>
    .buscar{
        width: 95%;
        padding: 5px;
        border-radius: 8px ;
        border: solid 4px white;
        outline: none;
    }

    .flex-p10-g20{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        gap: 20px;
    }

    .flex-row-10gap{
        display: flex;
        gap: 10px ;
    }

    .label-bold-10-start{
        font-size: 12px;
    }

    fieldset{
        font-size: 12px;
        border-color:white;
        border: solid;
        display: flex;
        gap: 10px;
        color: white;
        align-items: center;
    }
</style>