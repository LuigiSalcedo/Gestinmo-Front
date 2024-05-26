<template>
    <div  class="flex-column-bgblue-pd30">
        <label for="buscar" class="label-bold-17-start">Buscar</label>
        <br>

        <div class="flex-row-30gap">
            <input class="buscar" name="buscar" type="text">

            <fieldset>
                <legend>Tipo de busqueda</legend>
                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" value="nombre" checked>
                    <label for="tipo" class="label-bold-10-start">Nombre</label>
                </div>
                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" value="id">
                    <label for="tipo" class="label-bold-10-start">Identificación</label>
                </div>
                
            </fieldset>
            
        </div>
    </div>
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