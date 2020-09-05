<template>
  <div class="question">
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
    <Descriptive v-if="question.type === '2'" :question="question.title" />
    <!-- <FinishPage /> -->

    <!-- <ProgressBar @click="clicked($event)" /> -->
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
      // options: ['گزینه اول', 'گزینه دوم', 'گزینه سوم', 'گزینه چهارم'],
      // options: [this.question.correct_option],
      // questionText:
      //   'به نظر شما گسترش هنر در جامعه بر کدام‌یک از موارد زیر می‌تواند تاثیر مثبتی داشته باشد؟',
      // type: '2',
      // option_1: 'صحیح',
      // option_2: 'غلط'
    };
  },
  methods: {
    ...mapActions(['fetchQuestion']),
    // clicked($event) {
    //   console.log(event.target.value);
    // },
    getSelectedValue($event) {
      console.log(event.target.value);
    },
  },
  computed: { ...mapState(['question', 'questionaire']) },

  mounted() {
    // this.fetchQuestions(35);
    // const questionId = this.questionsArray.shift();
    this.fetchQuestion(this.questionaire[1]);
    console.log(this.questionaire);
    console.log(this.question);

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
