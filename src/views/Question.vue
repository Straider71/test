<template>
  <!-- <transition name="fade"> -->
  <div class="question">
    <template v-if="this.$store.state.questionIndex < this.questionaire.length">
      <multiple-choice-question
        v-if="question.type === '0'"
        :question="question.title"
        :options="[
          question.correct_option,
          question.incorrect_options[0],
          question.incorrect_options[1],
          question.incorrect_options[2],
        ]"
        @get-value="getSelectedValue($event)"
      />
      <two-option-question
        v-else-if="question.type === '1'"
        :question="question.title"
        :option_1="question.correct_option"
        :option_2="question.incorrect_options[0]"
        @get-value="getSelectedValue($event)"
      />
      <Descriptive
        v-if="question.type === '2'"
        :question="question.title"
        @get-value="getSelectedValue($event)"
      />

      <ProgressBar @clicked="nexyQuestion()" @backclicked="backQuestion()" />
    </template>
    <template v-else-if="questionaire.length == 0">
      <NoQuestionnaire></NoQuestionnaire>
    </template>
    <template v-else>
      <FinishPage />
    </template>
  </div>
  <!-- </transition> -->
</template>

<script>
import Descriptive from '../components/question/Descriptive';
import ProgressBar from '../components/question/ProgressBar';
import TwoOptionQuestion from '../components/question/TwoOptionQuestion';
import MultipleChoiceQuestion from '../components/question/MultipleChoiceQuestion';
import FinishPage from '../components/question-list/FinishPage';
import NoQuestionnaire from '@/components/question-list/NoQuestionnaire.vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Question',
  components: {
    Descriptive,
    ProgressBar,
    MultipleChoiceQuestion,
    TwoOptionQuestion,
    FinishPage,
    NoQuestionnaire,
  },
  data() {
    return {
      selectedValue: '',
    };
  },
  methods: {
    ...mapActions(['fetchQuestion', 'sendAnswer', 'getAnswer']),
    ...mapMutations(['GET_ANSWER']),
    nexyQuestion() {
      if (this.$store.state.questionIndex === this.questionaire.length - 1) {
        this.sendAnswer({
          text: this.selectedValue,
          questionId: this.questionaire[this.questionIndex],
          status: '2',
        });
      } else {
        this.sendAnswer({
          text: this.selectedValue,
          questionId: this.questionaire[this.questionIndex],
          status: '1',
        });
      }
      this.$store.state.questionIndex += 1;
      this.fetchQuestion(this.questionaire[this.questionIndex]);
    },
    backQuestion() {
      this.$store.state.questionIndex -= 1;
      this.fetchQuestion(this.questionaire[this.questionIndex]);
    },
    getSelectedValue($event) {
      this.selectedValue = event.target.value;
    },
  },
  computed: { ...mapState(['question', 'questionaire', 'questionIndex']) },

  created() {
    this.fetchQuestion(this.questionaire[this.questionIndex]);
  },

  // async mounted() {
  //   const res = await this.getAnswer(this.questionaire[this.questionIndex]);
  //   this.GET_ANSWER(res.data.data.answer.text);
  // },
};
</script>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
</style>
