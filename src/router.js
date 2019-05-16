/* eslint-disable no-unused-expressions */
import Vue from 'vue';
import Router from 'vue-router';

import NotFound from './views/ErrorPage/NotFound.vue';
import InternetServerError from './views/ErrorPage/InternetServerError.vue';

import Home from './views/Home/index.vue';

// import { getQueryVariable } from './utils/commonFunc';
// import config from './utils/config';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/500',
      name: 'InternetServerError',
      component: InternetServerError,
    },
    {
      path: '/home',
      name: '首页',
      component: Home,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const accessToken = getQueryVariable('access_token');
//   const localToken = localStorage.getItem('access_token');
//   const { redirectHost, authHost, clientId } = config;
//   if (to.matched.length === 0) {
//     from.name ? next({
//       name: from.name,
//     }) : next('/404');
//   } if (accessToken && from.path === '/') {
//     localStorage.setItem('access_token', accessToken);
//     window.location.href = `${redirectHost}`;
//   } else if (!localToken) {
//     localStorage.clear();
//     window.location.href = `${authHost}/login?clientId=${clientId}&redirect_uri=${redirectHost}`;
//   } else {
//     next();
//   }
// });

export default router;
