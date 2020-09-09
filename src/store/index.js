import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: null,
    questionnaires: [],
    question: [],
    questionCount: 0,
    questionaire: [],
    noQuestion: true,
    questionnaireTitle: 'لیست پرسشنامه‌ها',
    questionIndex: null,
    pageNumber: 1,
    orderType: 'new_created',
    totalPageNumber: null,
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

    SET_SELECTED_QUESTIONNARE(state, questionReq) {
      state.questionaire = questionReq;
    },
    SET_QUESTION(state, question) {
      state.question = question;
    },
    SET_QUESTIONNAIRE_TITLE(state, title) {
      state.questionnaireTitle = title;
    },
    SET_PAGE_NUMBER(state, page) {
      state.pageNumber = page;
    },
    SET_ORDER(state, order) {
      state.orderType = order;
    },
    SET_TOTAL_PAGE(state, totoalpage) {
      state.totalPageNumber = totoalpage;
    },
  },
  actions: {
    async signup({ commit }, credentials) {
      try {
        const res = await EventService.signUp(credentials);
        commit('SET_USER_DATA', {
          token: res.data.token,
          username: res.data.data.user.name,
        });
        Vue.toasted.success('اطلاعات شما با موفقیت ثبت گردید');
      } catch (error) {
        Vue.toasted.error(error.response.data.message);
      }
    },
    async signin({ commit }, credentials) {
      try {
        const res = await EventService.signIn(credentials);

        commit('SET_USER_DATA', {
          token: res.data.token,
          username: res.data.data.name,
        });
        Vue.toasted.success('شما با موفقیت وارد شدید');
      } catch (error) {
        Vue.toasted.error(error.response.data.message);
      }
    },
    async logout({ commit }) {
      await EventService.signOut();
      commit('CLEAR_USER_DATA');
    },
    async fetchQuesetionnaires({ commit }, payload) {
      try {
        const res = await EventService.getQuestionnaires(
          payload.order,
          payload.page
        );

        commit('SET_QUESTIONNAIRES', res.data.questionnaire);
        commit('SET_QUESTION_COUNT', res.data.result_number);
        commit('SET_TOTAL_PAGE', res.data.total_page_number);
        commit('SET_NO_QUESTION', true);

        if (res.data.questionnaire.length == 0)
          commit('SET_NO_QUESTION', false);
      } catch (error) {
        Vue.toasted.error(error.response.data.message);
      }
    },
    async fetchQuestions({ commit }, id) {
      try {
        const res = await EventService.getAllQuestions(id);
        console.log('res');
        commit('SET_SELECTED_QUESTIONNARE', res.data.data.question);
      } catch (error) {
        Vue.toasted.error(error.response.data.message);
      }
    },
    async fetchQuestion({ commit }, id) {
      try {
        const res = await EventService.getQuestion(id);

        commit('SET_QUESTION', res.data.data.question);
      } catch (error) {
        // Vue.toasted.error(error.response.data.message);
      }
    },
    async sendAnswer({ commit }, body) {
      await EventService.answer(body);
    },
    async sendEmail({ commit }, email) {
      try {
        EventService.sendEmail(email);

        Vue.toasted.success('ایمیل با موفقیت ارسال شد');
      } catch (error) {
        Vue.toasted.error(error.response.data.message);
      }
    },
    async updatePassword({ commit }, payload) {
      try {
        await EventService.updatePass(payload.password, payload.token);
        Vue.toasted.success('رمز عبور با موفقیت تغییر کرد');
      } catch (error) {
        Vue.toasted.error(error.response.data.message);
      }
    },
    async updateMe({ commit }, payload) {
      try {
        await EventService.updateMe();
      } catch (error) {
        Vue.toasted.error(error.response.data.message);
      }
    },
    async getAnswer({ commit }, id) {
      try {
        return await EventService.getAnswer(id);
      } catch (error) {
        // Vue.toasted.error(error.response.data.message);
      }
    },
  },
  getters: {
    userName: state => state.user.username,
    questionnaire: state => id =>
      state.questionnaires.find(questionnaire => questionnaire.id === id),
    goNext: state => (state.pageNumber += 1),
    goPrev: state => (state.pageNumber -= 1),
  },
});
