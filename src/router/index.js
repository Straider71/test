import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import QuestionnaireListPage from '../views/QuestionnaireListPage.vue';
import Authenticate from '../views/Authenticate.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/',
    component: Authenticate,
    children: [
      {
        path: 'sign-in',
        component: SignIn,
      },
      {
        path: 'sign-up',
        component: SignUp,
      }
    ]
  },
  {
    path: '/questionnaires',
    name: 'QuestionnaireListPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/QuestionnaireListPage.vue'
      ),
    // children: [
    //   {
    //     path: 'contact',
    //     component: Signin,
    //   },
    //   {
    //     path: 'info',
    //     component: Signin,
    //   }, //router-view
    // ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
