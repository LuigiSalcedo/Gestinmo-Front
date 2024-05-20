<template>
    <RouterLink :to="ruta" class="agregar-div">
        <img src="@/assets/simbolos/agregar.png" :width="width" alt="">
    </RouterLink>
</template>

<script>
    export default{
        name: 'AgregarButton',
        props:{
            ruta:{
                type : String,
                required: true
            },
            width : String
        }
    }
</script>

<style>
.agregar-div{
        background-color:transparent ;
        display: flex;
        align-self: center;
        justify-self: center
    }

    .agregar-div:hover {
        transform: scale(1.1);
        transition: 350ms;
        filter:brightness(0) saturate(100%) invert(78%) sepia(10%) saturate(1559%) hue-rotate(167deg) brightness(90%) contrast(92%);
    }

</style>