import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// import router from '../router';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    // questionnaires: [],
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${userData.token}`;
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem('user');
      location.reload();
    },
    // SET_QUESTIONNAIRES(state, questionnaires) {
    //   state.questionnaires = questionnaires;
    // },
  },
  actions: {
    signup({ commit }, credentials) {
      return axios
        .post('http://127.0.0.1:3001/register', credentials)
        .then(({ data }) => {
          console.log(data);
          commit('SET_USER_DATA', data);
        });
    },
    signin({ commit }, credentials) {
      return axios
        .post('http://127.0.0.1:3001/login', credentials)
        .then(({ data }) => {
          console.log(data);
          commit('SET_USER_DATA', data);
        });
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA');
    },
    // getQuestionnaire({ commit }) {
    //   return axios
    //     .get('http://127.0.0.1:3000/questionnaire/', {
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //     })
    //     .then(res => {
    //       console.log(res.data);
    //       questionnaires = res.data.data;
    //       commit('SET_QUESTIONNAIRES', questionnaires);
    //       console.log(res.data.data);
    //       // if (res.data.data.length) {
    //       //   this.questionCount = res.data.result_number;
    //       //   this.noQuestion = true;
    //       // }
    //       // this.count;
    //     })
    //     .catch(err => console.log(err.response));
    // },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
    // questionnaires(state) {
    //   return state.questionnaires;
    // },
  },
});
