<template>
    <div class="form-container">
        <h2>Registrar</h2>
        <form action="" class="form-registrar-cliente">
            <InputForm id="Nombre" tipo="Text"/>
            <InputForm id="Identificación" tipo="Text"/>
            <InputForm id="Celular" tipo="number"/>
            <InputForm id="Correo" tipo="number"/>
            <button style="height: 40px; margin-top: 28px;">Registrar</button>
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
    mounted(){
            this.enviarTitulo()
        },
        methods:{
            enviarTitulo(){
                this.$emit('titulo-enviado',"Clientes");
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