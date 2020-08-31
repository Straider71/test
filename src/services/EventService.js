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

axios.interceptors.request.use(config => {
  Nprogress.start();
  // const token = localStorage.getItem(user.token.toString());
  // config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

axios.interceptors.response.use(
  response => {
    console.log(response);
    Nprogress.done();
    return response;
  }
  // function(error) {
  //   Nprogress.done();
  //   return this.$toasted.error(error.response.data.message);
  // }
);

export default {
  async getQuestionnaires() {
    return await axios.get('/questionnaire/');
  },
  async getQuestionnaire(id) {
    return await axios.get('/questionnaire/' + id);
  },
  async signIn(credentials) {
    // console.log('here2', credentials);
    return await axios.post('/users/sign-in/', credentials);
  },
  async signUp(credentials) {
    return await axios.post('/users/sign-up/', JSON.stringify(credentials));
  },
};
