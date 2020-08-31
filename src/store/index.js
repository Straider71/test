import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    // error: null,
    questionnaires: [],
    questionCount: 0,
    question: {},
    noQuestion: true,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;

      localStorage.setItem('user', JSON.stringify(userData));
      // debugger;
      axios.defaults.headers['Authorization'] = `Bearer ${userData.token}`;
      console.log('axios', axios.defaults);
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
    async signup({ commit }, credentials) {
      console.log(credentials);
      try {
        const res = await EventService.signUp(credentials);
        commit('SET_USER_DATA', {
          token: res.data.token,
          username: res.data.data.user.name,
        });
      } catch (error) {
        console.log(error);
      }

      // return axios
      //   .post('http://127.0.0.1:3001/register', credentials)
      //   .then(data => {
      //     console.log('data', data);
      //     commit('SET_USER_DATA', data);
      //   })
      //   .catch(err => console.log(err));
    },
    async signin({ commit }, credentials) {
      // console.log('1', credentials);
      try {
        const res = await EventService.signIn(credentials);
        commit('SET_USER_DATA', {
          token: res.data.token,
          username: res.data.data.name,
        });
      } catch (error) {
        console.log(error);
      }

      // console.log('hellllllo');
      // return axios
      //   .post('http://127.0.0.1:3001/login', credentials)
      //   .then(({ data }) => {
      //     console.log(data);
      //     commit('SET_USER_DATA', data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA');
    },
    async fetchQuesetionnaires({ commit }) {
      try {
        // const res = await axios.get('http://127.0.0.1:3000/questionnaire/');
        const res = await EventService.getQuestionnaires();
        commit('SET_QUESTIONNAIRES', res.data.questionnaire);
        console.log(res.data.questionnaire);
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
    // userName: JSON.parse(localStorage.getItem(user)).username,
    userName: state => state.user.username,
  },
});
