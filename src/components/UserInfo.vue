<template>
  <div class="navbar-username">
    <img src="../assets/arrow.svg" alt="arrow" class="navbar-username-arrow" />
    <p class="navbar-username-text">علی خرامان, خوش آمدید</p>
    <img
      src="../assets/avatar.svg"
      alt="avatar"
      class="navbar-username-avatar"
    />
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  // props: {
  //   userName,
  // },
};
</script>

<style lang="scss" scoped>
.navbar-username {
  display: flex;
  align-items: safe center;

  &-avatar {
    width: 26px;
    height: 26px;
  }

  &-text {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.14px;
    // text-align: left;
    color: #4b5a94;
  }

  &-arrow {
    width: 12.1px;
    height: 6.9px;
  }
}
</style>
