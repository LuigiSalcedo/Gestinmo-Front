<template>
    
    <div class="flex-p10-g20">
        <AgregarButton ruta="/RegistrarCliente" width="140px"/>

        <VentanaCliente v-for="cliente in clientes" 
        :key="cliente.id"
        :clienteD="cliente"
        />
    </div>
   
</template>

<script>
import VentanaCliente from '@/components/VentanaCliente.vue';
import AgregarButton from '@/common/AgregarButton.vue';

    export default {
        components: { VentanaCliente,
            AgregarButton
         },
        name:"ClientesView",
        data(){
            return{
                clientes :[
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona',correo:'grisoncastilla@gmail.com', celular:'3014649618'},
                    {id: '78902354', nombre: 'Milena Castro Hernandez',correo:'mile_C_C@gmail.com', celular:'3207152725'},
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
    .flex-p10-g20{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        gap: 20px;
    }
</style>