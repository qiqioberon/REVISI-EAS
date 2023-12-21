import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import SignUpPage from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/SignUpPage',
      name: 'SignUp',
      component: SignUpPage
    },
  ]
})

export default router
