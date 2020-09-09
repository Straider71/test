<template>
  <div class="navbar-title">
    <p>‌{{ questionnaireTitle }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'PageTitle',
  computed: { ...mapState(['questionnaireTitle']) },
  methods: { ...mapMutations(['SET_QUESTIONNAIRE_TITLE']) },
  watch: {
    $route(to) {
      if (to.fullPath == '/') {
        this.SET_QUESTIONNAIRE_TITLE('لیست پرسشنامه‌ها');
      }
      if (to.fullPath == '/profile/5') {
        this.SET_QUESTIONNAIRE_TITLE('پروفایل');
      }
    },
  },
  // created: {

  // }
};
</script>

<style lang="scss" scoped>
.navbar-title {
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
  color: #4570f5;
}

@media (max-width: 576px) {
  .navbar-title {
    flex-shrink: 1;
    flex-basis: 50%;
    text-align: right;
  }
}
@media (max-width: 415px) {
  .navbar-title {
    flex-shrink: 1;
    flex-basis: 70%;
  }
}
</style>
