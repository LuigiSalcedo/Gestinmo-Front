<template>
    <div v-if="this.inmueble != null">
        <h2>Inmueble: {{ inmueble['id']}}</h2>
        <div class="flex-column-bgblue-pd30">
            <img width="200px" style="border-radius: 4px;" :src="inmueble.src" alt="">
            <br>
            <br>
        <form class="flex-column" action="">
                <div class="flex-row-30gap">
                    <InputForm :input="barrio" :datos="inmueble['neighborhood']['name']" estado="false"/>
                    <InputForm  :input="direccion" :datos="inmueble['address']" estado="false"/>
                    
                    <select ref="type" name="tipos" id="tipos" :disabled="estado">
                        <option :value="inmueble['type']['id']">{{ inmueble['type']['name'] }}</option>
                        <option  v-for="tipo in tipos" :key="tipo" :value="tipo['id']" >{{tipo['name']}}</option>
                    </select>

                    <InputForm  :input="propietario" :datos="inmueble['clientOwner']['id']" estado="false"/>
                </div>
                <br>
                <div class="flex-column">
                    <label for="descripcion" class="label-bold-17-start">Descripción</label>
                    <textarea ref="observations" name="descripcion" id="descripcion" :disabled="estado" :value="inmueble['observations']" cols="40" rows="5" required></textarea>

                </div>
                <br>
                <div class="flex-align-left">
                    <button @click.prevent="guardarInmueble" :disabled="guardar">Guardar</button>
                </div>
                
        </form>
            <br>
        <div>
            <Button @click="estado=!estado; guardar = !guardar" style="margin-right: 20px;">Editar</Button>
            <button @click="eliminar()" class="eliminar">Eliminar</button>
            <button @click="irCrearOferta()">Crear oferta</button>
        </div>
        </div>
        <h3>Ofertas</h3>
        <ofertasView :propertyId="inmueble['id']" />
        <h3>Documentos</h3>
        <DetallesDocumentos :inmueble="inmueble"/>
    </div>
</template>

<script>
    import InputForm from "@/common/InputForm.vue";
    import { mapState } from 'vuex';
    import api from "@/services/api";
    import { useToast } from "vue-toastification";
    import "vue-toastification/dist/index.css";
    import { getToken } from "@/util/auth";
    import OfertasView from "../vistasPrincipales/OfertasView.vue";
    import DetallesDocumentos from "./DetallesDocumentos.vue";

    export default{
        name:'DetallesCliente',
        components:{
            InputForm,
            OfertasView,
            DetallesDocumentos
        },
        data(){
            return{
                nombre: {nombre: "Nombre", tipo:"text", name:"nombre"},
                barrio: {nombre: "Barrio", tipo:"text", name:"vecindario"},
                direccion: {nombre: "Dirección", tipo:"text", name:"direccion"},
                tipo: {nombre: "Tipo", tipo:"text", name:"tipo"},
                propietario: {nombre: "Propietario", tipo:"text", name:"tipo"},
                estado:"false",
                guardar:"false",
                tipos:[],
                offers:[]
            }
        },
        methods:{
            irCrearOferta(){
                this.$store.commit('setInmueble', this.inmueble); 
                this.$router.push("/Registraroferta"); 
            },
            asignarToken(){
                this.token = getToken()
            },
            async getTipos(){
                const toast = useToast()
                const response = await api.get("/api/private/properties/types", this.token)
                if(response.success){
                    this.tipos = response.data
                }else{
                    toast.error("No se encontraron tipos")
                }
            },
            async guardarInmueble(){
                const toast = useToast()
                const response = await api.put("/api/private/properties/update/"+this.inmueble['id'],this.actualizarDatos() ,this.token)

                if(response.success){
                    const datos = this.actualizarDatos();
                    console.log(datos);
                    toast.success("Se actualizó la información del inmueble :"+this.inmueble['id'])
                    this.inmueble["type-id"] = datos["type-id"];
                    this.inmueble['type-id'] = datos['type-id']
                    this.$store.commit('setInmueble', this.inmueble);
                }else{
                    toast.error("No se pudo Actualizar el inmueble")
                }
            },
            actualizarDatos(){
                const inmueble = {
                    "neighborhood-id": this.inmueble['neighborhood']['id'],
                    "type-id":  this.$refs.type.value,
                    "address": this.inmueble['address'] ,
                    "observations":  this.$refs.observations.value
                }
                console.log(inmueble)
                return inmueble
            },
            async eliminar(){
                console.log(this.inmueble)
                const toast = useToast()
                const response = await api.delete("/api/private/properties/delete/"+this.inmueble['id'], this.token)
                if(response.success){
                    
                    toast.success("Se elimino correctamente el inmueble: "+ this.inmueble['id'])
                    this.$store.commit('setInmueble', null); 
                    this.$router.push("/Inmuebles"); 
                }else{
                    toast.error("No se pudo eliminar inmueble")
                }
            },
            async getOffers(){
                const toast = useToast()
                const response = await api.get("/api/private/offers/search/property/"+this.propertyId, this.token)
                if(response.success){
                    this.offers = response.data
                }else{
                    toast.error("No se encontraron ofertas asociadas al inmueble")
                }
            }
        },
        mounted(){
            this.asignarToken()
            this.getTipos()
        },
        computed:{
            ...mapState(['inmueble'])
        },
        
    }
</script>

<style>
.flex-column{
    display: flex;
    flex-direction: column;
}

.flex-align-left{
    display: flex;
    justify-content: left;
}

</style>