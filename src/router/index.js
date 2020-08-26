import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue';
import QuestionnaireListPage from "../views/QuestionnaireListPage.vue";
import Question from "../views/Question";
import Authenticate from "../views/Authenticate.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: QuestionnaireListPage
  },
  {
    path: "/",
    component: Authenticate,
    children: [
      {
        path: "sign-in",
        component: SignIn
      },
      {
        path: "sign-up",
        component: SignUp
      }
    ]
  },
  {
    path: "/question",
    name: "Question",
    component: Question
  }
  // {
  //   path: '/questionnaires',
  //   name: 'QuestionnaireListPage',
  //
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "about" */ '../views/QuestionnaireListPage.vue'
  //     ),
  // },
];

const router = new VueRouter({
  routes
});

export default router;
