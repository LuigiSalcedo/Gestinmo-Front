<template>

    <img @click="gotoLogin" src="@/assets/casaventas logo-01.png" height="150px" width="150px" alt="Logo inmobiliaria casaventas">

</template>

<script>

export default{
    name:'LogoCasaVentas',
    methods:{
        gotoLogin(){
            this.$router.push('/Login');
        }
    }
}

</script>