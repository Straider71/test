<template>
  <div class="hi">
    <form class="input-list">
      <custom-input
        class="round-top-border"
        placeholder="نام و نام خانوادگی خود را وارد کنید"
        label="نام و نام خانوادگی"
      >
        <img src="../assets/input-img/user.svg" />
      </custom-input>
      <custom-input placeholder="ایمیل خود را وارد کنید" label="ایمیل">
        <img src="../assets/input-img/mail.svg" />
      </custom-input>
      <custom-input placeholder="رمز عبور خود را وارد کنید" label="رمز عبور">
        <img src="../assets/input-img/lock.svg" />
      </custom-input>
      <custom-input
        class="round-bottom-border"
        placeholder="رمز عبور خود را مجدد وارد کنید"
        label="تکرار رمز عبور"
      >
        <img src="../assets/input-img/lock.svg" />
      </custom-input>
      <div class="buttons">
        <CustomButton class="enter">
          <p>ورود</p>
        </CustomButton>
        <CustomButton class="signup">
          <p>ثبت نام</p>
        </CustomButton>
      </div>
    </form>
  </div>
</template>

<script>
import CustomInput from '../components/global/CustomInput';
import CustomButton from '../components/global/CustomButton';

export default {
  name: 'SingUp',
  components: { CustomInput, CustomButton },
};
</script>

<style scoped lang="scss">
.input-list {
  box-shadow: 10px 8px 6px 0 #edeef5;
  width: 375px;
  height: 136px;
  margin-top: 40px;

  & > * {
    margin-top: 1px;
  }

  & .round-top-border {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  & .round-bottom-border {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  & .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
}
</style>
