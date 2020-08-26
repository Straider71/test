<template>
<!--    <div class="hi">-->
  <div class="sign-in-container">
    <p class="sub-header">چنانچه دارای حساب کاربری نیستید، لطفا ابتدا ثبت نام کنید</p>
    <form class="input-list">
      <custom-input
        class="round-top-border"
        placeholder="ایمیل خود را وارد کنید"
        label="ایمیل"
      >
        <img src="../assets/input-img/mail.svg" />
      </custom-input>
      <custom-input
        class="round-bottom-border"
        placeholder="رمز عبور خود را وارد کنید"
        label="رمز عبور"
      >
        <img src="../assets/input-img/lock.svg" />
      </custom-input>
    </form>
    <div class="remember-forget">
      <div class="forget-pass-link">
        <a>رمز عبور را فراموش کرده‌اید؟</a>
      </div>
      <div class="remember-me">
        <CustomCheckBox text="مرا به خاطر داشته باش" />
      </div>
    </div>
    <div class="buttons">
      <CustomButton class="custom-button">
        <p>ثبت نام</p>
      </CustomButton>
      <CustomButton class="custom-button">
        <p>ورود</p>
      </CustomButton>
    </div>
  </div>
<!--    </div>-->
</template>

<script>
import CustomInput from "../components/global/CustomInput";
import CustomCheckBox from "../components/global/CustomCheckBox";
import CustomButton from "../components/global/CustomButton";
export default {
  name: "SignIn",
  components: { CustomInput, CustomCheckBox, CustomButton }
};
</script>

<style lang="scss" scoped>
/*.hi {*/
/*  background-color: #f3f4f8;*/
/*  width: 100vw;*/
/*  height: 100vh;*/

/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*}*/

.sign-in-container {
  width: 375px;
  max-width: 375px;
  height: 267px;
  display: flex;
  flex-direction: column;

  & .sub-header {
    /*display: flex;*/
    text-align: right;
    color: #7f86aa;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: -0.14px;
    margin-bottom: 35px;
    margin-top: 10px;
  }

  .input-list {
    box-shadow: 10px 8px 6px 0 #edeef5;
    /*margin-bottom: 33px;*/
    margin-bottom: 33px;

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

  & .remember-forget {
    width: 100%;
    color: #7f86aa;
    display: flex;
    position: relative;

    & .forget-pass-link {
      position: absolute;
      font-size: 14px;
      text-decoration: underline;
      cursor: pointer;
    }

    & .remember-me {
      font-size: 12px;
    }
  }

  & .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;

    /*& .custom-button .button{*/
    /*& .custom-button >>> button {*/
    & .custom-button::v-deep .button {
      height: 45px;
      width: 183px;
      font-size: 16px;
      border-radius: 5px;
    }

    & .custom-button:first-child::v-deep .button {
      background-color: #f3f4f8;
      color: #929db3;
      box-shadow: none;
      border: solid 1px #d1d1d2;
    }

    & .custom-button::v-deep .button:hover {
      background-color: #4570f5;
      /* opacity is my opinion*/
      opacity: 0.9;
      color: white;
    }

    & .custom-button::v-deep .button:focus {
      outline: none;
    }
  }
}
</style>
