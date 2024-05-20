<template>
    <div class="InmuebleView">
        <h1>Esta es la pagina de los inmueble</h1>
        
    </div>

</template>

<script>
    export default {
        name:"InmuebleView",
        mounted(){
            this.enviarTitulo()
        },
        methods:{
            enviarTitulo(){
                this.$emit('titulo-enviado',"Inmuebles");
            }
        }
    }

</script>