<template>
<h2>Registrar Inmueble</h2>
<div class="flex-column-bgblue-pd30">
        
       <form class="flex-column" action="">

        <div class="flex-row-30gap">
            <InputForm ref="ownerId" v-if="cliente != null" :input="propietario" :datos="cliente.id"/>
            <InputForm ref="ownerId" v-else :input="propietario"/>
            <p class="label-bold-17-start">Ó</p>
            <router-link to="/RegistrarCliente" style="height: 20px; padding-top: px;" class="router-button">Registrar Cliente</router-link>
        </div>
        

            <div class="flex-row-30gap">
                <InputForm ref="address" :input="direccion"/>
                <select ref="neighborhood" name="barrios" id="barrio">
                    <option  v-for="barrio in barrios" :key="barrio" :value="barrio['id']">{{barrio['name']}}</option>
                </select>
                <select ref="type" name="tipos" id="tipos">
                    <option  v-for="tipo in tipos" :key="tipo" :value="tipo['id']">{{tipo['name']}}</option>
                </select>

            </div>
            <br>
            <div class="flex-column">
                <label for="descripcion" class="label-bold-17-start">Descripción</label>
                <textarea ref="observations" name="descripcion" id="descripcion" cols="40" rows="5" required></textarea>

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
                <button @click.prevent="registrarInmueble()" style="height: 38px;">Registrar</button>
            </div>
       </form>
    </div>

</template>

<script>
    import InputForm from '@/common/InputForm.vue'
    import api from '@/services/api';
    import { mapState } from 'vuex';
    import { useToast } from "vue-toastification";
    import "vue-toastification/dist/index.css";
    import { getToken } from '@/util/auth';

    export default{
        name: 'RegistrarInmuebleView',
        components:{
            InputForm,
        },
        data(){
            return{
                propietario:{nombre: "Id propietario", tipo:"Text", name:"propietario"},
                direccion: {nombre: "Dirección", tipo:"Text", name:"direccion"},
                token:"",
                barrios:[],
                tipos:[]
            }
        },
        mounted(){
            this.asignarToken()
            this.getBarrios()
            this.getTipos()
        },
        computed:{
            ...mapState(['cliente'])
        },
        methods:{
            async getBarrios(){
                const toast = useToast()
                const response = await api.get("/api/private/properties/neighborhoods", this.token)
                if(response.success){
                    this.barrios = response.data
                }else{
                    toast.error("No se encontraron barrios")
                }
            },
            async getTipos(){
                const toast = useToast()
                const response = await api.get("/api/private/properties/types", this.token)
                if(response.success){
                    this.tipos = response.data
                }else{
                    toast.error("No se encontraron barrios")
                }
            },
            asignarToken(){
                this.token = getToken();
            },

            async registrarInmueble(){
                const toast = useToast()
                const response = await api.post("/api/private/properties/save", this.actualizarDatos(), this.token)
                if(response.success){
                    toast.success("El inmueble se registro correctamente")
                }else{
                    toast.error("No se pudo registrar el inmueble")
                }
            },
            actualizarDatos(){
                const inmueble = {
                    "neighborhood-id": this.$refs.neighborhood.value,
                    "type-id":  this.$refs.type.value,
                    "owner-id":  this.$refs.ownerId.getInputValues(),
                    "address": this.$refs.address.getInputValues() ,
                    "observations":  this.$refs.observations.value
                }
                console.log(inmueble)
                return inmueble
            }
        }
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

    select{
        background-color: transparent;
        border: 2px solid yellow;
        color: white;
        border-radius: 4px;
    }

    select:disabled{
        border-color: white;
        transition: 350ms;
    }
    
    option{
        background-color: #2c3e50;
        color: white;
    }

    option:hover{
        background-color: #81BDDE;
    }
    
</style>