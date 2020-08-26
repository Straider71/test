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
  height: auto;
  // justify-content: space-between;
  padding: 23px 45px;
  // z-index: 3;
  align-items: center;

  .navbar-logo {
    flex-shrink: 1;
    flex-basis: 50%;
    width: 80.2px;
    // height: 36.7px;
    display: flex;
    justify-content: flex-end;
    // object-fit: contain;
  }

  // PageTitle {
  //   // flex-shrink: 0;
  // }

  // UserInfo {
  //   // flex-shrink: 1;
  //   // flex-basis: 50%;
  // }
}

// @media (max-width: 576px) {
//   Logo::v-deep .navbar-logo {
//     display: none;
//   }
// }
</style>
