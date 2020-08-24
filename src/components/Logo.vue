<template>
  <figure class="navbar-logo">
    <img src="../assets/logo.svg" alt="logo" />
  </figure>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
.navbar-logo {
  width: 80.2px;
  height: 36.7px;
  object-fit: contain;
  // flex: 1;
  // justify-self: flex-start;
}

@media (max-width: 576px) {
  .navbar-logo {
    display: none;
  }
}
</style>
