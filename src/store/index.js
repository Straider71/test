import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    error: '',
    questionnaires: [],
    questionCount: 0,
    questionaire: [],
    noQuestion: true,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers['Authorization'] = `Bearer ${userData.token}`;
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
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_SELECTED_QUESTION(state, questionReq) {
      this.questionaire = questionReq;
    },
  },
  actions: {
    async signup({ commit }, credentials) {
      // try {
      const res = await EventService.signUp(credentials);
      commit('SET_USER_DATA', {
        token: res.data.token,
        username: res.data.data.user.name,
      });
      // } catch (error) {
      //   console.log(error);
      // }
    },
    async signin({ commit }, credentials) {
      // try {
      const res = await EventService.signIn(credentials);
      commit('SET_USER_DATA', {
        token: res.data.token,
        username: res.data.data.name,
      });
      // } catch (error) {
      //   this.$toasted.error(error.message);
      // }
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA');
    },
    async fetchQuesetionnaires({ commit }) {
      try {
        const res = await EventService.getQuestionnaires();
        console.log(res.data.questionnaire);
        commit('SET_QUESTIONNAIRES', res.data.questionnaire);
        commit('SET_QUESTION_COUNT', res.data.result_number);
        commit('SET_NO_QUESTION', true);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchQuestions({ commit }, id) {
      try {
        const questionReq = await EventService.getAllQuestions(id);
        // console.log(questionReq);
        commit('SET_SELECTED_QUESTION', questionReq.data);
      } catch (error) {
        console.log('reqquestionnare');
      }
    },
  },
  getters: {
    userName: state => state.user.username,
    questionnaire: state => id =>
      state.questionnaires.find(questionnaire => questionnaire.id === id),
  },
});
