import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    redirect: {
      name: 'QuestionnaireListPage',
    },
    // beforeEnter(to, from, next) {
    //   if (store.state.idToken) {
    //     next();
    //   } else {
    //     next('/account/sign-in');
    //   }
    // },
    children: [
      {
        path: '',
        name: 'QuestionnaireListPage',
        component: () => import('@/views/QuestionnaireListPage.vue'),
        meta: {
          user: true,
        },
      },
      {
        path: 'questions',
        name: 'Question',
        component: () => import('@/views/Question.vue'),
        meta: {
          user: true,
        },
      },
    ],
  },
  {
    path: '/account/',
    component: () => import('@/views/Authenticate.vue'),
    children: [
      {
        path: 'sign-in',
        component: () => import('@/views/SignIn.vue'),
        meta: {
          guest: true,
        },
      },
      {
        path: 'sign-up',
        component: () => import('@/views/SignUp.vue'),
        meta: {
          guest: true,
        },
      },
      {
        path: 'forgot-password',
        component: () => import('@/views/ForgotPass.vue'),
        meta: {
          guest: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
