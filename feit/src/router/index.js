import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import("@/views/Home.vue")
const Seniors = () => import("@/views/Seniors")
const Lecturer = () => import("@/views/Lecturer")
Vue.use(VueRouter)

const routes = [

  {
    path: "/",
    component: Home
  },
  {
    path: "/seniors",
    component: Seniors,

  },
  {
    path: "/Lecturer",
    component: Lecturer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})

export default router
