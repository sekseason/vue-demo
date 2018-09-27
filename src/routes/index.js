import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';

import MainLayout from '@/components/layout/Main.vue';
import SingleLayout from '@/components/layout/Single.vue';

import Login from '@/components/pages/auth/login/Login.vue';
import ForgotPassword from '@/components/pages/auth/forgot-password/ForgotPassword.vue';

import Provider from '@/components/pages/provider/Provider.vue';
import Product from '@/components/pages/product/Product.vue';
import Settings from '@/components/pages/settings/Settings.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'provider',
          component: Provider,
          meta: {
            auth: true,
          }
        },
        {
          path: 'product',
          name: 'product',
          component: Product,
          meta: {
            auth: true,
          }
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings,
          meta: {
            auth: true,
          }
        },
      ]
    },
    {
      path: '/auth',
      component: SingleLayout,
      children: [
        {
          path: 'login',
          component: Login
        },
        {
          path: 'recovery',
          component: ForgotPassword
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.dispatch('authCheck');

  if (to.matched.some(record => record.meta.auth)) {
    if (!store.getters.isAuthenticated) {
      next({
        path: '/auth/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router;