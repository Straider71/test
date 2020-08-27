<template>
  <p class="question-sub-header" v-text="text"></p>
</template>

<script>
export default {
  name: "QuestionSubHeader",
  props: {
    text: String
  }
};
</script>

<style scoped lang="scss">
.question-sub-header {
  color: #7f86aa;
  font-size: 16px;
  margin-bottom: 48.5px;

  @media screen and (max-width: 844px) {
    font-size: 14px;
    margin-bottom: 33px;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 20px;
    font-size: 11px;
  }
}
</style>
