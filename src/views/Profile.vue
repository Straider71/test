<template>
  <div class="sign-up-container">
    <p class="sub-header">
      تغییر اطلاعات کاربری
    </p>
    <form class="input-list" @submit.prevent="onSubmit">
      <custom-input
        class="round-top-border"
        placeholder="نام و نام خانوادگی خود را وارد کنید"
        label="نام و نام خانوادگی"
        v-model.lazy.trim="name"
      >
        <img src="../assets/input-img/user.svg" />
      </custom-input>
      <custom-input
        placeholder="ایمیل خود را وارد کنید"
        label="ایمیل"
        v-model.lazy.trim="email"
        type="email"
      >
        <img src="../assets/input-img/mail.svg" />
      </custom-input>
      <custom-input
        placeholder="رمز عبور خود را وارد کنید"
        label="رمز عبور"
        v-model="password"
        type="password"
      >
        <img src="../assets/input-img/lock.svg" />
      </custom-input>
      <custom-input
        class="round-bottom-border"
        placeholder="رمز عبور خود را مجدد وارد کنید"
        label="تکرار رمز عبور"
        v-model="checkPassword"
        type="password"
      >
        <img src="../assets/input-img/lock.svg" />
      </custom-input>
      <div class="buttons">
        <router-link to="/" class="link">
          <CustomButton class="custom-button">
            <p>صفحه اصلی</p>
          </CustomButton>
        </router-link>
        <CustomButton class="custom-button">
          <p>ثبت</p>
        </CustomButton>
      </div>
    </form>
  </div>
</template>

<script>
import CustomInput from '../components/global/CustomInput';
import CustomButton from '../components/global/CustomButton';
import { mapActions } from 'vuex';

export default {
  name: 'SingUp',
  components: { CustomInput, CustomButton },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      checkPassword: '',
      errors: null,
    };
  },
  methods: {
    ...mapActions(['signup']),

    onSubmit() {
      // if (!this.name || !this.email || !this.password || !this.checkPassword) {
      //   this.$toasted.error('وارد کردن تمام فیلدها اجباری است');
      // } else if (!this.validEmail(this.email)) {
      //   this.$toasted.error('ایمیل معتبر وارد کنید');
      // } else if (this.password !== this.checkPassword) {
      //   this.$toasted.error('رمز عبور خود را دوباره وارد فرمایید');
      // } else {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.signup(userData)
        // this.$store
        //   .dispatch('signup', userData)
        .then(() => {
          this.$router.push({ name: 'QuestionnaireListPage' });
          this.$toasted.success('اطلاعات شما با موفقیت ثبت گردید');
        })
        .catch(err => {
          this.$toasted.error('کاربری با این ایمیل وجود دارد');
        });
    },
  },

  validEmail: function(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  // },
};
</script>

<style scoped lang="scss">
.sign-up-container {
  width: 375px;
  max-width: 375px;
  height: 267px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;

  & .sub-header {
    text-align: center;
    color: #7f86aa;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: -0.14px;
    font-weight: bold;
    margin-top: 10px;
  }

  .input-list {
    box-shadow: 10px 8px 6px 0 #edeef5;
    width: 375px;
    height: 136px;
    margin-top: 40px;

    & > * {
      margin-top: 10px;
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
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin-top: 40px;

      & .link {
        text-decoration: none;
      }
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
}
</style>
