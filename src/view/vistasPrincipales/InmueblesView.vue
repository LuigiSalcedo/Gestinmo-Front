<template>
    <div class="flex-p10-g20">
        
        <AgregarButton @click="limpiar" ruta="/RegistrarInmueble" width="160px"/>
        <VentanaInmueble v-for="inmueble in inmuebles" :key="inmueble" :inmueble="inmueble" />
        
    </div>

</template>

<script>
    import VentanaInmueble from '@/components/VentanaInmueble.vue';
    import AgregarButton from '@/common/AgregarButton.vue';

    export default {
        name:"InmuebleView",
        mounted(){
            this.enviarTitulo()
        },
        components:{
            VentanaInmueble,
            AgregarButton
        },
        methods:{
            enviarTitulo(){
                this.$emit('titulo-enviado',"Inmuebles");
            },
            limpiar(){
                const cliente = null;
                this.$store.commit('setCliente', cliente); 
            }
        },
        data(){
            return{
                inmuebles :[
                    {id:"145-894" , barrio:"Las delicias", direccion:'cra 33 #59-77',
                    propietario:'Greison Rey Castilla Carmona', tipo:"vivienda", descripcion:"Hermosa vivienda de dos pisos, 5 habitaciones, 1 sala, 2 baños, sala de descanso",
                    src: require('@/assets/inmuebles/inmueble (0).webp') },
                    {id:"145-512", barrio:'Bocagrande', direccion:'cll50 #46-81',
                    propietario:'Marco Antonio Solis', tipo: "vivienda",
                    src: require('@/assets/inmuebles/inmueble (1).webp'),},
                    
                ]
            }
        }
    }
</script>
