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
  // justify-content: space-between;
  padding: 23px 45px;
  // z-index: 3;
  align-items: center;

  // Logo {
  //   // flex-shrink: 1;
  //   // flex-basis: 50%;
  // }

  // PageTitle {
  //   // flex-shrink: 0;
  // }

  // UserInfo {
  //   // flex-shrink: 1;
  //   // flex-basis: 50%;
  // }
}

@media (max-width: 576px) {
  Logo {
    display: none;
  }
}
</style>
