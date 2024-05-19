<template>
    <div class="toolbar">

        <div class="sesion">
            <img src="@\assets\retratos\Designer.jpeg" class="persona">
            <p>{{nombre}}</p>
        </div>
            <router-link  v-for="route in routes"
                :key="route.name"
                :to="route.path"
                class="elemento-lista">
                {{ route.name }}
            </router-link>
            
    </div>
</template>

<script>

    export default{
        name: "SideBar",
        props: {
        nombre: String,
        },
        data() {
            return {
                pressedLink: null,
                routes: [
                    { name: 'Inmuebles', path: '/Inmuebles' },
                    { name: 'Clientes', path: '/Clientes' },
                    {name:'Documentos', path:'/Login'}
                ]
            };
        },
        
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
    transform: scale(1.1);
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
    transition: 400ms;
    transform: scale(1.1);
}
</style>