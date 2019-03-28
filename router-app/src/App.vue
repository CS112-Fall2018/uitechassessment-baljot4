<template>
  <div id="app">
    <router-link to="/HelloWorld">Home</router-link>
    <br />
     <router-link to="/CartList">Shopping Cart</router-link>
     <br />
     <router-link to="/AddToCart">Add To Shopping Cart</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
