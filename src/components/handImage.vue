<template>
  <figure class="figure-hand-image">
    <img alt="image can't load" src="../assets/34shndow.png" />
  </figure>
</template>

<script>
export default {
  name: "handImage"
};
</script>

<style scoped>
.figure-hand-image {

}
.figure-hand-image::before{

}
.figure-hand-image::after{
    content: "";
    width: 200px;
    height: 200px;
    background: #16167c;
    border-radius: 50%;
    position: absolute;
    top:-100px;
    right:-100px;
    z-index: -1;
}
</style>
