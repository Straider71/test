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
  font-size: 20px;
  font-weight: 700;
  // transform: translate(-50%, -50%);
  // position: absolute;
  // left: 50%;
  // top: 20px;
  // flex: 1;
  // justify-self: center;

  color: #4570f5;
}
</style>
