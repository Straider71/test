<template>
  <div class="answer-container">
    <p class="title">
      <QuestionTitle :text="question" />
    </p>
    <AnswerItemArea />
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
