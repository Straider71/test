<template>
  <div class="container">
    <ListTitle />
    <div class="question-list" v-if="true">
      <QuestionnaireItem />
      <QuestionnaireItem />
      <QuestionnaireItem />
    </div>
    <div v-else>
      <NoQuestionnaire />
    </div>
  </div>
</template>

<script>
import QuestionnaireItem from '../components/QuestionnaireItem.vue';
import ListTitle from './ListTitle';
import NoQuestionnaire from './NoQuestionnaire';

export default {
  name: 'QuestionnaireList',
  components: {
    QuestionnaireItem,
    ListTitle,
    NoQuestionnaire,
  },
};
</script>

<style scoped lang="scss">
.container {
  z-index: 2;
}
</style>
