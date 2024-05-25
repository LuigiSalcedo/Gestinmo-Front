<template>
    <h2>Oferta: {{ oferta.id }}</h2>
    <div class="flex-column-bgblue-pd30">
        <div class="flex-row-30gap">
        
        <div class="div-parrafo-blanco">
            
            <p class="label-bold-17-start">{{ oferta.captacion }}: {{ oferta.inmueble.barrio }} ({{ oferta.inmueble.id }})</p>
            <p class="label-bold-17-start">Propietario</p>
            {{oferta.inmueble.propietario}}
            <p class="label-bold-17-start">Descripción</p>
            {{ oferta.inmueble.descripcion }}
    
            <div class="flex-row-30gap">
                <div class="flex-column">
                    <p class="label-bold-17-start">Barrio</p>
                    {{ oferta.inmueble.barrio }}
                </div>
                <div class="flex-column">
                    <p class="label-bold-17-start">Dirección</p>
                    {{ oferta.inmueble.direccion }}
                </div>
            </div>
            
            <p class="label-bold-17-start">Precio</p>
            ${{oferta.precio}}
            <br>
        </div>
            <img :src="oferta.inmueble.src" width="600px" alt="">
        </div>
        <br>
        <br>
        <form class="flex-row-30gap" action="">
            <InputForm :input="precio" :datos="oferta.precio" :estado="estado"/>
            <InputForm :input="captacion" :datos="oferta.captacion" :estado="estado"/>
            <select name="Estado" id="estado" :disabled="estado" required>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
            </select>
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