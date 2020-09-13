import Vue from 'vue';
import EventService from '@/services/EventService.js';
import {
  FETCH_QUESTIONNAIRES,
  COMPLETE_QUESTIONNAIRE,
} from '../actions.type.js';
import {
  SET_QUESTIONNAIRES,
  SET_QUESTION_COUNT,
  SET_TOTAL_PAGE,
  SET_NO_QUESTION,
  SET_QUESTIONNAIRE_TITLE,
  SET_ORDER,
  SET_PAGE_NUMBER,
  SET_COMPLETE,
} from '../mutations.type.js';

const state = {
  questionnaires: [],
  questionCount: 0,
  noQuestion: true,
  totalPageNumber: null,
  orderType: 'new_created',
  questionnaireTitle: 'لیست پرسشنامه‌ها',
  pageNumber: 1,
  completeQuestionnaires: [],
};

const mutations = {
  [SET_QUESTIONNAIRES](state, questionnaires) {
    state.questionnaires = questionnaires;
  },
  [SET_QUESTION_COUNT](state, questionCount) {
    state.questionCount = questionCount;
  },
  [SET_NO_QUESTION](state, noQuestion) {
    state.noQuestion = noQuestion;
  },
  [SET_TOTAL_PAGE](state, totoalpage) {
    state.totalPageNumber = totoalpage;
  },
  [SET_QUESTIONNAIRE_TITLE](state, title) {
    state.questionnaireTitle = title;
  },
  [SET_ORDER](state, order) {
    state.orderType = order;
  },
  [SET_PAGE_NUMBER](state, page) {
    state.pageNumber = page;
  },
  [SET_COMPLETE](state, body) {
    state.completeQuestionnaires = body;
  },
};

const actions = {
  async [FETCH_QUESTIONNAIRES]({ commit }, payload) {
    try {
      const res = await EventService.getQuestionnaires(
        payload.order,
        payload.page
      );

      commit(SET_QUESTIONNAIRES, res.data.questionnaire);
      commit(SET_QUESTION_COUNT, res.data.result_number);
      commit(SET_TOTAL_PAGE, res.data.total_page_number);
      commit(SET_NO_QUESTION, true);

      if (res.data.questionnaire.length == 0) commit(SET_NO_QUESTION, false);
    } catch (error) {
      Vue.toasted.error(error.response.data.message);
    }
  },
  async [COMPLETE_QUESTIONNAIRE]({ commit }) {
    try {
      const res = await EventService.completeQuestionnaire();
      commit(SET_COMPLETE, res.data.data.questionnaire_finish_number.count);
    } catch (error) {
      Vue.toasted.error(error.response.data.message);
    }
  },
};

const getters = {
  // questionnaires: [],
  // questionCount: 0,
  // noQuestion: true,
  // totalPageNumber: null,
  orderTypeState: state => state.orderType,
  // questionnaireTitle: 'لیست پرسشنامه‌ها',
  pageNumberState: state => state.pageNumber,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
