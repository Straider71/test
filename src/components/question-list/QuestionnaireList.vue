<template>
  <div class="container">
    <div v-if="this.$store.state.noQuestion">
      <ListTitle :questionCount="this.$store.state.questionCount" />
    </div>
    <div class="question-list" v-if="this.$store.state.noQuestion">
      <div v-for="(questionnaire, idx) in questionnaires" :key="idx">
        <QuestionnaireItem
          :count="questionnaire.question_num.toString()"
          :title="questionnaire.title"
          :status="questionnaire.state"
          :id="questionnaires[idx].questionnaire_id"
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
  },

  computed: { ...mapState(['questionnaires']) },
  methods: {
    ...mapActions(['fetchQuesetionnaires']),
  },
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
