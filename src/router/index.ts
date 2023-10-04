import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory
} from 'vue-router';
import Login from '@/views/Login.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
