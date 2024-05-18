<template>
  <div class="body-container">
    <LoginView/>
  </div>
</template>

<script>
import LoginView from '@/view/LoginView.vue'

export default {
  name: 'App',
  components: {
    LoginView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button{
    width: 100px;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    border: yellow solid 3px;
    color: yellow;
    background-color:transparent;
}

button:hover{
    background-color: yellow;
    color: #81BDDE;
    transition: 350ms;
}

body{
    display: flex;
    align-items: center;
    justify-content: center;
}

.body-container{
    display: flex;
    max-width: 1600px;
    max-height: 900px;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
}

</style>
