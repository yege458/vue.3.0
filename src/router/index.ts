import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import helloWorld from '@/components/HelloWorld.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: helloWorld
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router