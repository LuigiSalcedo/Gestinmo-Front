<template>

    <div class="vista-registrar-inmueble">
        <div class="Registrar-inmueble">
            <h2>Registrar Inmueble</h2>

            <form action="" class="form-inmueble">

                <label for="cliente" class="inmueble-label">Seleccione el cliente propietario: </label>

                <div class="seccion-cliente">
                    <select name="cliente" id="cliente" class="select-cliente" required>
                        <option disabled selected value="">Seleccione cliente</option>
                        <option v-for="cliente in clientes" :value="cliente.id" :key="cliente">{{ cliente.nombre }}</option>
                    </select>
                    <label>ó</label>
                    <router-link to="/RegistrarCliente" class="router-button">Registrar cliente</router-link>
                </div>
                
                <InputForm v-for="input in inputs" :key="input" :input="input"/>

                <label for="descripcion" class="inmueble-label">Descripción</label>
                <textarea name="descripcion" id="descripcion" cols="40" rows="5" required></textarea>

                <label for="documentos" class="inmueble-label">Documentos</label>
                <input name="documentos" class="input-file" type="file" required>

                <label for="imagenes" class="inmueble-label">Imagenes</label>
                <input name="imagenes" class="input-file" type="file" accept="image/*" multiple required>

                <button>Registrar</button>
            </form>

        </div>

        <div class="preview-tarjeta">
            <h2>Vista previa</h2>
            <p>{{ inmueble }} </p>
            <p>{{ direccion }}</p>
        </div>

    </div>

</template>

<script>
import InputForm from '@/common/InputForm.vue'

    export default{
        name: 'RegistrarInmuebleView',
        components:{
            InputForm,
        },
        data(){
            return{
                inputs :[
                {nombre: "Nombre del inmueble", tipo:"Text", modelo:"inmueble", name:"nombre"},
                {nombre: "Dirección", tipo:"Text", modelo: "direccion", name:"direccion"},
                ],
                clientes:[
                    {id: 0, nombre:'Greison Rey Castilla Carmona'},
                    {id: 1, nombre: 'Marco Antonio Solis'}
                ],
                inmueble: "",
                direccion:"",
            }
        }
    }
</script>

<style>

    .vista-registrar-inmueble{
        display: flex;
    }

    .select-cliente{
        color: white;
        padding: 10px;
        border: none;
        border-radius: 4px;
        outline: 2px solid white;
        background-color: transparent;
        transition: outline-color 500ms;
        width: 70%;
        margin-top: 20px;
        margin-bottom: 20px;

    }

    .seccion-cliente{
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }

    .router-button{
        color: yellow;
        padding: 5px;
        border: 2px solid yellow;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
    }

    .router-button:hover{
       color: #81BDDE;
       background-color: yellow;
       transition: 250ms;
    }

    .form-inmueble{
        display: flex;
        flex-direction: column;
    }

    .inmueble-label{
        font-size: 17px;
        align-self: flex-start;
        font-weight: bold;
    }

    .Registrar-inmueble{
        display: flex;
        flex-direction: column;;
        align-items: flex-start;
        background-color: #81BDDE;
        padding: 30px;
        width: 400px;
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
        padding: 30px;
    }
</style>