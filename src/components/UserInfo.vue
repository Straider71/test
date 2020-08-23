<template>
  <div class="navbar-username">
    <img src="../assets/arrow.svg" alt="arrow" class="navbar-username-arrow" />
    <p class="navbar-username-text">{{ userName }}, خوش آمدید</p>
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
  props: {
    userName: String,
  },
};
</script>

<style lang="scss" scoped>
.navbar-username {
  display: flex;
  align-items: center;

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
    padding: 5px;
  }

  &-arrow {
    width: 12.1px;
    height: 6.9px;
  }

  @media (max-width: 450px) {
    .navbar-username-text {
      display: none;
    }
  }
}
</style>
