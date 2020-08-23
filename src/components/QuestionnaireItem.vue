<template>
  <div class="container">
    <CustomButton :disable="customButtonDisabled()">
      <img
        v-if="customButtonDisabled()"
        src="../assets/arrow-gray.svg"
        alt="arrow"
        class="arrow"
      />
      <img v-else src="../assets/arrow-white.svg" alt="arrow" class="arrow" />
      شروع
    </CustomButton>

    <QuestionnaireStatus :count="count" :status="status" />

    <QuestionnaireTitle :title="title" />
  </div>
</template>

<script>
import CustomButton from "./CustomButton";
import QuestionnaireTitle from "./QuestionnaireTitle";
import QuestionnaireStatus from "./QuestionnaireStatus";

export default {
  name: "QuestionnaireItem",
  components: {
    CustomButton,
    QuestionnaireTitle,
    QuestionnaireStatus
  },
  props: {
    status: String,
    title: String,
    count: String
  },
  methods: {
    customButtonDisabled() {
      return this.status === "2";
    }
  }
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

  & .arrow {
    width: 25px;
    height: 13.3px;
    padding-right: 10px;
  }

  @media (max-width: 640px) {
    .container {
      flex-direction: column-reverse;
      height: auto;
      padding: 15px 0px;
    }
  }
}
</style>
