import Vue from 'vue'
import VueRouter from 'vue-router'
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
import Layout from '@/layout'
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'recruit',
        name: 'recruit',
        component: () => import('@/views/recruit/index.vue'),
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('@/views/info/index.vue'),
      },
      {
        path: 'resource',
        name: 'resource',
        component: () => import('@/views/resource/index.vue'),
      },
      {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/blog/index.vue'),
      },
      
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/message/index.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about/index.vue'),
      },
      {
        path: 'info/detail/:id',
        name: 'article',
        component: () => import('@/views/article/index.vue'),
      },
      {
        path: 'blog/detail/:id',
        name: 'detail',
        component: () => import('@/views/blog/detail/index.vue'),
      },
      {
        path: 'blog/type/:name',
        name: 'type',
        component: () => import('@/views/blog/type/index.vue'),
      },
      {
        path: 'blog/label/:name',
        name: 'label',
        component: () => import('@/views/blog/label/index.vue'),
      },
      {
        path: 'blog/user/:userId',
        name: 'user',
        component: () => import('@/views/blog/user/index.vue'),
      }
    ]
  },
]
const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior(to, from, saveTop) {
    if (saveTop) {
      return saveTop;
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
})

export default router