<template>
  <div class="container">
    <div class="container2">
      <button>شروع -></button>
      <p>وضعیت</p>
    </div>
    <p>تعداد</p>
    <p>پرسشنامه</p>
  </div>
</template>

<script>
export default {
  name: "QuestionauryItem"
};
</script>

<style scoped lang="scss">
.container {
  background-color: #eee;
  height: 85px;
  width: 845px;
  display: flex;
  justify-content: space-around;
  /*flex-direction: ;*/

  .container2 {
    display: flex;
    justify-content: space-between;
  }
}
</style>
