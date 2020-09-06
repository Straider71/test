import axios from 'axios';
import Nprogress from 'nprogress';

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
  async answer(body) {
    const url = `/answers/`;
    return await axios.post(url, body);
  },
  async signIn(credentials) {
    return await axios.post('/users/sign-in/', credentials);
  },
  async signUp(credentials) {
    return await axios.post('/users/sign-up/', credentials);
  },
  async signOut() {
    return await axios.get('/users/sign-out/');
  },
  async sendEmail(email) {
    return await axios.post('', email);
  },
};
