import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/RegisterView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('@/views/auth/LogoutView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks.list',
      component: () => import('@/views/tasks/TasksList.vue')
    },
    {
      path: '/tasks/create',
      name: 'tasks.create',
      component: () => import('@/views/tasks/CreateTask.vue')
    },
    {
      path: '/tasks/:id',
      name: 'tasks.edit',
      component: () => import('@/views/tasks/EditTask.vue')
    },
    // {
    //   path: '/tasks/:id',
    //   name: 'tasks.delete',
    //   component: () => import('@/views/tasks/TasksList.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
