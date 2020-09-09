<template>
  <div class="auth">
    <div class="hand-image">
      <HandImage />
    </div>
    <div class="right-div">
      <Logo />
      <div class="title">
        <p class="head">به سیستم پرسشنامه آنلاین خوش آمدید</p>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Logo from '../components/global/Logo';
import HandImage from '@/components/global/HandImage.vue';

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
  // padding-right: 160px;

  width: 100vw;
  height: 100vh;
  background: #f3f4f8;
  overflow: hidden;

  & .hand-image {
    width: 50٪;
    height: 500px;
    // margin-right: 190px;
    margin-top: 230px;
    // padding-right: 190px;
    // padding-top: 50px;
  }

  & .right-div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 720px;
    width: 50%;
    padding-right: 190px;
    padding-top: 50px;

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

@media (max-width: 1270px) {
  .auth {
    & .right-div {
      padding-right: 130px;
      & .title {
        & .head {
          font-size: 22px;
        }
      }
    }

    & .hand-image {
      margin-right: 50px;
    }
  }
}
@media (max-width: 1130px) {
  .auth {
    & .right-div {
      & .title {
        & .head {
          font-size: 20px;
        }
      }
    }
  }
}

@media (max-width: 1010px) {
  .auth {
    & .hand-image {
      display: none;
    }

    & .right-div {
      align-items: center;
      height: 500px;
      width: 100%;
      padding: 0;
      padding-top: -50px;
    }
  }
}

@media (max-width: 576px) {
  .navbar-logo {
    display: block;
    padding-top: -50px;
  }
}
</style>
