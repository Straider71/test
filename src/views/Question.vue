<template>
  <div class="question">
    <Descriptive />
    <!-- <MultipleChoiceQuestion /> -->
    <!-- <TwoOptionQuestion /> -->
    <!-- <FinishPage /> -->

    <ProgressBar />
  </div>
</template>

<script>
import Descriptive from '../components/question/Descriptive';
import ProgressBar from '../components/question/ProgressBar';
import TwoOptionQuestion from '../components/question/TwoOptionQuestion';
import MultipleChoiceQuestion from '../components/question/MultipleChoiceQuestion';
import FinishPage from '../components/question-list/FinishPage';

export default {
  name: 'Question',
  components: {
    Descriptive,
    ProgressBar,
    MultipleChoiceQuestion,
    TwoOptionQuestion,
    FinishPage,
  },
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
