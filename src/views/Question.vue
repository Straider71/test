<template>
  <div class="question">
    <multiple-choice-question
      v-if="question.type === '0'"
      :question="questionText"
      :options="options"
      @get-value="getSelectedValue($event)"
    />
    <two-option-question
      v-else-if="question.type === '1'"
      :question="questionText"
      :option_1="option_1"
      :option_2="option_2"
      @get-value="getSelectedValue($event)"
    />
    <Descriptive v-if="question.type === '2'" :question="questionText" />
    <!-- <FinishPage /> -->

    <ProgressBar />
  </div>
</template>

<script>
import Descriptive from '../components/question/Descriptive';
import ProgressBar from '../components/question/ProgressBar';
import TwoOptionQuestion from '../components/question/TwoOptionQuestion';
import MultipleChoiceQuestion from '../components/question/MultipleChoiceQuestion';
import FinishPage from '../components/question-list/FinishPage';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Question',
  components: {
    Descriptive,
    ProgressBar,
    MultipleChoiceQuestion,
    TwoOptionQuestion,
    FinishPage,
  },
  data() {
    return {
      selectedValue: '',
      options: ['گزینه اول', 'گزینه دوم', 'گزینه سوم', 'گزینه چهارم'],
      questionText:
        'به نظر شما گسترش هنر در جامعه بر کدام‌یک از موارد زیر می‌تواند تاثیر مثبتی داشته باشد؟',
      // type: '2',
      option_1: 'صحیح',
      option_2: 'غلط',
    };
  },
  methods: {
    ...mapActions(['fetchQuestion']),
  },
  computed: { ...mapState(['question', 'questionaire']) },

  mounted() {
    // this.fetchQuestions(35);
    // const questionId = this.questionsArray.shift();
    this.fetchQuestion(this.$route.params.id);
    // this.fetchQuestion(this.$route.params.id)
  },
};
</script>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
}
</style>
