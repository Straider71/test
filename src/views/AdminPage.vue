<template>
  <div class="home">
    <div class="circle"></div>
    <Navbar />

    <div class="main">
      <div class="topbar">
        <div class="tabs">
          <router-link to="/admin"> <p>صفحه نخست</p></router-link>
        </div>
        <div class="tabs">
          <router-link to="/admin/questionnaire">
            <p>ایجاد پرسشنامه</p></router-link
          >
        </div>
        <div class="tabs">
          <router-link to="/admin/question"> <p>ایجاد سوال</p></router-link>
        </div>
        <div class="tabs">
          <router-link to="/admin/setting"> <p>تنظیمات</p></router-link>
        </div>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/global/Navbar';

export default {
  name: 'AdminPage',
  components: {
    Navbar,
  },
};
</script>

<style scoped lang="scss">
.home {
  background-color: #f3f4f8;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -2;
  overflow: hidden;

  & .circle {
    z-index: -1;
    width: 1209px;
    height: 1209px;
    opacity: 0.3;
    background-color: #ffffff;
    border-radius: 50%;
    border: 0px solid transparent;
    border-top: none;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .main {
    & .topbar {
      width: 80%;
      height: 60px;
      background-color: #fff;
      border-radius: 25px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
      // padding: 10px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;

      & a {
        text-decoration: none;

        &:visited {
          color: #4570f5;
        }
      }

      & .tabs {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #4570f5;
        margin: 0 50px;
      }
    }
  }
}
</style>
