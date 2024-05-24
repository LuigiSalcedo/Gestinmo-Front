<template>
   <DesktopView/>
  
</template>

<script>
import DesktopView from './view/vistasPrincipales/DesktopView.vue';
//import LoginView from './view/LoginView.vue';
export default {
  name: 'App',
  components: {
    DesktopView,
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
  display: flex;
  align-items: center;
  justify-content: center;
 
}

button{
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    border: yellow solid 3px;
    color: yellow;
    background-color:transparent;
    font-weight: bold;
}

button:hover{
    background-color: yellow;
    color: #81BDDE;
    transition: 350ms;
}

button:disabled{
  border-color: white;
  color: white;
  background-color: transparent;
}

body{
    display: flex;
    align-items: center;
    justify-content: center;
}



</style>
