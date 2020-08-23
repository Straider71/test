<template>
  <nav class="navbar">
    <UserInfo userName="علی خرامان" />
    <PageTitle title="لیست پرسشنامه‌ها" />
    <Logo />
  </nav>
</template>

<script>
import Logo from './Logo';
import PageTitle from './PageTitle';
import UserInfo from './UserInfo';

export default {
  name: 'QuestionnaireItem',
  components: {
    Logo,
    PageTitle,
    UserInfo,
  },
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 23px 45px;
  // z-index: 3;
  align-items: center;
}

@media (max-width: 576px) {
  Logo {
    display: none;
  }
}
</style>
