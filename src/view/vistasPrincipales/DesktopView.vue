<template>
    <div class="desktop-view">

        <SideBar nombre="Juana de arco" @titulo-enviado = "actualizarTitulo"/>
        <div class="contenido">
            <EncabezadoGeneral :titulo="titulo"/>
            <router-view @titulo-enviado="actualizarTitulo"/>
        </div>
    </div>
    
</template>

<script>
    import SideBar from "@/components/SideBar.vue";
    import EncabezadoGeneral from '@/components/EncabezadoGeneral.vue';

    export default {
        name: "DesktopView",
        components:{
            SideBar,
            EncabezadoGeneral
        },
        data (){
            return{
                titulo: 'Bienvenido'
            };
        },
        methods:{
            actualizarTitulo(titulo){
                this.titulo = titulo;
            }
        }
    }
    
</script>

<style>
    .contenido{
        display: flex;
        flex-direction: column;
        height: 850px;
        width: 1440px;
        background-color: whitesmoke;
        padding: 30px;
        overflow: scroll;

    }
    .desktop-view{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-height: 800px;
        max-width: 1920px;
        width: 100%;
        height: 100%;
    }

    .body-container{
        width: 100%;
        height: 100%;
    }
    #app{
        margin: 0px; ;
    }
   
</style>