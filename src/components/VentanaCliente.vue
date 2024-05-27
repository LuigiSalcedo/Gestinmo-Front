<template>
    
    <div @click="irCliente" class="cliente-ventana">
        <img src="@/assets/simbolos/perfil-de-usuario.png" class="foto" width="140px">
        <div class="cliente-descripcion">
            <p class="text-12px">
                {{ clienteD['id'] }}
            </p>
            <p class="text-12px">
                {{ clienteD['name']}}
            </p>
            <p class="text-12px">
                {{ clienteD['phoneNumber'] }}
            </p>
            <p class="text-12px">
                {{ clienteD['email'] }}
            </p>
        </div>
   </div>


</template>

<script>
    export default{
        name: 'VentanaCliente',
        props:{
            clienteD:[]
        },
        methods: {
            irCliente() {
                this.$store.commit('setCliente', this.clienteD); 
                this.$router.push(`/Clientes/${this.clienteD['id']}`); 
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
        width: 100%;
    }

    .cliente-ventana:hover{
        transform: scale(1.1);
        color: #81BDDE;
        transition: 350ms;
    }

    .text-12px{
        font-size: 12px;
        word-break:break-all;
    }
    
</style>