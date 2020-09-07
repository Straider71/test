<template>
  <div class="home">
    <!-- <div class="circle"></div> -->
    <div class="sidebar">
      <img src="@/assets/logo.svg" alt="logo" />
      <div class="list">
        <div class="tabs">ایجاد پرسشنامه</div>
        <div class="tabs">ایجاد سوال</div>
        <div class="tabs">تنظیمات</div>
        <div class="tabs">خروج</div>
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
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

  .circle {
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

  .sidebar {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: -7px 0px 17px -9px rgba(130, 123, 130, 1);

    width: 15%;
    height: 100vh;
    position: absolute;
    right: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.2);

    img {
      width: 150px;
      margin-top: 20px;
    }

    .list {
      margin-top: 150px;

      .tabs {
        width: 100%;
        height: auto;
        margin-bottom: 15px;
        font-size: 26px;
        line-height: 1.38;
        letter-spacing: -0.16px;
        text-align: center;
        color: #7f86aa;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
