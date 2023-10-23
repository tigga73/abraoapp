import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory
} from 'vue-router';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
