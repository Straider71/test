<template>
  <div class="container">
    <div class="labels">
      <slot />
      <label v-text="label"></label>
    </div>
    <input class="input" type="text" id="username" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    label: String
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
    background-color: white;
  /*padding-left: 15px;*/
  padding: 19px 19px 19px 15px;
  /*padding-right: 19px;*/
  width: 375px;
  height: 68px;

  & .labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 12px;
  }

  & .input {
    height: 16px;
    text-align: right;
    font-size: 12px;
    border: none;
    margin: 0;
  }

  & .input::placeholder {
    color: #c3c6d5;
  }

  & .input:focus {
    outline: none;
  }
}
</style>
