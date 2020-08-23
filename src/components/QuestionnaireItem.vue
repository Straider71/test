<template>
  <div class="container">
    <CustomButton :disable="true"
      ><img src="../assets/arrow-white.svg" alt="arrow" class="arrow" /> شروع
    </CustomButton>

    <div class="status">
      <p>وضعیت</p>
      <p>تعداد پرسش</p>
    </div>

    <p>پرسشنامه</p>
  </div>
</template>

<script>
import CustomButton from './CustomButton';
export default {
  name: 'QuestionnaireItem',
  components: {
    CustomButton,
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 845px;
  height: 85px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 #f1f1f2;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 10px;

  & .status {
    display: flex;
    align-items: center;
  }

  & .arrow {
    width: 16px;
    height: 13.3px;
    padding-right: 10px;
  }
}
</style>
