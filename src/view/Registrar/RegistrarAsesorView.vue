<template>
    <div class="flex-column-bgblue-pd30">
        <h2>Registrar Asesor</h2>
        <div class="flex-row-30gap">
            <InputForm ref="inputForm" v-for="input in inputs" :key="input" :input="input"/>
            <button @click.prevent="registrar" style="height: 38px;">Registrar</button>
        </div>
        <br>
        <button @click.prevent="$router.go(-1)" >Volver</button>
    </div>
</template>

<script>
    import InputForm from '@/common/InputForm.vue'
    import api from '@/services/api'
    import { useToast } from "vue-toastification";
    import "vue-toastification/dist/index.css";


    export default{
        name:"RegistrarAsesor",
        components:{
            InputForm
        },
        methods:{
            async registrar(){
                const toast = useToast();
                const response = await api.post_whiout_token("/api/public/auth/register", this.datos())
                if(response.success){
                    toast.success("Se ha registrado el Asesor correctamente")
                }else{
                    toast.error("No se pudo registrar el asesor")
                }
            },
            datos(){
                const valoresInput = this.$refs.inputForm.map(child => child.getInputValues())
                const asesor = {
                    id: valoresInput[0],
                    name: valoresInput[1],
                    password: valoresInput[2],
                    login: valoresInput[3],
                    masterPassword: valoresInput[4]
                }
                return asesor
            }
        },
        data(){
            return{
                inputs :[
                    {nombre: "Identificación", tipo:"Text", name:"id"},
                    {nombre: "Nombre", tipo:"Text", name:"nombre"},
                    {nombre: "Contraseña", tipo:"Password", name:"celular"},
                    {nombre: "Email", tipo:"text", name:"email"},
                    {nombre: "Contraseña maestra", tipo:"Password", name:"contraseña"},
                ]
            }
        }
    }

</script>