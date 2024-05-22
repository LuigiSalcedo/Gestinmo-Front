<template>
    
    <div class="vista-cliente">
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
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona',correo:'grisoncastilla@gmail.com', celular:'3014649618'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona',correo:'grisoncastilla@gmail.com', celular:'3014649618'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona',correo:'grisoncastilla@gmail.com', celular:'3014649618'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona',correo:'grisoncastilla@gmail.com', celular:'3014649618'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona',correo:'grisoncastilla@gmail.com', celular:'3014649618'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona',correo:'grisoncastilla@gmail.com', celular:'3014649618'},
                    {id: '1043634932', nombre: 'Greison Rey Castilla Carmona',correo:'grisoncastilla@gmail.com', celular:'3014649618'},
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
    .vista-cliente{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        gap: 20px;
    }
</style>