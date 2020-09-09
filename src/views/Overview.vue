<template>
  <div class="overview">
    <div class="right"></div>
    <div class="left"></div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'Overview',
};
</script>

<style lang="scss" scoped>
.overview {
  width: 80%;
  height: 75vh;
  // background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 2fr;
  gap: 25px 25px;
  grid-template-areas:
    'left left right right'
    'left left right right'
    'bottom bottom bottom bottom';

  & .left {
    background-color: #fff;
    border-radius: 5px;
    grid-area: left;
  }
  & .right {
    background-color: #fff;
    grid-area: right;
    border-radius: 5px;
  }
  & .bottom {
    background-color: #fff;
    grid-area: bottom;
    border-radius: 5px;
  }
}
</style>
