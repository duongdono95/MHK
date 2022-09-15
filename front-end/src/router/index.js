import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Keyboards from '../views/Keyboards.vue'
import Mice from '../views/Mice.vue'
import Headphones from '../views/Headphones.vue'
import Listing from '../views/Listing.vue'
import MyProfile from '../views/MyProfile.vue'
import Details from '../views/SingleProduct.vue'
import Edit from '../views/edit.vue'

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
    },
    {
      path: '/myProfile',
      name: 'myProfile',
      component: MyProfile
    },
    {
      path: '/all-listings/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    }
  ],
  linkActiveClass: 'active-link'
})

export default router
