<template>
  <figure class="navbar-logo">
    <img src="../../assets/logo.png" alt="logo" />
  </figure>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
// .navbar-logo {
//   // width: 80.2px;
//   // height: 36.7px;
//   // object-fit: contain;
//   // flex-shrink: 1;
//   // flex-basis: 50%;
//   display: flex;
//   justify-content: flex-end;
// }

@media (max-width: 576px) {
  .navbar-logo {
    display: none;
  }
}
</style>
