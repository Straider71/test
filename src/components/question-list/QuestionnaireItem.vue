<template>
  <div class="container">
    <router-link :to="`/questions/35`">
      <CustomButton :disable="customButtonDisabled()" @click.native="goRoute">
        <img
          v-if="customButtonDisabled()"
          src="../../assets/arrow-gray.svg"
          alt="arrow"
          class="arrow"
        />
        <img
          v-else
          src="../../assets/arrow-white.svg"
          alt="arrow"
          class="arrow"
        />
        <p>شروع</p>
      </CustomButton>
    </router-link>

    <div class="status">
      <QuestionnaireStatus :count="count" :status="status" />
    </div>

    <div class="title">
      <QuestionnaireTitle :title="title" />
    </div>
  </div>
</template>

<script>
import CustomButton from '../global/CustomButton';
import QuestionnaireTitle from './QuestionnaireTitle';
import QuestionnaireStatus from './QuestionnaireStatus';
import EventService from '@/services/EventService.js';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'QuestionnaireItem',
  data() {
    return {
      questionsArray: null,
    };
  },
  components: {
    CustomButton,
    QuestionnaireTitle,
    QuestionnaireStatus,
  },
  props: {
    status: String,
    title: String,
    count: String,
  },
  computed: { ...mapState(['questionnaires']) },
  methods: {
    ...mapActions(['fetchQuestions']),
    ...mapMutations(['SET_QUESTIONNAIRE_TITLE']),

    customButtonDisabled() {
      return this.status === '2';
    },
    async goRoute() {
      this.SET_QUESTIONNAIRE_TITLE(this.title);
      this.fetchQuestions(35);
    },
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

  & a {
    text-decoration: none;
  }

  & .status {
    width: 350px;
  }

  & .title {
    width: 150px;
  }

  & .arrow {
    width: 25px;
    height: 13.3px;
    padding-right: 10px;
  }

  & p {
    padding-bottom: 6px;
  }
}
@media (max-width: 640px) {
  .container {
    flex-direction: column-reverse;
    height: auto;
    padding: 15px 0px;
  }
}
</style>
