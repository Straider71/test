<template>
  <div class="answer-container">
    <p class="title">
      در دوران رنسانس رویگرد دنیوی به عالم در کدام سطوح آشکار شد؟
    </p>
    <AnswerItemArea />
  </div>
</template>

<script>
import AnswerItemArea from './AnswerItemArea';
export default {
  name: 'Descriptive',
  components: {
    AnswerItemArea,
  },
  // },
  // data() {
  //   title: 'در دوران رنسانس رویگرد دنیوی به عالم در کدام سطوح آشکار شد؟';
  // },
};
</script>

<style lang="scss" scoped>
.answer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .title {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.36;
    letter-spacing: -0.22px;
    text-align: center;
    color: #2a3774;
    margin: 160px 0 20px 0;
  }
}
</style>
