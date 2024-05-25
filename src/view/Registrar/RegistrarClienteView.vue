<template>
    <h2>Registrar Cliente</h2>
    <div class="form-container">
        
        <form action="" class="flex-column">
            <div class="flex-row-30gap">
                <InputForm ref="inputForm" v-for="input in inputs" :key="input" :input="input"/>
                <button style="height: 38px;">Registrar</button>
            </div>
            <br>
            <div class="flex-align-left">
                <button @click="irRegistrarInmueble">Registrar cliente e inmueble</button>
            </div>
        </form>

    </div>
    
</template>

<script>
import InputForm from "@/common/InputForm.vue";

export default{
    name:'RegistrarClienteView',
    components:{
        InputForm
    },
    methods:{
        irRegistrarInmueble() {
                this.valoresInput = this.$refs.inputForm.map(child => child.getInputValues())
                this.cliente = {
                    "nombre":this.valoresInput[0],
                    "id":this.valoresInput[1],
                    "celular":this.valoresInput[2],
                    "email":this.valoresInput[3]
                }

                this.$store.commit('setCliente', this.cliente); 
                this.$router.push("/RegistrarInmueble"); 
        },

    },
    data(){
        return {
            inputs :[
                {nombre: "Nombre", tipo:"Text", name:"nombre"},
                {nombre: "Identificación", tipo:"Text", name:"id"},
                {nombre: "Celular", tipo:"Number", name:"celular"},
                {nombre: "Correo", tipo:"email", name:"email"},
            ],
            valoresInput: [],
            cliente: Object
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
        width: 100%;
        gap: 30px;
    }
</style>