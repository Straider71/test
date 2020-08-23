<template>
  <div class="status">
    <p class="answer">وضعیت: {{ status }}</p>
    <p class="count">تعداد پرسش: {{ count }}</p>
  </div>
</template>

<script>
export default {
  name: 'QuestionnaireStatus',
  props: {
    count: Number,
    status: String,
  },
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
    color: #7f86aa;
    margin-right: 50px;
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
