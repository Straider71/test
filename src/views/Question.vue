<template>
  <div class="question">
    <multiple-choice-question
      v-if="type === '0'"
      :question="questionText"
      :options="options"
      @get-value="getSelectedValue($event)"
    />
    <two-option-question
      v-else-if="type === '1'"
      :question="questionText"
      :option_1="option_1"
      :option_2="option_2"
      @get-value="getSelectedValue($event)"
    />
    <Descriptive v-if="type === '2'"/>
    <!--     <FinishPage /> -->

    <ProgressBar />
  </div>
</template>

<script>
import Descriptive from "../components/question/Descriptive";
import ProgressBar from "../components/question/ProgressBar";
import TwoOptionQuestion from "../components/question/TwoOptionQuestion";
import MultipleChoiceQuestion from "../components/question/MultipleChoiceQuestion";
import FinishPage from "../components/question-list/FinishPage";

export default {
  name: "Question",
  components: {
    Descriptive,
    ProgressBar,
    MultipleChoiceQuestion,
    TwoOptionQuestion,
    FinishPage
  },
  data() {
    return {
      selectedValue: "",
      options: ["گزینه اول", "گزینه دوم", "گزینه سوم", "گزینه چهارم"],
      questionText:
        "متن سوال اینجا تایپ شودمتن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوالا تا",
      // questionText: "متن تایپ شده را اینجا تایپ کنید",
      type: "0",
      option_1: "صحیح",
      option_2: "غلط"
      // options: ["متن سوال اینجا تایپ شودمتن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال اینجا تایپ شود متن سوال "
      //   , "سیبسیبسی ی", "سیبسی یب", "سشیلشس یسل"
      // ]
    };
  },
  methods: {
    getSelectedValue(event) {
      this.selectedValue = event;
      console.log(event);
    }
  }
};
</script>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
}
</style>
