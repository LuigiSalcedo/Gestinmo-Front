<template>

    <img @click="gotoLogin" src="@/assets/casaventas logo-01.png" class="logo-casaventas" :height="tamaño" :width="tamaño" alt="Logo inmobiliaria casaventas">

</template>

<script>

export default{
    name:'LogoCasaVentas',
    props:{
        tamaño: String,
    },
    methods:{
        gotoLogin(){
            this.$router.push('/Login');
        }
    }
}

</script>

<style>

    .logo-casaventas:hover{
        transform: scale(1.1);
        transition: 350ms;
    }
</style>