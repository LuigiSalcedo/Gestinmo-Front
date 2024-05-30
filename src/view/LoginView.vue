<template>
    <div class="body-container">
        <div class="login-view">
        <div class="login-galeria">
            <img  :src="rutas[indice]" class="imagen-galeria" alt="">
        </div>


        <div class="container-form">

            <LogoCasaVentas tamaño="150px"/>

            <form action="" class="form-inicio-sesion">
                <InputForm ref="user" :input="usuario"/>
                <br>
                <br>
                <InputForm ref="pass" :input="contraseña"/>
                <br>
                <button @click.prevent="iniciarSesion">Ingresar</button>
                <br>
                <br>
                <router-link to="/RegistrarAsesor">Registrar Asesor</router-link>
            </form>
        </div>
    </div>

    </div>

</template>

<script >

import InputForm from '@/common/InputForm.vue'
import LogoCasaVentas from '@/common/LogoCasaVentas.vue';
import api from '@/services/api';
import { getToken, setToken } from '@/util/auth';
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default{
    name: 'LoginView',
    components: {
        InputForm,
        LogoCasaVentas
    },
    data(){
        return {
            indice: 0,
            rutas:[
                require("@/assets/imagenes/imagen (0).jpg"),
                require("@/assets/imagenes/imagen (1).jpg"),
                require("@/assets/imagenes/imagen (2).jpg"),
                require("@/assets/imagenes/imagen (3).jpg")
            ],
            intervalId: null,
            usuario: {nombre: "Usuario", tipo:"Text", name:"usuario"},
            contraseña: {nombre: "Contraseña", tipo:"password", name:"password"},
            user:{
                login:"",
                password: ""
            }
        };
    },
    computed: {
        imagenActual() {
        return this.rutas[this.indice];
        }
    },
    mounted(){
        this.intervalId = setInterval(this.cambiarimg, 3000);
        this.validarSesion()
        this.enviarTitulo()
    },
    beforeUnmount(){
        clearInterval(this.intervalId)
    },
    methods:{
        cambiarimg(){
            this.indice = (this.indice + 1) % this.rutas.length;
        },
        datos(){
            const user = {
                    'login': this.$refs.user.getInputValues(),
                    'password':this.$refs.pass.getInputValues(),
                }
            return user;
        },
        enviarTitulo(){
                this.$emit('titulo-enviado',"Login");
            },
        async iniciarSesion(){
            const toast = useToast();
            const response = await api.login("/api/public/auth/login", this.datos())
            
                if(response.success){
                    console.log(response.data["token"])
                    setToken(response.data["token"]);
                    localStorage.setItem("nombre", response.data["name"]);
                    location.reload()
                }else{
                    toast.error("Usuario desconocido")
                }
                
        },
        validarSesion(){
            if(getToken != null){
                this.$router.push("/Clientes");
            }
        }
    }
    
}

</script>

<style>
.container-form{
    background-color: #81BDDE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
    width: 30%;
    padding-top: 120px;
    padding-bottom: 120px;
    padding-left: 30px;
    padding-right: 30px;

    max-height: 900px;
}


.imagen-galeria{
    width: 100%;
}

.login-view{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: 900px;
    max-width: 1440px;
}

.form-inicio-sesion{
    background-color: #81BDDE;
    width: 95%;
}

.body-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
}

</style>