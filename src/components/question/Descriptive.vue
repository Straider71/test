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
    onChange(event) {
      console.log(event);
      this.$emit('get-value', event);
    },
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
