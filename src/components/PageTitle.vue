<template>
  <div class="navbar-title">
    <p>‌{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.navbar-title {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  color: #4570f5;
}
</style>
