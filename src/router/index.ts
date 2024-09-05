import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BitacoraView from '@/views/BitacoraView.vue'
import PackerView from '@/views/PackerView.vue'
import PackerFormView from '@/views/PackerFormView.vue'
import MexicoCity from '@/components/cities/MexicoCity.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bitacora',
      name: 'bitacora',
      component: BitacoraView
    },
    {
      path: '/mexico',
      name: 'mexico',
      component: MexicoCity
    },
    {
      path: '/maletero',
      name: 'maletero',
      component: PackerView
    },
    {
      path: '/maleteroForm/:userId',
      name: 'maleteroForm',
      component: PackerFormView
    }
  ]
})

export default router
