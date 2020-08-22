<template>
  <div class="home">
    <QuestionnaireItem />
  </div>
</template>

<script>
import QuestionnaireItem from "../components/QuestionnaireItem.vue";
export default {
  name: "Home",
  components: {
    QuestionnaireItem,
  },
};
</script>

<style scoped lang="scss">
.home {
  background-color: #f3f4f8;
  height: 100vh;
  width: 100vw;
}
</style>
