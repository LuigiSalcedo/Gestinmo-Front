<template>
    
    <h2>Cliente: {{cliente['id']}}</h2>
    <div class="flex-column-bgblue-pd30">
        <br>
       <form class="flex-row-30gap" action="">
            <InputForm ref="nombre" :input="nombre" :datos="cliente['name']" :estado="estado"/>
            <InputForm ref="celular" :input="celular" :datos="cliente['phoneNumber']" :estado="estado"/>
            <InputForm ref="email" :input="email" :datos="cliente['email']" :estado="estado"/>
            <button @click.prevent="guardarDatos()" :disabled="guardar" style="height: 38px;">Guardar</button>
       </form>
       <br>
       <div>
        <Button @click="estado=!estado; guardar = !guardar" style="margin-right: 20px;">Editar</Button>
        <button @click="eliminar" class="eliminar">Eliminar</button>
        <button @click="irRegistrarInmueble">Registrar inmueble</button>
       </div>
       

    </div>
</template>

<script>
    import InputForm from "@/common/InputForm.vue";
    import api from "@/services/api";
    import { mapState } from 'vuex';
    import { useToast } from "vue-toastification";
    import "vue-toastification/dist/index.css";
    import { getToken } from "@/util/auth";

    export default{
        name:'DetallesCliente',
        components:{
            InputForm
        },
        data(){
            return{
                nombre: {nombre: "Nombre", tipo:"Text", name:"nombre"},
                id: {nombre: "Identificación", tipo:"Text", name:"id"},
                celular: {nombre: "Celular", tipo:"Text", name:"celular"},
                email: {nombre: "Correo", tipo:"email", name:"email"},
                estado:"false",
                guardar:"false",
                token:"",
            }
        },
        mounted(){
            this.asignarToken()
        },
        computed:{
            ...mapState(['cliente'])
        },
        methods:{
            irRegistrarInmueble(){
                this.$store.commit('setCliente', this.cliente); 
                this.$router.push("/RegistrarInmueble"); 
            },
            async eliminar(){
                console.log(this.cliente["id"])
                const response = await api.delete("/api/private/clients/delete/"+this.cliente['id'], this.token)
                const toast = useToast();

                if(response.success){
                    toast.success("El Cliente Ha sido eliminado")
                    this.$router.push("/Clientes")
                }else{
                    toast.error("El Cliente no ha sido eliminado")
                }
            },
            asignarToken(){
                this.token = getToken();
            },
            async guardarDatos(){

                console.log(this.actualizarDatos)
                const response = await api.put("/api/private/clients/update/"+this.cliente['id'], this.actualizarDatos(), this.token)
                const toast = useToast();

                if(response.success){
                    toast.success("Los datos del cliente " + this.cliente['id'] + " han sido actualizado")
                }else{
                    toast.error("No se pudieron actualizar datos")
                }
            },
            actualizarDatos(){
                const clienteN = {
                    "name": this.$refs.nombre.getInputValues(),
                    "phoneNumber": this.$refs.celular.getInputValues(),
                    "email": this.$refs.email.getInputValues()
                }
                return clienteN
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