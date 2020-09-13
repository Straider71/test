<template>
  <div class="sign-up-container">
    <div class="info">
      <p class="sub-header">اطلاعات کاربری</p>
      <form class="input-list-top" @submit.prevent="onSubmitName">
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
        <div class="buttons">
          <CustomButton class="custom-button">
            <p>بروزرسانی اطلاعات کاربری</p>
          </CustomButton>
        </div>
      </form>
    </div>
    <div class="avatar"><Avatar /></div>
    <div class="password">
      <p class="sub-header">رمز عبور کاربر</p>
      <form class="input-list" @submit.prevent="onSubmitPass">
        <custom-input
          placeholder="رمز عبور کنونی خود را وارد کنید"
          label="رمز عبور کنونی"
          v-model="currentPassword"
          type="password"
        >
          <img src="../assets/input-img/lock.svg" />
        </custom-input>
        <custom-input
          placeholder="رمز عبور جدید خود را وارد کنید"
          label="رمز عبور جدید"
          v-model="password"
          type="password"
        >
          <img src="../assets/input-img/lock.svg" />
        </custom-input>
        <custom-input
          class="round-bottom-border"
          placeholder="رمز عبور جدید خود را مجدد وارد کنید"
          label="تکرار رمز عبور جدید"
          v-model="checkPassword"
          type="password"
        >
          <img src="../assets/input-img/lock.svg" />
        </custom-input>
        <div class="buttons">
          <CustomButton class="custom-button">
            <p>بروزرسانی رمز عبور</p>
          </CustomButton>
        </div>
      </form>
    </div>
    <div class="summery">
      <div class="number">
        <p>پرسشنامه‌های پاسخ داده شده</p>

        <div>{{ completeQuestionnaires }} / {{ questionCount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '../components/global/CustomInput';
import CustomButton from '../components/global/CustomButton';
import Avatar from '../components/global/Avatar';
import {
  UPDATE_ME,
  NEW_PASSWORD,
  COMPLETE_QUESTIONNAIRE,
} from '@/store/actions.type.js';
import { SET_USER_DATA } from '@/store/mutations.type.js';
import { mapActions, mapState, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'Profile',
  components: { CustomInput, CustomButton, Avatar },
  data() {
    return {
      name: `${this.$store.state.user.user.username}`,
      email: `${this.$store.state.user.user.email}`,
      password: '',
      checkPassword: '',
      currentPassword: '',
    };
  },
  computed: {
    ...mapState({
      questionCount: state => state.questionnaire.questionCount,
      completeQuestionnaires: state =>
        state.questionnaire.completeQuestionnaires,
    }),
    // ...mapGetters(['completeQuestionnaires']),
  },
  async created() {
    this.$store.dispatch(COMPLETE_QUESTIONNAIRE);
  },
  methods: {
    async onSubmitName() {
      if (!this.name || !this.email) {
        this.$toasted.error('وارد کردن تمام فیلدها اجباری است');
      }
      //  else if (!this.validEmail(this.email)) {
      //   this.$toasted.error('ایمیل معتبر وارد کنید');
      // }
      else {
        const userData = {
          name: this.name,
          email: this.email,
        };
        const res = await this.$store.dispatch(UPDATE_ME, userData);

        // this.$store.commit(SET_USER_DATA, {
        //   username: userData.name,
        //   email: userData.email,
        // });
      }
    },
    async onSubmitPass() {
      if (!this.password || !this.checkPassword || !this.currentPassword) {
        this.$toasted.error('وارد کردن تمام فیلدها اجباری است');
      } else if (this.password !== this.checkPassword) {
        this.$toasted.error('رمز عبور خود را دوباره وارد فرمایید');
      } else if (this.password == this.currentPassword) {
        this.$toasted.error('رمز عبور جدید نباید تکراری باشد ');
      } else {
        const userData = {
          current_password: this.currentPassword,
          new_password: this.password,
        };

        await this.$store.dispatch(NEW_PASSWORD, userData);
      }
    },
  },

  validEmail: function(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
};
</script>

<style scoped lang="scss">
.sign-up-container {
  display: grid;
  // grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-auto-flow: column;
  // grid-template-rows: minmax(260px, 1fr);
  grid-template-rows: 1fr 1fr;
  // grid-template-rows: auto;
  grid-gap: 3rem;
  grid-template-areas:
    'avatar info '
    'summery password ';

  // width: 60%;
  max-width: 1075px;
  height: 267px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;

  & .sub-header {
    text-align: center;
    color: #7f86aa;
    font-size: 16px;
    line-height: 1.36;
    letter-spacing: -0.14px;
    font-weight: bold;
    margin-top: 10px;
    width: 375px;
  }
  .input-list {
    box-shadow: 10px 8px 6px 0 #edeef5;
    width: 375px;
    height: 136px;
    margin-top: 20px;

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
      margin-top: 20px;

      & .link {
        text-decoration: none;
      }

      & .custom-button::v-deep .button {
        height: 45px;
        width: 375px;
        font-size: 16px;
        border-radius: 5px;
      }
    }
  }

  .input-list-top {
    // box-shadow: 10px 8px 6px 0 #edeef5;
    // width: 375px;
    // height: 136px;
    margin-top: 20px;

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
      margin-top: 20px;

      & .custom-button::v-deep .button {
        height: 45px;
        width: 375px;
        font-size: 16px;
        border-radius: 5px;
      }
    }
  }
}

.info {
  grid-area: info;
  margin-left: auto;
  margin-right: auto;
}

.avatar {
  grid-area: avatar;
}

.password {
  grid-area: password;
  margin-left: auto;
  margin-right: auto;
}

.summery {
  grid-area: summery;

  background-color: #bccdfd;
  margin-top: 55px;
  margin-left: 45px;
  height: 280px;
  width: 420px;
  border-radius: 20px;
  box-shadow: 0 0 150px 0 #b6befb;

  background: #98aeee
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='154.033' height='139.234' viewBox='0 0 154.033 139.234'%3E%3Cdefs%3E%3Cstyle%3E .cls-1%7Bfill:%23f1f1f1%7D.cls-2%7Bfill:%23e3e3e3%7D %3C/style%3E%3C/defs%3E%3Cg id='cancel' transform='translate(0 -23.539)'%3E%3Cpath id='Path_83' d='M33.978 23.539H6.731A6.739 6.739 0 0 0 0 30.272v27.245a6.74 6.74 0 0 0 6.731 6.734h27.247a6.741 6.741 0 0 0 6.733-6.734V30.272a6.741 6.741 0 0 0-6.733-6.733zM4.386 30.272a2.349 2.349 0 0 1 2.345-2.347h27.247a2.35 2.35 0 0 1 2.348 2.347v27.245a2.351 2.351 0 0 1-2.348 2.348H6.731a2.349 2.349 0 0 1-2.345-2.348z' class='cls-1' data-name='Path 83'/%3E%3Cpath id='Path_84' d='M178.874 50.741h94.107a2.193 2.193 0 1 0 0-4.386h-94.107a2.193 2.193 0 1 0 0 4.386z' class='cls-1' data-name='Path 84' transform='translate(-121.141 -15.644)'/%3E%3Cpath id='Path_85' d='M178.874 85.7h74.363a2.193 2.193 0 1 0 0-4.386h-74.363a2.193 2.193 0 1 0 0 4.386z' class='cls-1' data-name='Path 85' transform='translate(-121.141 -39.616)'/%3E%3Cpath id='Path_86' d='M272.981 116.284h-94.107a2.193 2.193 0 1 0 0 4.386h94.107a2.193 2.193 0 1 0 0-4.386z' class='cls-1' data-name='Path 86' transform='translate(-121.141 -63.59)'/%3E%3Cpath id='Path_87' d='M272.981 203.059h-94.107a2.193 2.193 0 1 0 0 4.386h94.107a2.193 2.193 0 1 0 0-4.386z' class='cls-2' data-name='Path 87' transform='translate(-121.141 -123.087)'/%3E%3Cpath id='Path_88' d='M178.874 242.411h74.363a2.193 2.193 0 1 0 0-4.386h-74.363a2.193 2.193 0 1 0 0 4.386z' class='cls-2' data-name='Path 88' transform='translate(-121.141 -147.062)'/%3E%3Cpath id='Path_89' d='M272.981 272.991h-94.107a2.193 2.193 0 1 0 0 4.386h94.107a2.193 2.193 0 0 0 0-4.386z' class='cls-2' data-name='Path 89' transform='translate(-121.141 -171.036)'/%3E%3Cpath id='Path_90' d='M272.981 359.767h-94.107a2.193 2.193 0 1 0 0 4.386h94.107a2.193 2.193 0 1 0 0-4.386z' class='cls-1' data-name='Path 90' transform='translate(-121.141 -230.534)'/%3E%3Cpath id='Path_91' d='M178.874 399.118h74.363a2.193 2.193 0 1 0 0-4.386h-74.363a2.193 2.193 0 1 0 0 4.386z' class='cls-1' data-name='Path 91' transform='translate(-121.141 -254.507)'/%3E%3Cpath id='Path_92' d='M272.981 429.7h-94.107a2.193 2.193 0 1 0 0 4.386h94.107a2.193 2.193 0 1 0 0-4.386z' class='cls-1' data-name='Path 92' transform='translate(-121.141 -278.48)'/%3E%3Cpath id='Path_93' d='M28.017 72.475a2.193 2.193 0 0 0 3.742 1.554l7.805-7.794 7.806 7.793a2.193 2.193 0 1 0 3.1-3.1l-7.8-7.789 7.8-7.789a2.193 2.193 0 0 0-3.1-3.1l-7.806 7.794-7.805-7.794a2.193 2.193 0 0 0-3.1 3.1l7.8 7.789-7.8 7.789a2.178 2.178 0 0 0-.642 1.547z' class='cls-1' data-name='Path 93' transform='translate(-19.21 -19.242)'/%3E%3Cpath id='Path_94' d='M28.017 385.892a2.193 2.193 0 0 0 3.742 1.554l7.805-7.793 7.806 7.793a2.193 2.193 0 1 0 3.1-3.1l-7.8-7.789 7.8-7.789a2.193 2.193 0 1 0-3.1-3.1l-7.806 7.793-7.805-7.793a2.193 2.193 0 1 0-3.1 3.1l7.8 7.789-7.8 7.789a2.177 2.177 0 0 0-.642 1.546z' class='cls-1' data-name='Path 94' transform='translate(-19.21 -234.136)'/%3E%3Cpath id='Path_95' d='M33.978 180.248H6.731A6.739 6.739 0 0 0 0 186.98v27.246a6.739 6.739 0 0 0 6.731 6.733h27.247a6.74 6.74 0 0 0 6.733-6.733V186.98a6.74 6.74 0 0 0-6.733-6.732zM4.386 186.98a2.349 2.349 0 0 1 2.345-2.347h27.247a2.35 2.35 0 0 1 2.348 2.347v27.246a2.351 2.351 0 0 1-2.348 2.348H6.731a2.349 2.349 0 0 1-2.345-2.348z' class='cls-2' data-name='Path 95' transform='translate(0 -107.447)'/%3E%3Cpath id='Path_96' d='M33.978 336.952H6.731A6.739 6.739 0 0 0 0 343.685v27.245a6.74 6.74 0 0 0 6.731 6.734h27.247a6.741 6.741 0 0 0 6.733-6.734v-27.245a6.741 6.741 0 0 0-6.733-6.733zm-29.592 6.733a2.349 2.349 0 0 1 2.345-2.347h27.247a2.35 2.35 0 0 1 2.348 2.347v27.245a2.351 2.351 0 0 1-2.348 2.348H6.731a2.349 2.349 0 0 1-2.345-2.348z' class='cls-1' data-name='Path 96' transform='translate(0 -214.891)'/%3E%3Cpath id='Path_97' d='M34.088 230.342a2.189 2.189 0 0 0 1.659.759h.122a2.205 2.205 0 0 0 1.686-.948L50.7 211a2.193 2.193 0 1 0-3.615-2.482l-11.534 16.8-3.769-4.363a2.193 2.193 0 0 0-3.319 2.867z' class='cls-2' data-name='Path 97' transform='translate(-19.148 -126.179)'/%3E%3C/g%3E%3C/svg%3E%0A")
    no-repeat bottom 10% right 10%;
  // background: no-repeat;

  & .number {
    color: #fff;

    font-weight: bold;

    p {
      font-size: 25px;
      text-align: center;
      margin: 25px 15px 0 0;
    }
    div {
      text-align: left;
      margin: 80px 0 10px 30px;

      font-size: 50px;
    }
  }
}

@media (max-width: 1046px) {
  .sign-up-container {
    width: 80%;
    margin-right: 190px;
  }
}

@media (max-width: 950px) {
  .summery {
    display: none;
  }
  .sign-up-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    // margin-right: 190px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    overflow-y: scroll;
    height: 89vh;

    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    scrollbar-width: none;
  }
}
</style>
