<template>
  <div class="container">
    <CustomButton :disable="true"
      ><img src="../assets/arrow-white.svg" alt="arrow" class="arrow" /> شروع
    </CustomButton>

    <QuestionnaireStatus count="30" status="پاسخ داده شده" />

    <QuestionnaireTitle title="پرسشنامه فرهنگ و هنر" />
  </div>
</template>

<script>
import CustomButton from './CustomButton';
import QuestionnaireTitle from './QuestionnaireTitle';
import QuestionnaireStatus from './QuestionnaireStatus';

export default {
  name: 'QuestionnaireItem',
  components: {
    CustomButton,
    QuestionnaireTitle,
    QuestionnaireStatus,
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

  & .arrow {
    width: 20px;
    height: 13.3px;
    padding-right: 10px;
  }
}
</style>
