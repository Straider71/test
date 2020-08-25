<template>
  <div class="hi">
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

      <div class="forgot-remember">
        <a href="#">رمز عبور را فراموش کرده‌اید؟</a>
        <div class="forgot-div">
          <label for="remember" class="remember-text"
            >مرا بخاطر داشته باش</label
          >
          <input type="checkbox" name="remember" />
          <span class="checkmark"></span>
        </div>
      </div>
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
  name: 'SignIn',
  components: { CustomInput, CustomButton },
};
</script>

<style lang="scss" scoped>
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
  }

  & .forgot-remember {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;

    & a {
      font-size: 14px;
      line-height: 1.36;
      letter-spacing: -0.14px;
      text-align: left;
      color: #7f86aa;
    }

    & .remember-text {
      font-size: 12px;
      line-height: 1.33;
      letter-spacing: -0.12px;
      text-align: right;
      color: #7f86aa;
      padding-right: 10px;
    }

    // & .forgot-div {
    //   // display: flex;

    //   & .remember-text {
    //     width: 20px;
    //     height: 20px;
    //     border-radius: 5px;
    //     background-color: #4570f5;
    //     display: block;
    //     position: relative;
    //     cursor: pointer;
    //     user-select: none;

    //     & input {
    //       position: absolute;
    //       opacity: 0;
    //       cursor: pointer;
    //       height: 0;
    //       width: 0;
    //     }

    //     & .checkmark {
    //       position: absolute;
    //       top: 0;
    //       left: 0;
    //       height: 25px;
    //       width: 25px;
    //       background-color: #eee;

    //       &:after {
    //         left: 9px;
    //         top: 5px;
    //         width: 5px;
    //         height: 10px;
    //         border: solid white;
    //         border-width: 0 3px 3px 0;
    //         -webkit-transform: rotate(45deg);
    //         -ms-transform: rotate(45deg);
    //         transform: rotate(45deg);
    //       }
    //     }

    //     &:hover input ~ .checkmark {
    //       background-color: #ccc;
    //     }
    //     & input:checked ~ .checkmark {
    //       background-color: #2196f3;
    //     }
    //     & input:checked ~ .checkmark:after {
    //       display: block;
    //     }
    //   }
    // }
  }
}
</style>
