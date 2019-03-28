<template>
  <div class="CartList">
    <ul>
      <li v-for="msg in info" v-bind:key="msg.id">{{ msg.id }}. {{ msg.name }}: {{ msg.description }}=
      ${{ msg.price }} --- Quantity left: {{ msg.amount }}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'CartList',
  data () {
        return {
          info: null
        }
      },
      mounted () {
        axios
        .get('http://localhost:5555/list')
        .then(response => (this.info = response.data));
        /*axios
        .get('http://localhost:5555/list')
        .then(function(res){
          this.info = res.data;
          console.log(res.data);
        }.bind(this));*/
      }
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
