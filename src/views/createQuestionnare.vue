<template>
  <div class="container">
    <CustomInput />
    <CustomInput />

    <CustomButton />
  </div>
</template>

<script>
import CustomInput from '@/components/global/CustomInput.vue';
import CustomButton from '@/components/global/CustomButton.vue';

export default {
  name: 'createQuestionnare',
  components: {
    CustomInput,
    CustomButton,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  height: 75vh;
  // background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
</style>
