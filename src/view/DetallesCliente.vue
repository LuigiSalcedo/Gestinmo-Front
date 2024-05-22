<template>
    <div class="detalles-cliente">
       <form action="">
        <InputForm v-for="input in inputs" :key="input" :input="input"/>
       </form>
    </div>
    <p>{{ cliente.nombre }}</p>
</template>

<script>
    import InputForm from "@/common/InputForm.vue";
    import { mapState } from 'vuex';

    export default{
        name:'DetallesCliente',
        components:{
            InputForm
        },
        computed:{
            ...mapState(['cliente'])
            
        }
        
    }
</script>