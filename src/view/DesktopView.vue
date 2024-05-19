<template>
    <div class="desktop-view">

        <SideBar nombre="Juana de arco"/>
        <div class="contenido">
            <router-view to="/Inmuebles"/>
        </div>
    </div>
    
</template>

<script>
    import SideBar from "@/components/SideBar.vue";

    export default {
        name: "DesktopView",
        components:{
            SideBar
        }
    }
    
</script>

<style>
    .contenido{
        display: flex;
        height: 850px;
        width: 1440px;
        background-color: whitesmoke;
        padding: 30px
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