<template>

<div class="flex-column-bgblue-pd30">
        <h2>Registrar Inmueble</h2>
       <form class="flex-column" action="">

        <div class="flex-row-30gap">
            <InputForm v-if="cliente != null" :input="propietario" :datos="cliente.id"/>
            <InputForm v-else :input="propietario"/>
            <p class="label-bold-17-start">Ó</p>
            <router-link to="/RegistrarCliente" style="height: 20px; padding-top: px;" class="router-button">Registrar Cliente</router-link>
        </div>
        

            <div class="flex-row-30gap">
                <InputForm ref="inputForm" v-for="input in inputs" :key="input" :input="input"/>
            </div>
            <br>
            <div class="flex-column">
                <label for="descripcion" class="label-bold-17-start">Descripción</label>
                <textarea name="descripcion" id="descripcion" cols="40" rows="5" required></textarea>

            </div>
            <div class="flex-row-30gap">
                <div class="flex-column-bgblue-pd30">
                    <label for="documentos" class="label-bold-17-start">Documentos</label>
                    <br>
                    <input type="file" name="documentos" required>
                </div>
                <div class="flex-column-bgblue-pd30">
                    <label for="imagenes" class="label-bold-17-start">Imágenes</label>
                    <br>
                    <input type="file" name="imagenes" required>
                </div>
                
            </div>
            <br>
            <div class="flex-align-left">
                <button style="height: 38px;">Registrar</button>
            </div>
       </form>
    </div>

</template>

<script>
import InputForm from '@/common/InputForm.vue'
import { mapState } from 'vuex';

    export default{
        name: 'RegistrarInmuebleView',
        components:{
            InputForm,
        },
        data(){
            return{
                propietario:{nombre: "Id propietario", tipo:"Text", name:"propietario"},
                inputs :[
                    {nombre: "Id Inmueble", tipo:"Text", name:"idInmueble"},
                    {nombre: "Nombre inmueble", tipo:"Text", name:"nombre"},
                    {nombre: "Barrio", tipo:"Text", name:"barrio"},
                    {nombre: "Dirección", tipo:"Text", name:"direccion"},
                ]
            }
        },
        computed:{
            ...mapState(['cliente'])
        },
    }
</script>

<style>

    .input-container{
        width: 100%;
    }

    .router-button{
        color: yellow;
        padding: 7px;
        border: 2px solid yellow;
        text-decoration: none;
        border-radius: 4px;
        font-size: 10px;
        font-weight: bold;
    }

    .router-button:hover{
       color: #81BDDE;
       background-color: yellow;
       transition: 250ms;
    }

    .label-bold-17-start{
        font-size: 17px;
        align-self: flex-start;
        font-weight: bold;
    }

    #descripcion{
        font-size: 18px;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        outline-color: #2c3e50;
        color: #2c3e50;
        border-radius: 4px;
        border: 2px solid white;
    }

    .input-file{
        background-color: transparent;
        color: white;
        border: white 3px ;
        padding: 10px;
        margin-bottom: 10px;
    }

    option{
        background-color: #2c3e50;
        color: white;
    }

    option:hover{
        background-color: #81BDDE;
    }
    
</style>