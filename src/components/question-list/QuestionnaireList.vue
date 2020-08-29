<template>
  <div class="container">
    <div v-if="this.$store.state.noQuestion">
      <ListTitle :questionCount="this.$store.state.questionCount" />
    </div>
    <div class="question-list" v-if="this.$store.state.noQuestion">
      <div
        v-for="questionnaire in questionnaires"
        :key="questionnaire.questionnaire_id"
      >
        <QuestionnaireItem
          :count="questionnaire.question_num.toString()"
          :title="questionnaire.title"
          :status="questionnaire.state"
        />
      </div>
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
import EventService from '../../services/EventService';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'QuestionnaireList',
  components: {
    QuestionnaireItem,
    ListTitle,
    NoQuestionnaire,
  },
  data() {
    return {
      // questionnaires: [],
      errors: [],
      // noQuestion: true,
      // questionCount: 0,
    };
  },

  created() {
    this.fetchQuesetionnaires();
    // EventService.getQuestionnaires()
    //   .then(res => {
    //     console.log(res.data);
    //     this.questionnaires = res.data.data;
    //     console.log(res.data.data);
    //     if (res.data.data.length) {
    //       this.questionCount = res.data.result_number;
    //       this.noQuestion = true;
    //     }
    //     this.count;
    //   })
    //   .catch(err => console.log(err.response));
  },

  computed: { ...mapState(['questionnaires']) },
  methods: { ...mapActions(['fetchQuesetionnaires']) },
};
</script>

<style scoped lang="scss">
.question-list {
  max-height: 535px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}
@media (max-width: 890px) {
  .container {
    width: 100%;
  }
}
</style>
