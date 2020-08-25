<template>
  <div class="container">
    <div class="question-list" v-if="noQuestion">
      <ListTitle :questionCount="questionCount" />
      <div v-for="questionnaire in questionnaires" :key="questionnaire">
        <QuestionnaireItem
          :count="questionnaire.question_num.toString()"
          :title="questionnaire.title"
          :status="questionnaire.state"
        />
      </div>
      <!-- <QuestionnaireItem count="30" title="پرسشنامه فرهنگ و هنر" status="0" />
      <QuestionnaireItem count="20" title="پرسشنامه هنر" status="1" />
      <QuestionnaireItem count="10" title="پرسشنامه فرهنگ" status="2" /> -->
    </div>
    <div v-else>
      <NoQuestionnaire />
    </div>
  </div>
</template>

<script>
import QuestionnaireItem from './QuestionnaireItem.vue';
import ListTitle from './ListTitle';
import NoQuestionnaire from './NoQuestionnaire';
import axios from 'axios';
// import API from '../../../api/API';

// const myApi = new API({ url: 'http://127.0.0.1:3000/questionnaire/' });
// myApi.createEntity({ name: 'questionnaire' });

export default {
  name: 'QuestionnaireList',
  components: {
    QuestionnaireItem,
    ListTitle,
    NoQuestionnaire,
  },
  data() {
    return {
      questionnaires: [],
      errors: [],
      noQuestion: false,
      questionCount: 0,
    };
  },

  mounted() {
    // this.myApi.getAll().then(({ data }) => console.log(data));

    axios({
      method: 'GET',

      url: 'http://127.0.0.1:3000/questionnaire/',
    }).then(res => {
      console.log(res.data);
      this.questionnaires = res.data.data;
      console.log(res.data.data);
      if (res.data.data.length) {
        this.questionCount = res.data.result_number;
        this.noQuestion = true;
      }
      this.count;
    });
  },
};
</script>

<style scoped lang="scss">
.question-list {
  max-height: 535px;
  overflow-y: auto;
  overflow-x: hidden;
}
@media (max-width: 890px) {
  .container {
    width: 100%;
  }
}
</style>
