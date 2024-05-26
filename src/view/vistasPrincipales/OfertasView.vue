<template>
    <div  class="flex-column-bgblue-pd30">
        <label for="buscar" class="label-bold-17-start">Buscar</label>
        <br>

        <div class="flex-row-30gap">
            <input class="buscar" name="buscar" type="text">

            <fieldset>
                <legend>Tipo de busqueda</legend>
                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" value="Barrio" checked>
                    <label for="tipo" class="label-bold-10-start">Barrio</label>
                </div>
                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" value="id">
                    <label for="tipo" class="label-bold-10-start">Identificación</label>
                </div>
                <div class="flex-row-10gap">
                    <input type="radio" name="tipo" value="IdInmueble">
                    <label for="tipo" class="label-bold-10-start">Id Inmueble</label>
                </div>
            </fieldset>
            
        </div>
    </div>
    <div class="flex-p10-g20">
        <AgregarButton @click="limpiar" ruta="/RegistrarOferta" width="160px"/>
        <ventana-oferta v-for="oferta in ofertas" :key="oferta" :oferta="oferta"/>
    </div>
</template>
<script>
    import AgregarButton from '@/common/AgregarButton.vue';
    import VentanaOferta from '@/components/VentanaOferta.vue';

    export default {
        name:"InmuebleView",
        mounted(){
            this.enviarTitulo()
        },
        components:{
            AgregarButton,
            VentanaOferta
        },
        methods:{
            enviarTitulo(){
                this.$emit('titulo-enviado',"Ofertas");
            },
            limpiar(){
                const cliente = null;
                this.$store.commit('setCliente', cliente); 
            }
        },
        data(){
            return{
                ofertas :[
                    {id:'1',
                    inmueble: {id:"145-894" , barrio:"Las delicias", direccion:'cra 33 #59-77',
                    propietario:'Greison Rey Castilla Carmona', tipo:"vivienda", descripcion:"Hermosa vivienda de dos pisos, 5 habitaciones, 1 sala, 2 baños, sala de descanso",
                    src: require('@/assets/inmuebles/inmueble (0).webp') }, 
                    estado:true, 
                    fecha:"2024-05-24", 
                    precio:"300000000",
                    captacion:"Venta-Casa"},
                    {id:"2",inmueble: {id:"145-512", barrio:'Bocagrande', direccion:'cll50 #46-81',
                    propietario:'Marco Antonio Solis', tipo: "vivienda",
                    src: require('@/assets/inmuebles/inmueble (1).webp'),}, estado:false, fecha:"2024-05-24", precio:"250000000", captacion:"Venta-Casa"},
                    
                ]
            }
        }
    }
</script>
