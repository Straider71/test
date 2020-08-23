<template>
  <div class="container">
    <ListTitle />
    <div class="question-list">
      <QuestionnaireItem />
      <QuestionnaireItem />
      <QuestionnaireItem />
    </div>
  </div>
</template>

<script>
import QuestionnaireItem from '../components/QuestionnaireItem.vue';
import ListTitle from './ListTitle';

export default {
  name: 'QuestionnaireList',
  components: {
    QuestionnaireItem,
    ListTitle,
  },
};
</script>

<style scoped lang="scss">
.container {
  z-index: 2;
}
</style>
