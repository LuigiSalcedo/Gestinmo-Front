<template>
    <div class="vista-inmueble">
        
        <AgregarButton ruta="/RegistrarInmueble" width="160px"/>
        <VentanaInmueble v-for="inmueble in inmuebles" :key="inmueble" :inmueble="inmueble"/>
        
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
            }
        },
        data(){
            return{
                inmuebles :[
                    {nombre: 'Casa Enea', direccion:'cra 33 #59-77',
                    cliente:'Greison Rey Castilla Carmona', 
                    src: require('@/assets/inmuebles/inmueble (0).webp') },
                    {nombre: 'Altos Pinos', direccion:'Bocagrande',
                    cliente:'Marco Antonio Solis', 
                    src: require('@/assets/inmuebles/inmueble (1).webp')},
                    {nombre: 'Casa Enea', direccion:'cra 33 #59-77',
                    cliente:'Greison Rey Castilla Carmona', 
                    src: require('@/assets/inmuebles/inmueble (0).webp') },
                    {nombre: 'Altos Pinos', direccion:'Bocagrande',
                    cliente:'Marco Antonio Solis', 
                    src: require('@/assets/inmuebles/inmueble (1).webp')},
                    {nombre: 'Casa Enea', direccion:'cra 33 #59-77',
                    cliente:'Greison Rey Castilla Carmona', 
                    src: require('@/assets/inmuebles/inmueble (0).webp') },
                    {nombre: 'Altos Pinos', direccion:'Bocagrande',
                    cliente:'Marco Antonio Solis', 
                    src: require('@/assets/inmuebles/inmueble (1).webp')},
                    {nombre: 'Casa Enea', direccion:'cra 33 #59-77',
                    cliente:'Greison Rey Castilla Carmona', 
                    src: require('@/assets/inmuebles/inmueble (0).webp') },
                    {nombre: 'Altos Pinos', direccion:'Bocagrande',
                    cliente:'Marco Antonio Solis', 
                    src: require('@/assets/inmuebles/inmueble (1).webp')},
                    {nombre: 'Casa Enea', direccion:'cra 33 #59-77',
                    cliente:'Greison Rey Castilla Carmona', 
                    src: require('@/assets/inmuebles/inmueble (0).webp') },
                    {nombre: 'Altos Pinos', direccion:'Bocagrande',
                    cliente:'Marco Antonio Solis', 
                    src: require('@/assets/inmuebles/inmueble (1).webp')},
                    {nombre: 'Casa Enea', direccion:'cra 33 #59-77',
                    cliente:'Greison Rey Castilla Carmona', 
                    src: require('@/assets/inmuebles/inmueble (0).webp') },
                    {nombre: 'Altos Pinos', direccion:'Bocagrande',
                    cliente:'Marco Antonio Solis', 
                    src: require('@/assets/inmuebles/inmueble (1).webp')},
                    {nombre: 'Casa Enea', direccion:'cra 33 #59-77',
                    cliente:'Greison Rey Castilla Carmona', 
                    src: require('@/assets/inmuebles/inmueble (0).webp') },
                    {nombre: 'Altos Pinos', direccion:'Bocagrande',
                    cliente:'Marco Antonio Solis', 
                    src: require('@/assets/inmuebles/inmueble (1).webp')},
                ]
            }
        }
    }
</script>

<style>
    .vista-inmueble{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        gap: 20px;
    }
</style>