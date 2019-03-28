<template>
  <div class="AddToCart">
    <ul>
      <form id="addForm" @submit.prevent="addToCart">

        <label>Name</label>
        <input type="text" name="name" v-model="name">

        <label>Description</label>
        <input type="text" name="Description" v-model="description">

        <label>Price</label>
        <input type="text" name="Price" v-model="price">

        <label>Amount</label>
        <input type="text" name="Amount" v-model="amount">

        <button type="submit">Submit</button>
    </form>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'AddToCart',
  data () {
      return {
        name: '',
        description: '',
        price: '',
        amount: ''
      }
  },

  methods: {
      addToCart: function() {
        axios.post('http://localhost:5555/item/add', {
          name: this.name,
          description: this.description,
          price: this.price,
          amount: this.amount
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
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
