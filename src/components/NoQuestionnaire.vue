<template>
  <div class="container">
    <figure>
      <img src="../assets/cancel.svg" alt="No List" />
    </figure>
    <p>هم اکنون پرسش‌نامه‌ای وجود ندارد !</p>
  </div>
</template>

<script>
export default {
  name: 'NoQuestionnaire',
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  figure img {
    width: 154px;
    height: 139.2px;
    object-fit: contain;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.2px;
    color: #2a3774;
    margin-top: 70px;
    direction: rtl;
  }
}
</style>
