<template>
  <figure class="figure-hand-image">
    <img alt="hand writing image" src="../../assets/34shndow.png" />
  </figure>
</template>

<script>
export default {
  name: 'HandImage',
};
</script>

<style lang="scss" scoped>
.figure-hand-image {
  width: 413px;
  height: 413px;
  // position: absolute;

  .figure-hand-image :after {
    content: '';
    width: 108px;
    height: 108px;
    border-radius: 50%;
    background-image: linear-gradient(#8fa9f6, #4570f5);
    /*margin:0px 0px 0px 500px;*/
    position: absolute;
    left: 565px;
    top: 462px;
    bottom: 198px;
    right: 693px;
    z-index: 1;
    box-shadow: 10px 10px 26px 0 rgba(0, 0, 0, 0.16);
  }

  .figure-hand-image :before {
    content: '';

    width: 247px;
    height: 247px;
    border-radius: 50%;
    border: solid 15px #edeef5;
    position: absolute;
    left: 189px;
    top: 124px;
    bottom: 397px;
    right: 693px;
    top: 125px;
    z-index: -1;
  }
}
</style>
