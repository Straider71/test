<template>
  <div class="multi-choice-question-container">
    <QuestionTitle :text="question" />
    <QuestionSubHeader text="لطفا یک گزینه را انتخاب کنید" />
    <form class="options" action="#">
      <AnswerItemRadio
              class="hi"
        v-for="option in options"
        :key="option"
        :text="option"
        @change-option="onChange($event)"
      />
    </form>
  </div>
</template>

<script>
import QuestionTitle from "../question/QuestionTitle";
import QuestionSubHeader from "./QuestionSubHeader";
import AnswerItemRadio from "./AnswerItemRadio";
export default {
  name: "MultipleChoiceQuestion",
  components: { QuestionTitle, QuestionSubHeader, AnswerItemRadio },
  props: {
    options: Array,
    question: String
  },
  methods: {
    onChange(event) {
      this.$emit("get-value", event);
    }
  }
};
</script>

<style scoped lang="scss">
.multi-choice-question-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .options {
    height: 135px;
    min-height: 135px;
    width: 856px;
    max-width: 950px;
    display: flex;
    flex-flow: row-reverse wrap;

    @media screen and (max-width: 844px) {
      height: 100%;
      width: auto;
      align-items: center;
      justify-content: center;
      /*flex-flow: column nowrap;*/
    }

    @media screen and (max-width: 450px) {
      height: auto;
      padding: 0;
      margin: 0;
      width: 100%;
      max-width: 100%;
      align-items: center;
      flex-flow: column nowrap;
    }

    & > * {
      max-width: 413px;
      margin: 7.5px;
    }
  }
}
</style>
