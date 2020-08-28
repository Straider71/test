import axios from 'axios';
import Nprogress from 'nprogress';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(config => {
  Nprogress.start();
  return config;
});

apiClient.interceptors.response.use(response => {
  Nprogress.done();
  return response;
});

export default {
  getQuestionnaires() {
    return apiClient.get('/questionnaire/');
  },
  getQuestionnaire(id) {
    return apiClient.get('/questionnaire/' + id);
  },
};
