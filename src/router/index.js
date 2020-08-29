import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    redirect: {
      name: 'QuestionnaireListPage',
    },

    children: [
      {
        path: '',
        name: 'QuestionnaireListPage',
        component: () => import('@/views/QuestionnaireListPage.vue'),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'questions',
        name: 'Question',
        component: () => import('@/views/Question.vue'),
        meta: {
          requireAuth: true,
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
      },
      {
        path: 'sign-up',
        component: () => import('@/views/SignUp.vue'),
      },
      {
        path: 'forgot-password',
        component: () => import('@/views/ForgotPass.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');

  if (to.matched.some(record => record.meta.requireAuth) && !loggedIn) {
    next('/account/sign-in');
    this.$toastr('warning', 'ابتدا وارد شوید');
  } else next();
});
export default router;
