<template>

<div class="detalles-cliente">
        <h2>Registrar Inmueble</h2>
       <form class="form-detalles-inmueble" action="">

        <div class="form-registrar-cliente">
            <InputForm v-if="cliente != null" :input="propietario" :datos="cliente.id"/>
            <InputForm v-else :input="propietario"/>
            <p class="inmueble-label">Ó</p>
            <router-link to="/RegistrarCliente" style="height: 20px; padding-top: px;" class="router-button">Registrar Cliente</router-link>
        </div>
        

            <div class="form-registrar-cliente">
                <InputForm ref="inputForm" v-for="input in inputs" :key="input" :input="input"/>
            </div>
            <div class="form-detalles-inmueble">
                <label for="descripcion" class="inmueble-label">Descripción</label>
                <textarea name="descripcion" id="descripcion" cols="40" rows="5" required></textarea>

            </div>
            <div class="form-registrar-cliente">
                <div class="detalles-cliente">
                    <label for="documentos" class="inmueble-label">Documentos</label>
                    <br>
                    <input type="file" name="documentos" required>
                </div>
                <div class="detalles-cliente">
                    <label for="imagenes" class="inmueble-label">Imagenes</label>
                    <br>
                    <input type="file" name="imagenes" required>
                </div>
                
            </div>
            <br>
            <button style="height: 38px;">Registrar</button>
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

    .vista-registrar-inmueble{
        display: flex;
    }

    .input-container{
        width: 100%;
    }

    .router-button{
        color: yellow;
        padding: 10px;
        border: 2px solid yellow;
        text-decoration: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .router-button:hover{
       color: #81BDDE;
       background-color: yellow;
       transition: 250ms;
    }

    .form-inmueble{
        display: flex;
        flex-direction: row;
        background-color: ;
    }

    .inmueble-label{
        font-size: 17px;
        align-self: flex-start;
        font-weight: bold;
    }

    #descripcion{
        margin-top: 10px;
        margin-bottom: 20px ;
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
    .preview-tarjeta{
        display: flex;
        flex-direction: column;
    }
</style>