<template>
  <div class="input-container">
    <input
      :id= "id"
      class="input-container-input"
      :type= "tipo"
      required
    />
    <label
      :for="id"
      class="input-container-label"
    >{{ id }}</label>
  </div>

</template>

<script>

    export default {
    name: 'InputForm',
    props: {
        id: String,
        tipo: String
    }
    }

</script>

<style>

    .input-container {
        position: relative;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .input-container-input {
        color: white;
        padding: 10px;
        border: none;
        border-radius: 4px;
        outline: 2px solid white;
        background-color: transparent;
        transition: outline-color 500ms;
        width: 100%;
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

</style>