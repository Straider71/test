<template>
  <p class="title">{{ title }}</p>
</template>

<script>
export default {
  name: 'QuestionnaireTitle',
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  letter-spacing: -0.16px;
  color: #2a3774;
}
</style>
