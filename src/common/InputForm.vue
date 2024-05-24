<template>
  <div class="input-container">
    <input
      :id= "input.name"
      class="input-container-input"
      :name="input.name"
      :type= "input.tipo"
      :disabled="estado"
      @input="$emit('update:valor', $event.target.value)"
      :value="valor"
      required
    />
    <label
      :for="input.name"
      class="input-container-label"
    >{{input.nombre }}</label>

  </div>

</template>

<script>

    export default {
    name: 'InputForm',
      props: {
          input:{
            nombre: String,
            tipo: String,
            name: String,
          },
          estado: Boolean,
          datos: String,
      },
      data(){
        return{
          valor:this.datos
        } 
      },
      methods:{
        getInputValues() {
            return this.valor;
        },
      },
      watch:{
        datos(newVal) {
          this.valor = newVal.value;
        }
      }
    }

</script>

<style>

    .input-container {
        position: relative;
        margin-bottom: 20px;
    }

    .input-container-input {
        color: white;
        padding: 10px;
        border: none;
        border-radius: 4px;
        outline: 2px solid white;
        background-color: transparent;
        transition: outline-color 500ms;
        width: 95%;
    }

    .input-container-input:is(:focus, :valid) {
        outline-color: yellow;
    }

    .input-container-label {
        position: absolute;
        top: 0;
        left: 0;
        translate: 10px 8px;
        color: white;
        transition: translate 500ms, scale 500ms;
    }

    .input-container-input:focus + .input-container-label,
    .input-container-input:valid + .input-container-label {
        padding-inline: 10px;
        translate: 0px -14px;
        scale: 0.8;
        background-color: #81BDDE;
        color: yellow;
        font-size: 20px;
    }
    .input-container-input:focus + .input-container-label,
    .input-container-input:valid + .input-container-label,
    .input-container-input:disabled + .input-container-label{
        padding-inline: 10px;
        translate: 0px -14px;
        scale: 0.8;
        background-color: #81BDDE;
        color: white;
        font-size: 20px;
    }

</style>