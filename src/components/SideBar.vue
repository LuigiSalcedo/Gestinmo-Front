<template>
    <div class="toolbar">

        <div class="sesion">
            <img src="@\assets\simbolos\perfil-de-usuario.png" class="persona">
            <p>{{nombre}}</p>
        </div>
            <router-link  v-for="route in routes"
                :key="route.name"
                :to="route.path"
                @click="enviarTitulo(route.name)"
                class="elemento-lista">
                {{ route.name }}
            </router-link>
            <router-link  
                v-if="sesion()"
                to="/desktop"
                class="elemento-lista">
                Login
            </router-link>
            <router-link  
                v-else
                style="background-color: red;"
                to="/"
                @click=" cerrarSesion()"
                class="elemento-lista">
                Salir de la cuenta
            </router-link>
    </div>
</template>

<script>
import { getToken, removeToken } from '@/util/auth';


    export default{
        name: "SideBar",
        props: {
        nombre: String,
        },
        data() {
            return {
                routes: [
                    {name: 'Clientes', path: '/Clientes' },
                    {name: 'Inmuebles', path: '/Inmuebles' },
                ],
                login: {name: 'Login', path:'/Login'}
            };
        },
        methods:{
            enviarTitulo(titulo){
                this.$emit('titulo-enviado', titulo);
            },
            sesion(){
                return getToken()==null
            },
            cerrarSesion(){
                removeToken();
                localStorage.setItem("nombre", "Asesor");
                location.reload();
            }
        }
        
    }

</script>

<style>
.toolbar{
    display: flex;
    flex-direction: column;
    background-color: #81BDDE;
    width: 15%;
    padding: 20px;
    height: 870px;
}

.elemento-lista{
    text-decoration: none;
    width: 100%;
    color: white;
    padding: 5px;
    background-color: #28688a;
}

.elemento-lista:hover{
    background-color: yellow;
    color: #81BDDE;
    transition: 350ms;
    transform: scale(1.05);
    padding: 10px;
    margin: 3px;
}

.elemento-lista:hover::after {
    background-color:   yellow ;
    color: #81BDDE;
    transform: scale(1);
    transition: 350ms;
    padding: 5px;
}

ul{
    list-style: none;
    padding-left: 0px;
}
li{
    text-decoration-line: none;
    display: block;
}
.persona{
    width: 100px;
    border-radius: 80px;
    border: solid  yellow ;
}
.router-link-active {
    padding: 10px;
    margin: 3px;
    pointer-events: none;
    color: white;
    background-color: gray;
    transition: 350ms;
    transform: scale(1.05);
}
</style>