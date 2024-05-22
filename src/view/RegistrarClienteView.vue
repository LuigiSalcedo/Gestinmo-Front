<template>
    <div class="form-container">
        <h2>Registrar Cliente</h2>
        <form action="" class="form-registrar-cliente">
            <InputForm v-for="input in inputs" :key="input" :input="input"/>

            <button style="height: 38px;">Registrar</button>
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
        }
    },
    data(){
        return {
            inputs :[
                {nombre: "Nombre", tipo:"Text", name:"nombre"},
                {nombre: "Identificación", tipo:"Number", name:"id"},
                {nombre: "Celular", tipo:"Number", name:"celular"},
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

    .form-registrar-cliente{
        display: flex;
        gap: 30px;
    }
</style>