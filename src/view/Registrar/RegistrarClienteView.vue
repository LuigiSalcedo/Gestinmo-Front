<template>
    <h2>Registrar Cliente</h2>
    <div class="form-container">
        
        <form action="" class="flex-column">
            <div class="flex-row-30gap">
                <InputForm ref="inputForm" v-for="input in inputs" :key="input" :input="input"/>
                <button @click.prevent="registrar" style="height: 38px;">Registrar</button>
            </div>
            <br>
            <div class="flex-row-30gap">
                <button @click.prevent="$router.go(-1)" >Volver</button>
                <button @click.prevent="irRegistrarInmueble">Registrar cliente e inmueble</button>
            </div>
        </form>

    </div>
    
</template>

<script>
import InputForm from "@/common/InputForm.vue";
import api from "@/services/api";
import { getToken } from "@/util/auth";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
export default{
    name:'RegistrarClienteView',
    components:{
        InputForm
    },
    methods:{
        datos(){
            const valoresInput = this.$refs.inputForm.map(child => child.getInputValues())
            const cliente = {
                id: valoresInput[0],
                name: valoresInput[1],
                phoneNumber: valoresInput[2],
                email: valoresInput[3]
            }
            return cliente
        },
        async irRegistrarInmueble() {
            const toast = useToast();
            const response = await api.post('/api/private/clients/save', this.datos(), getToken());
            
            if(response.success){
                toast.success("Cliente registrado correctamente")
                this.$store.commit('setCliente', this.datos()); 
                this.$router.push("/RegistrarInmueble");
            }else{
                toast.error("No se pudo registrar cliente")
            }
             
        },
        async registrar(){
            const toast = useToast();
            const response = await api.post('/api/private/clients/save', this.datos(), getToken());
            if(response.success){
                toast.success("Cliente registrado correctamente")
            }else{
                toast.error("No se pudo registrar cliente")
            }
        }
    },
    data(){
        return {
            inputs :[
                {nombre: "Identificación", tipo:"Text", name:"id"},
                {nombre: "Nombre", tipo:"Text", name:"nombre"},
                {nombre: "Celular", tipo:"Text", name:"celular"},
                {nombre: "Correo", tipo:"email", name:"email"},
            ]
        }
    }
}

</script>

<style>
    .form-container{
        display: flex;
        flex-direction: column;;
        background-color: #81BDDE;
        justify-content: left;
        align-items: flex-start;
        padding: 30px;
    }

    .flex-row-30gap{
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 30px;
    }
</style>