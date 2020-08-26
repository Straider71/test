<template>
  <div class="finish">
    <figure>
      <img src="../../assets/Group.svg" alt="finish page" />
    </figure>
    <p>شما با <span class="green">موفقیت</span> پرسشنامه را به اتمام رساندید</p>
    <CustomButton>
      <img src="../../assets/arrow-white.svg" alt="arrow" />
      <a href="#">مشاهده پرسشنامه‌ها</a>
    </CustomButton>
  </div>
</template>

<script>
import CustomButton from '../global/CustomButton';

export default {
  name: 'FinishPage',
  components: {
    CustomButton,
  },
};
</script>

<style lang="scss" scoped>
.finish {
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.2px;
    text-align: center;
    color: #2a3774;

    & .green {
      color: #05d667;
    }
  }
}
</style>
