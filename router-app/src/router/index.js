import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CartList from '@/components/CartList'
import AddToCart from '@/components/AddToCart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CartList',
      name: 'CartList',
      component: CartList
    },
    {
      path: '/AddToCart',
      name: 'AddToCart',
      component: AddToCart
    }
  ]
})
