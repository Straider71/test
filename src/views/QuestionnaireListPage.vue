<template>
  <div class="home">
    <div class="circle"></div>
    <Navbar />
    <div class="list">
      <QuestionnaireList />
    </div>
  </div>
</template>

<script>
import QuestionnaireList from '../components/question-list/QuestionnaireList.vue';
import Navbar from '../components/global/Navbar';
export default {
  name: 'Home',
  components: {
    QuestionnaireList,
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

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 150px;
    z-index: 100;
  }

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
    // top: -400px;
    // left: 400px;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
