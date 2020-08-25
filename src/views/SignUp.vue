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
    </form>
  </div>
</template>

<script>
import CustomInput from "../components/global/CustomInput";
export default {
  name: "SingUp",
  components: { CustomInput }
};
</script>

<style scoped lang="scss">
.hi {
  background-color: #eee;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.input-list {
  box-shadow: 10px 8px 6px 0 #edeef5;

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
}
</style>
