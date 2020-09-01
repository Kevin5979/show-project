import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home.vue')
const About = () => import('views/About.vue')

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path !== "/" && window.localStorage.isLogin !== '1') {
    Vue.prototype.$message({
      message: "请先登录",
      duration: 1000
    })
    next({
      path: "/"
    })
  }
  next()
});

export default router
