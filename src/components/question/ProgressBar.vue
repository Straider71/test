<template>
  <div class="progress-bar"></div>
</template>

<script>
import CustomButton from '../global/CustomButton';
export default {
  name: 'ProgressBar',
  components: {
    CustomButton,
  },
};
</script>

<style lang="scss" scoped>
.progress-bar {
  width: 80%;
  height: 70px;
  box-shadow: 0 5px 10px 0 #f1f1f2;
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
