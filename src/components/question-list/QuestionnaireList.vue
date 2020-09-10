<template>
  <div class="container">
    <div v-if="this.$store.state.noQuestion">
      <ListTitle :questionCount="this.$store.state.questionCount" />
    </div>
    <div class="question-list" v-if="this.$store.state.noQuestion">
      <div v-for="(questionnaire, idx) in questionnaires" :key="idx">
        <QuestionnaireItem
          :count="questionnaire.question_num.toString()"
          :title="questionnaire.title"
          :status="questionnaire.state"
          :id="questionnaires[idx].questionnaire_id"
        />
      </div>
    </div>
    <div v-else>
      <NoQuestionnaire />
    </div>
    <div class="paginate" v-if="totalPageNumber !== 1">
      <span class="next">
        <img src="@/assets/nextarrow.svg" alt="arrow" @click="nextPage" />
      </span>
      <ul class="pages">
        <li
          v-for="(page, idx) in totalPageNumber"
          :key="idx"
          class="page"
          :class="{ active: page === pageNumber }"
          @click="loadPage(page)"
        >
          {{ page }}
        </li>
      </ul>
      <span class="back">
        <img src="@/assets/backarrow.svg" alt="arrow" @click="prevPage" />
      </span>
    </div>
  </div>
</template>

<script>
import QuestionnaireItem from './QuestionnaireItem.vue';
import ListTitle from './ListTitle';
import NoQuestionnaire from './NoQuestionnaire';
import EventService from '../../services/EventService';

import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'QuestionnaireList',
  components: {
    QuestionnaireItem,
    ListTitle,
    NoQuestionnaire,
  },

  created() {
    this.fetchQuesetionnaires({ order: this.orderType, page: this.pageNumber });
    console.log(this.questionnaires);
  },

  computed: {
    ...mapState([
      'questionnaires',
      'orderType',
      'pageNumber',
      'totalPageNumber',
    ]),
    // ...mapGetters(['goNext', 'goPrev']),
  },
  methods: {
    ...mapActions(['fetchQuesetionnaires']),
    ...mapMutations(['SET_PAGE_NUMBER']),

    nextPage() {
      let page = this.$store.state.pageNumber + 1;
      this.SET_PAGE_NUMBER(page);
      // this.goNext;
      this.fetchQuesetionnaires({
        order: this.orderType,
        page,
      });
    },

    loadPage(page) {
      this.SET_PAGE_NUMBER(page);

      this.fetchQuesetionnaires({
        order: this.orderType,
        page,
      });
    },

    prevPage() {
      let page = this.$store.state.pageNumber - 1;
      this.SET_PAGE_NUMBER(page);
      // this.goPrev;
      this.fetchQuesetionnaires({
        order: this.orderType,
        page,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.paginate {
  max-width: 380px;
  min-width: 120px;
  width: auto;
  height: 49px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 #f1f1f2;
  background-color: #fff;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .next {
    margin-left: 10px;
    margin-top: 6px;
    cursor: pointer;
  }

  & .back {
    margin-right: 10px;
    margin-top: 6px;
    cursor: pointer;
  }

  & .pages {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    width: auto;

    & .page {
      // width: auto;
      height: 30px;
      width: 30px;
      font-size: 16px;
      line-height: 1.38;
      color: #aeaeae;
      cursor: pointer;
      margin-right: 5px;
      border-radius: 50%;
      list-style: none;
      padding: 5px;

      &:focus,
      &:hover,
      &:active,
      &.active {
        // border-radius: 50%;
        background-color: #4570f5;
        color: #fff;
      }
    }
  }
}
.question-list {
  max-height: 535px;
  // overflow-y: hidden;
  // overflow-x: hidden;
  // scrollbar-color: #4570f5 rgba(0, 0, 0, 0.1);
  // scrollbar-width: thin;

  // &::-webkit-scrollbar {
  //   width: 4px;
  // }

  // &::-webkit-scrollbar-track {
  //   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  // }

  // &::-webkit-scrollbar-thumb {
  //   background-color: #4570f5;
  //   // outline: 1px solid rgb(72, 117, 161);
  // }
}
@media (max-width: 890px) {
  .container {
    width: 100%;

    & .question-list {
      max-height: 80vh;
    }
  }
}
</style>
