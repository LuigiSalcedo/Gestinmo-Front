<template>
    <div class="login-view">
        <div class="login-galeria">
            <img  src="@/assets/imagenes/imagen (0).jpg" class="imagen-galeria" alt="">
        </div>


        <div class="container-form">

            <LogoCasaVentas/>

            <form action="" class="form-inicio-sesion">
                <InputForm id="Usuario" tipo="Text"/>
                <InputForm id="Contraseña" tipo="Password"/>
                <button>Ingresar</button>
            </form>
        </div>
    </div>
    

</template>

<script >

import InputForm from '@/common/InputForm.vue'
import LogoCasaVentas from '@/common/LogoCasaVentas.vue';

export default{
    name: 'LoginView',
    components: {
        InputForm,
        LogoCasaVentas
    },
    
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
}

.form-inicio-sesion{
    background-color: #81BDDE;
    width: 95%;
}

</style>