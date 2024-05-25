<template>
    
    <div @click="irCliente" class="cliente-ventana">
        <img src="@/assets/simbolos/perfil-de-usuario.png" class="foto" width="150px">
        <div class="cliente-descripcion">
            <p>
                {{ clienteD.nombre }}
            </p>
            <p>
                {{ clienteD.id }}
            </p>
        </div>
   </div>


</template>

<script>
    export default{
        name: 'VentanaCliente',
        props:{
            clienteD:{
                nombre: String,
                id: String,
                correo: String,
                celular: String
            }
        },
        methods: {
            irCliente() {
                this.$store.commit('setCliente', this.clienteD); 
                this.$router.push(`/Clientes/${this.clienteD.id}`); 
            }
        }
    }
    
</script>

<style>

    .cliente-ventana{
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 140px;
        color: #2c3e50;
    }

    .cliente-descripcion{
        background-color: white;
        color: inherit;
    }

    .cliente-ventana:hover{
        transform: scale(1.1);
        color: #81BDDE;
        transition: 350ms;
    }

    
</style>