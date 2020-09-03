import axios from 'axios';
import Nprogress from 'nprogress';

// const apiClient = axios.create({
//   // baseURL: 'http://127.0.0.1:3000',
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });

axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/json';
// axios.defaults.timeout = 1000;

axios.interceptors.request.use(config => {
  Nprogress.start();
  return config;
});

axios.interceptors.response.use(
  response => {
    Nprogress.done();
    return response;
  },
  error => {
    Nprogress.done();
    // Vue.toasted.error(error);

    this.$store.commit('SET_ERROR', error.message);
    return Promise.reject(error);
  }
);

export default {
  async getQuestionnaires() {
    return await axios.get('/questionnaire/');
  },
  async getAllQuestions(id) {
    const url = `/questions/?questionnaire_id=${id}`;
    return await axios.get(url);
  },
  async getQuestion(id) {
    const url = `/questions/?question_id=${id}`;
    return await axios.get(url);
  },
  async signIn(credentials) {
    return await axios.post('/users/sign-in/', credentials);
  },
  async signUp(credentials) {
    return await axios.post('/users/sign-up/', credentials);
  },
};
