import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import QuestionnaireListPage from '../views/QuestionnaireListPage.vue';
// import Signin from '../views/Signin.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
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
