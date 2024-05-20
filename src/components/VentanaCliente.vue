<template>
    
    <div class="cliente-ventana">

        <img src="@/assets/simbolos/perfil-de-usuario.png" class="foto" width="150px">
        <div class="cliente-descripcion">
            <p>
                {{ nombre }}
            </p>
            <p>
                {{ id }}
            </p>
        </div>
    </div>

</template>

<script>
    export default{
        name: 'VentanaCliente',
        props:{
            nombre: String,
            id: String
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
    }

    .cliente-descripcion{
        background-color: white;
        color: #2c3e50;
    }

    .cliente-ventana:hover{
        transform: scale(1.1);
        transition: 350ms;
    }

</style>