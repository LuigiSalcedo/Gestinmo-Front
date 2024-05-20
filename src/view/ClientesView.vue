<template>
    
    <div class="clientes-grid">
        <RouterLink to="/RegistrarCliente" class="agregar-div">
            <img src="@/assets/simbolos/agregar.png" class="agregar" width="140px" alt="">
        </RouterLink>

        <VentanaCliente v-for="cliente in clientes" 
        :key="cliente.id"
        :id="cliente.id" 
        :nombre="cliente.nombre"
        />
    </div>
   
</template>

<script>
import VentanaCliente from '@/components/VentanaCliente.vue'
    export default {
        components: { VentanaCliente },
        name:"ClientesView",
        data(){
            return{
                clientes :[
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona'}
                ]
            }
        },
        mounted(){
            this.enviarTitulo()
        },
        methods:{
            enviarTitulo(){
                this.$emit('titulo-enviado',"Clientes");
            }
        }
    }
    

</script>

<style>
    .clientes-grid{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        gap: 20px;
    }

    .agregar-div{
        background-color:transparent ;
        display: flex;
        align-self: center;
        justify-self: center
    }

    .agregar-div:hover {
        transform: scale(1.1);
        transition: 350ms;
        filter:brightness(0) saturate(100%) invert(78%) sepia(10%) saturate(1559%) hue-rotate(167deg) brightness(90%) contrast(92%);
    }

</style>