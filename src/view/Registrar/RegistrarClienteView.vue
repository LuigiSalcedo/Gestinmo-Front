<template>
    <h2>Registrar Cliente</h2>
    <div class="form-container">
        
        <form action="" class="flex-column">
            <div class="flex-row-30gap">
                <InputForm ref="inputForm" v-for="input in inputs" :key="input" :input="input"/>
                <button @click.prevent="Registrar" style="height: 38px;">Registrar</button>
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
        actualizarValores(){
            this.valoresInput = this.$refs.inputForm.map(child => child.getInputValues())
            this.cliente = {
                    id:this.valoresInput[0],
                    name:this.valoresInput[1],
                    phoneNumber:this.valoresInput[2],
                    email:this.valoresInput[3]
                }
        },
        async irRegistrarInmueble() {
            const toast = useToast();
            this.actualizarValores();

            const response = await api.post('/api/private/clients/save', this.cliente, getToken());
            
                
            if(response.success){
                toast.success("Cliente registrado correctamente")
                this.$store.commit('setCliente', this.cliente); 
                this.$router.push("/RegistrarInmueble");
            }else{
                toast.error("No se pudo registrar cliente")
            }
             
        },
        async Registrar(){
            const toast = useToast();
            this.actualizarValores();
            const response = await api.post('/api/private/clients/save', this.cliente, getToken());
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
            ],
            valoresInput: [],
            cliente: Object,
            token:""
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