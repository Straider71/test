<template>
  <div class="answer-container">
    <p class="title">
      <QuestionTitle :text="question" />
    </p>
    <AnswerItemArea @change-option="onChange($event)" />
  </div>
</template>

<script>
import AnswerItemArea from './AnswerItemArea';
import QuestionTitle from './QuestionTitle';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'Descriptive',
  components: {
    AnswerItemArea,
    QuestionTitle,
  },
  props: {
    question: String,
  },
  methods: {
    ...mapActions(['fetchQuestion', 'sendAnswer', 'getAnswer']),
    ...mapMutations(['GET_ANSWER']),
    onChange(event) {
      console.log(event);
      this.$emit('get-value', event);
    },
  },
  computed: { ...mapState(['questionaire', 'questionIndex']) },

  async created() {
    this.GET_ANSWER(null);
    const res = await this.getAnswer(this.questionaire[this.questionIndex]);
    this.GET_ANSWER(res.data.data.answer.text);
  },
};
</script>

<style lang="scss" scoped>
.answer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
