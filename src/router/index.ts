import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由守卫
router.beforeEach((from, to, next) => {
  if (to.path === '/' || to.path == '/404') {
    next()
  } else next()
})
