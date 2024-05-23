<template>
    <div class="detalles-cliente">
        <h2>Cliente id: {{cliente.id}}</h2>
       <form class="form-registrar-cliente" action="">
            <InputForm :input="id" :datos="cliente.id" estado="falso"/>
            <InputForm :input="nombre" :datos="cliente.nombre" :estado="estado"/>
            <InputForm :input="celular" :datos="cliente.celular" :estado="estado"/>
            <InputForm :input="email" :datos="cliente.correo" :estado="estado"/>
            <button :disabled="guardar" style="height: 38px;">Guardar</button>
       </form>
       <div>
        <Button @click="estado=!estado; guardar = !guardar" style="margin-right: 20px;">Editar</Button>
        <button @click="irRegistrarInmueble">Registrar inmueble</button>
       </div>
       

    </div>
</template>

<script>
    import InputForm from "@/common/InputForm.vue";
    import { mapState } from 'vuex';

    export default{
        name:'DetallesCliente',
        components:{
            InputForm
        },
        data(){
            return{
                nombre: {nombre: "Nombre", tipo:"Text", name:"nombre"},
                id: {nombre: "Identificación", tipo:"Text", name:"id"},
                celular: {nombre: "Celular", tipo:"Number", name:"celular"},
                email: {nombre: "Correo", tipo:"email", name:"email"},
                estado:"false",
                guardar:"false"
            }
        },
        computed:{
            ...mapState(['cliente'])
        },
        methods:{
            irRegistrarInmueble(){
                this.$store.commit('setCliente', this.cliente); 
                this.$router.push("/RegistrarInmueble"); 
            }
        }
    }
</script>

<style scope>
.detalles-cliente{
    background-color:#81BDDE ;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px;
}

</style>