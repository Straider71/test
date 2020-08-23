<template>
  <nav class="navbar">
    <div class="navbar-username">
      <img
        src="../assets/arrow.svg"
        alt="arrow"
        class="navbar-username-arrow"
      />
      <p class="navbar-username-text">علی خرامان, خوش آمدید</p>
      <img
        src="../assets/avatar.svg"
        alt="avatar"
        class="navbar-username-avatar"
      />
    </div>

    <div class="navbar-title">
      <p>‌لیست پرسشنامه‌ها</p>
    </div>
    <div class="navbar-logo">
      <img src="../assets/logo.svg" alt="logo" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'QuestionnaireItem',
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 23px 45px;
  z-index: 2;

  &-logo {
    width: 80.2px;
    height: 36.7px;
    object-fit: contain;
  }

  &-title {
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    color: #4570f5;
  }

  &-username {
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
}
</style>
