<template>
  <div class="list-title">
    <QuestionnaireSort />
    <QuestionnaireCount count="3" />
  </div>
</template>

<script>
import QuestionnaireCount from './QuestionnaireCount';
import QuestionnaireSort from './QuestionnaireSort';
export default {
  name: 'ListTitle',
  components: {
    QuestionnaireCount,
    QuestionnaireSort,
  },
};
</script>

<style lang="scss" scoped>
.list-title {
  width: 845px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
