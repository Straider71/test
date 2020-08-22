<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <QuestionauryItem/>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import QuestionauryItem from "../components/QuestionauryItem";
export default {
  name: 'Home',
  components: {
      QuestionauryItem,
  }
}
</script>
