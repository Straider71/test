<template>
  <div class="container">
    <form class="title" @submit.prevent="onSubmit">
      <CustomButton class="custom-button">
        <p>ثبت</p>
      </CustomButton>
      <custom-input
        class="round-top-border custominput"
        placeholder="نام پرسشنامه را وارد کنید"
        label="نام پرسشنامه"
        v-model.lazy.trim="title"
      >
        <img src="@/assets/input-img/mail.svg" />
      </custom-input>
    </form>

    <div class="questionnares">
      <div v-for="(questionnaire, idx) in adminQuestionnaires" :key="idx">
        <div class="item">
          <CustomButton
            class="custom-button"
            @click.native="
              goQuestion(adminQuestionnaires[idx].questionnaire_id)
            "
          >
            <p>انتخاب پرسشنامه</p>
          </CustomButton>
          <div class="number">
            تعداد سوال : {{ questionnaire.question_num }}
          </div>
          <div class="title">
            {{ questionnaire.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '@/components/global/CustomInput.vue';
import CustomButton from '@/components/global/CustomButton.vue';
import {
  GET_ALL_ADMIN_QUESTIONNAIRE,
  CREATE_QUESTIONNARE,
} from '@/store/actions.type.js';
import { SET_CREATE_ID } from '@/store/mutations.type.js';
import { mapState } from 'vuex';
export default {
  name: 'createQuestionnare',
  components: {
    CustomInput,
    CustomButton,
  },
  data() {
    return {
      title: '',
    };
  },
  computed: {
    ...mapState({
      adminQuestionnaires: state => state.questionnaire.adminQuestionnaires,
    }),
  },
  created() {
    this.$store.dispatch(GET_ALL_ADMIN_QUESTIONNAIRE);
  },
  methods: {
    onSubmit() {
      if (!this.title) {
        this.$toasted.error('نام پرسشنامه را وراد فرمایید');
      } else {
        this.$store.dispatch(CREATE_QUESTIONNARE, this.title);
      }
    },
    goQuestion(id) {
      this.$store.commit(SET_CREATE_ID, id);
      this.$router.push({
        name: 'createQuestion',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  height: 75vh;
  // background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  .title {
    display: flex;
    // justify-content: space-around;
    align-items: center;

    & .custominput {
      max-width: 800px;
      border-radius: 10px;
      margin-top: 0;
    }

    & .custom-button {
      margin-right: -50px;
      margin-left: auto;
    }
  }

  .questionnares {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    max-height: 450px;
    overflow-y: auto;

    & .item {
      display: flex;
      justify-content: space-around;
      flex-direction: row-reverse;
      align-items: center;
      height: 70px;
      max-height: 600px;
      background-color: #fff;
      border-radius: 10px;
      padding: 5px;
      margin-top: 10px;
      direction: rtl;
      box-shadow: 10px 8px 6px 0 #edeef5;

      & .title {
        color: #2a3774;
        width: 100px;
        text-align: right;
        max-width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      & .number {
        color: #7f86aa;
      }

      & .custom-button::v-deep .button {
        height: 45px;
        width: 123px;
        font-size: 14px;
        border-radius: 5px;
        background-color: #65c1eb;
      }
    }
  }
}

@media (max-width: 1330px) {
  .custominput {
    width: 600px;
  }
}

@media (max-width: 1075px) {
  .custominput {
    width: 400px;
  }
}
@media (max-width: 820px) {
  .title {
    flex-direction: column-reverse;

    & .custom-button {
      margin-right: auto !important;
      margin-left: auto !important;
      margin-top: 10px;
    }
  }
  .custominput {
    width: 80%;
  }
  .questionnares {
    margin-top: 0 !important;
    width: 80%;
  }
  .item {
    flex-direction: column-reverse !important;
    height: 100px !important;
    width: 80%;
  }
}
</style>
