import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    questionnaires: [],
    questionCount: 0,
    question: {},
    noQuestion: false,
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
    SET_QUESTIONNAIRES(state, questionnaires) {
      state.questionnaires = questionnaires;
    },
    SET_QUESTION_COUNT(state, questionCount) {
      state.questionCount = questionCount;
    },
    SET_QUESTION(state, question) {
      state.question = question;
    },
    SET_NO_QUESTION(state, noQuestion) {
      state.noQuestion = noQuestion;
    },
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
    async fetchQuesetionnaires({ commit }) {
      try {
        const res = await axios.get('http://127.0.0.1:3000/questionnaire/');
        commit('SET_QUESTIONNAIRES', res.data.data);
        console.log(res.data.data);
        // if (res.data.data.length) {
        commit('SET_QUESTION_COUNT', res.data.result_number);
        commit('SET_NO_QUESTION', true);
        // }
      } catch (error) {
        console.log(error);
      }
    },
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
