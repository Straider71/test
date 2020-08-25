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
      </div>
      <router-view />
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
.navbar-logo {
  width: 98px;
  height: 45px;
  object-fit: contain;
}

.auth {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 160px;
  // position: relative;
  //   top: 200px;
  // left: auto;
  width: 100vw;
  height: 100vh;
  background: #f3f4f8;
  // position: absolute;
  overflow: hidden;

  & .hand-image {
    width: 60٪;
    height: 500px;
    margin-right: 100px;
    margin-top: 100px;
  }

  & .right-div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 720px;
    width: 40%;

    // padding: 5px;
    // margin-right: -350px;

    & .title {
      text-align: right;
      margin-top: 50px;

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
        margin-top: 15px;
      }
    }
  }
}
</style>
