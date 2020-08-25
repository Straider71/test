<template>
  <div class="auth">
    <div class="hand-image">
      <HandImage />
    </div>
    <div class="right-div">
      <Logo />
      <div class="title">
        <p class="head">به سیستم پرسشنامه آنلاین خوش آمدید</p>
        <p class="subhead">
          چنانچه شما دارای حساب کاربری دارید لطفا وارد شوید
        </p>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/global/Logo';
import HandImage from '../components/authentication/HandImage';

export default {
  name: 'Authenticate',
  components: {
    Logo,
    HandImage,
  },
};
</script>

<style lang="scss" scoped>
template {
  width: 100vw;
  height: 100vh;
  background: #f3f4f8;
  position: absolute;
}

// .navbar-logo {
//   position: absolute;
//   top: 48px;
//   right: 153px;
//   width: 98px;
//   height: 45px;
// }

.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  //   top: 200px;
  left: auto;

  & .right-div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 5px;

    & .title {
      text-align: right;

      & .head {
        font-weight: bold;
        color: #2a3774;
        font-size: 26px;
        line-height: 1.35;
      }

      & .subhead {
        color: #7f86aa;
        font-size: 14px;
        line-height: 1.36;
        letter-spacing: -0.14px;
        margin-top: 10px;
      }
    }
  }
}
</style>
