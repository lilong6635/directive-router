import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home.vue'/* webpackChunkName: "home" */)
const About = () => import('@/views/About.vue'/* webpackChunkName: "about" */)
const Welcome = () => import('@/views/Welcome.vue'/* webpackChunkName: "about" */)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Welcome',
    name: 'Welcome',
    component: Welcome
  }
]

const router = new VueRouter({
  routes
})

export default router
