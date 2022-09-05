import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Keyboards from '../views/Keyboards.vue'
import Mice from '../views/Mice.vue'
import Headphones from '../views/Headphones.vue'
import Listing from '../views/Listing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/keyboards',
      name: 'keyboards',
      component: Keyboards
    },
    {
      path: '/mice',
      name: 'mice',
      component: Mice
    },
    {
      path: '/headphones',
      name: 'headphones',
      component: Headphones
    },
    {
      path: '/listing',
      name: 'listing',
      component: Listing
    }

  ]
})

export default router
