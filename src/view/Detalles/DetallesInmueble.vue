<template>
    <div class="flex-column-bgblue-pd30">
        <h2>Inmueble: {{inmueble.id}}</h2>
        <img width="200px" style="border-radius: 4px;" :src="inmueble.src" alt="">
        <br>
        <br>
       <form class="flex-column" action="">
            <div class="flex-row-30gap">
                <InputForm :input="nombre" :datos="inmueble.nombre" :estado="estado"/>
                <InputForm :input="barrio" :datos="inmueble.barrio" :estado="estado"/>
                <InputForm :input="direccion" :datos="inmueble.direccion" :estado="estado"/>
                <InputForm :input="tipo" :datos="inmueble.tipo" :estado="estado"/>
                <InputForm :input="propietario" :datos="inmueble.propietario" :estado="estado"/>
            </div>
            <br>
            <div class="flex-column">
                <label for="descripcion" class="label-bold-17-start">Descripción</label>
                <textarea name="descripcion" id="descripcion" :disabled="estado" :value="inmueble.descripcion" cols="40" rows="5" required></textarea>

            </div>
            <br>
            <div class="flex-align-left">
                <button :disabled="guardar">Guardar</button>
            </div>
            
       </form>
        <br>
       <div>
        <Button @click="estado=!estado; guardar = !guardar" style="margin-right: 20px;">Editar</Button>
        <button class="eliminar">Eliminar</button>
        <button @click="irCrearOferta">Crear oferta</button>
       </div>
    </div>
</template>

<script>
    import InputForm from "@/common/InputForm.vue";
    import { mapState } from 'vuex';

    export default{
        name:'DetallesCliente',
        components:{
            InputForm
        },
        data(){
            return{
                nombre: {nombre: "Nombre", tipo:"text", name:"nombre"},
                barrio: {nombre: "Barrio", tipo:"text", name:"vecindario"},
                direccion: {nombre: "Dirección", tipo:"text", name:"direccion"},
                tipo: {nombre: "Tipo", tipo:"text", name:"tipo"},
                propietario: {nombre: "Propietario", tipo:"text", name:"tipo"},
                estado:"false",
                guardar:"false"
            }
        },
        computed:{
            ...mapState(['inmueble'])
        },
        
    }
</script>

<style>
.flex-column{
    display: flex;
    flex-direction: column;
}

.flex-align-left{
    display: flex;
    justify-content: left;
}

</style>