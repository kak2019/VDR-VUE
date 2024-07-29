// router.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeComponent from '../webparts/vueMock/components/Homepage/index.vue';
import AboutComponent from '../webparts/vueMock/components/Hello/qrcode.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
},
{
    path: '/home',
    component: HomeComponent
},
  { path: '/about', component: AboutComponent },
  { path: '/step', component: import('../webparts/vueMock/components/Step/index.vue') },
  {
    path: '/:patchMatch(.*)',
    component: () => import(/* webpackChunkName: "notfound-chunk" */
        '../webparts/vueMock/components/Hello/NotFound.vue')
}
];

const router = createRouter({
  
  routes,
  history: createWebHashHistory(),
});

export default router;