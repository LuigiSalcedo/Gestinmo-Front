<template>
    <div class="form-container">
        <h2>Registrar Cliente</h2>
        <form action="" class="form-registrar-cliente">
            <InputForm ref="inputForm" v-for="input in inputs" :key="input" :input="input"/>

            <br>
            <button style="height: 38px;">Registrar</button>

            <button @click="irRegistrarInmueble">Registrar y registrar inmueble</button>
        </form>


        <router-link to="/RegistrarInmueble" class="router-button">Ir a registrar inmueble</router-link>
    </div>
    
</template>

<script>
import InputForm from "@/common/InputForm.vue";

export default{
    name:'RegistrarClienteView',
    components:{
        InputForm
    },
    mounted(){
        this.enviarTitulo()
    },
    methods:{
        enviarTitulo(){
            this.$emit('titulo-enviado',"Clientes");
        },
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
            cliente: {nombre:String, id:String, celular:String, email:String}
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

    .form-registrar-cliente{
        display: flex;
        gap: 30px;
    }
</style>