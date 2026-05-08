import{createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import alimentosView from '@/views/alimentosView.vue'
const routes = [
  {path: '/', componet: HomeView},
  {path: '/alimentos', component: alimentosView},

]

const router = createRouter ({
  history: createWebHistory(),
  routes,
})

export default router
