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
        <form class="flex-row-30gap" action="">
            <InputForm :input="precio" :datos="oferta" :estado="estado"/>
            <InputForm :input="captacion" :datos="oferta['type']" :estado="estado"/>
            <button :disabled="guardar" style="height: 38px;">Guardar</button>
       </form>
       <br>
       <div class="flex-row-30gap">
            <Button @click="estado=!estado; guardar = !guardar" >Editar</Button>
            <button class="eliminar">Eliminar</button>
       </div>
       
    </div>
    
</template>

<script>
import { mapState } from 'vuex'
import InputForm from "@/common/InputForm.vue";

    export default{
        name: "DetallesOferta",
        components:{
            InputForm
        },
        data(){
            return{
                precio: {nombre: "Precio", tipo:"Number", name:"precio"},
                captacion: {nombre: "Captación", tipo:"Text", name:"captacion"},
                estado:"false",
                guardar:"false"
            }
        },
        computed:{
            ...mapState(["oferta"])
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