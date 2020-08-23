<template>
  <div class="status">

    <p class="answer">وضعیت: <span :class="answerClass()">{{ statusString }}</span></p>
    <p class="count">تعداد پرسش: {{ count }}</p>
  </div>
</template>

<script>
export default {
  name: "QuestionnaireStatus",
  data(){
    return {
      statusString: 'سیب',
    }
  },
  props: {
    count: Number,
    status: String
  },
  methods: {
    answerClass() {
      let answerClass = '';
      if(this.status === '0'){
        this.statusString = 'پاسخ داده نشده'
      } if (this.status === '1') {
        answerClass += 'answer-status-one';
        this.statusString = 'ادامه'
      } if(this.status === '2') {
        answerClass += 'answer-status-two';
        this.statusString = 'پاسخ داده شده'
      }
      return answerClass;
    }
  }
};
</script>

<style lang="scss" scoped>
.status {
  display: flex;
  align-items: center;
  margin-right: 40px;

  .answer {
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: -0.14px;
    margin-right: 50px;
    color: #7f86aa;

    .answer-status-one{
      color: lightblue;
    }

    .answer-status-two{
      color: #05d667;
    }
  }

  .count {
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: -0.14px;
    color: #7f86aa;
  }
}

@media (max-width: 640px) {
  .status {
    margin-top: 10px;
  }
}
</style>
