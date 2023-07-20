import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpinionView from '../views/OpinionsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones/:gameroute',
    name: 'opiniones',
    component: OpinionView,
    props:true,
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdministracionView.vue'),
    props:true,
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
