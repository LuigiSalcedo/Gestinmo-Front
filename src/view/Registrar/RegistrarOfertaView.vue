<template>
    <h2>Registrar Oferta</h2>
    <div class="form-container">
        
        <form action="" class="flex-column">
            <div class="flex-row-30gap">
                <InputForm ref="inputForm" v-for="input in inputs" :key="input" :input="input"/>
                <select name="Estado" id="estado" :disabled="estado" required>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>
                <button style="height: 38px;">Registrar</button>
            </div>
            <br>
            <div class="flex-align-left">
                <button @click="RegistrarOferta">Registrar cliente e inmueble</button>
            </div>
        </form>

    </div>
    
</template>

<script>
import InputForm from '@/common/InputForm.vue';
export default{
    
    name:'RegistrarOfertaView',
    components:{
        InputForm
    },
    data(){
        return {
            inputs :[
                {nombre: "Id inmueble", tipo:"text", name:"precio"},
                {nombre: "Precio", tipo:"Number", name:"precio"},
                {nombre: "Captación", tipo:"Text", name:"captacion"},
            ],
            valoresInput: [],
            cliente: Object
        }
    },
    methods:{
        RegistrarOferta() {
                this.valoresInput = this.$refs.inputForm.map(child => child.getInputValues())
                this.cliente = {
                    "precio":this.valoresInput[0],
                    "captacion":this.valoresInput[1],
                }

        },

    }
}
</script>
