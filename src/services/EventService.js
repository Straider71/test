import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getQuestionnaires() {
    return apiClient.get('/questionnaire/');
  },
};
