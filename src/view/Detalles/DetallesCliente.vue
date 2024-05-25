<template>
    
    <h2>Cliente: {{cliente.id}}</h2>
    <div class="flex-column-bgblue-pd30">
        <br>
       <form class="flex-row-30gap" action="">
            <InputForm :input="nombre" :datos="cliente.nombre" :estado="estado"/>
            <InputForm :input="celular" :datos="cliente.celular" :estado="estado"/>
            <InputForm :input="email" :datos="cliente.correo" :estado="estado"/>
            <button :disabled="guardar" style="height: 38px;">Guardar</button>
       </form>
       <br>
       <div>
        <Button @click="estado=!estado; guardar = !guardar" style="margin-right: 20px;">Editar</Button>
        <button class="eliminar">Eliminar</button>
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

<style >
.flex-column-bgblue-pd30{
    background-color:#81BDDE ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
}

.eliminar{
    margin-right: 20px;
    border-color:red ;
    color: red;
}

.eliminar:hover{
    background-color: red;
    
}

</style>