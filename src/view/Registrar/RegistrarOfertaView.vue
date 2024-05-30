<template>
    <h2>Registrar Oferta</h2>
    <div class="form-container">
        
        <form action="" class="flex-column">
            <div class="flex-row-30gap">
                <InputForm ref="propertyId" v-if="inmueble!=null" :datos="inmueble['id']" :input="idInmueble"/>
                <InputForm ref="propertyId" v-else :input="idInmueble"/>

                <InputForm ref="price" :input="precio"/>

                <select ref="catchmentType" name="tipos" id="tipos">
                    <option  v-for="captacion in captaciones" :key="captacion" :value="captacion['id']">{{captacion['name']}}</option>
                </select>
                <button @click.prevent=" registrarOferta()" style="height: 38px;">Registrar</button>
            </div>
            <br>
            <div class="flex-row-30gap">
                <button @click="$router.go(-1)" >Volver</button>
            </div>
        </form>

    </div>
    
</template>

<script>
import InputForm from '@/common/InputForm.vue';
import api from '@/services/api';
import { getToken } from '@/util/auth';
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { mapState } from 'vuex';
    export default{
        
        name:'RegistrarOfertaView',
        components:{
            InputForm
        },
        data(){
            return {
                idInmueble: {nombre: "Id inmueble", tipo:"text", name:"precio"},
                precio: {nombre: "Precio", tipo:"Number", name:"precio"},
                captaciones:[],
                token:""
            }
        },
        methods:{
            datosOferta() {
                const oferta = {
                    "property-id": this.$refs.propertyId.getInputValues(),
                    "price": this.$refs.price.getInputValues(),
                    "catchment-type":this.$refs.catchmentType.value
                }
                return oferta;
            },
            async getCaptacion(){
                const response = await api.get("/api/private/offers/types", getToken())
                const toast = useToast()
                if(response.success){
                    this.captaciones = response.data;
                }else{
                    toast.error("No se encontraron tipos de captaciones");
                }
            },
            async registrarOferta(){
                const toast = useToast()
                console.log(this.datosOferta())
                const response = await api.post("/api/private/offers/save", this.datosOferta(), getToken())
                if(response.success){
                    toast.success("Se registro la oferta correctamente")
                }else{
                    toast.error("No se pudo registrar la oferta")
                }
            }
        },
        mounted(){
            this.getCaptacion()
        },
        computed:{
            ...mapState(['inmueble'])
        }
    }
</script>
