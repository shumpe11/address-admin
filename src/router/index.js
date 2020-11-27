import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Addresses from '../views/Addresses.vue'
import AddressesForm from '../views/AddressesForm.vue'
import About from '../views/About.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/addresses',
    name: 'addresses',
    component: Addresses
  },
  {
    path: '/addressesform/:address_id?/edit',
    name: 'addresses_edit',
    component: AddressesForm
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
