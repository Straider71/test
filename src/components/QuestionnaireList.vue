<template>
  <div class="container">
    <ListTitle />
    <!-- <div class="question-list" v-if="questionnaires && questionnaires.length"> -->
    <div class="question-list" v-if="true">
      <QuestionnaireItem />
      <QuestionnaireItem />
      <QuestionnaireItem />
    </div>
    <div v-else>
      <NoQuestionnaire />
    </div>
  </div>
</template>

<script>
import QuestionnaireItem from '../components/QuestionnaireItem.vue';
import ListTitle from './ListTitle';
import NoQuestionnaire from './NoQuestionnaire';
// import axios from 'axios';

export default {
  name: 'QuestionnaireList',
  components: {
    QuestionnaireItem,
    ListTitle,
    NoQuestionnaire,
  },
  // data() {
  //   return {
  //     questionnaires: [],
  //     errors: [],
  //   };
  // },

  // created() {
  //   axios
  //     .get('http://127.0.0.1/questionnaire')
  //     .then(res => {
  //       this.questionnaires = res.data;
  //     })
  //     .catch(e => {
  //       this.errors.push(e);
  //     });
  // },
};
</script>

<style scoped lang="scss">
.container {
  z-index: 2;
}

@media (max-width: 890px) {
  .container {
    width: 100%;
  }
}
</style>
