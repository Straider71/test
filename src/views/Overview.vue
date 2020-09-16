<template>
  <div class="overview">
    <div class="top">
      <div class="right">
        <Chart
          width="1000"
          height="300"
          id="chart1"
          title="# of Votes"
          type="doughnut"
          :labels="[
            'پرسشنامه‌های پاسخ داده شده',
            'پرسشنامه‌های پاسخ داده نشده',
          ]"
          :data="[5, 5]"
          :background-color="[
            'rgba(92, 187, 255, 0.78)',
            'rgba(0, 119, 204, 0.78)',
          ]"
        ></Chart>
      </div>
      <div class="left">
        <Chart
          width="1000"
          height="300"
          id="chart3"
          title="# of Votes"
          type="polarArea"
          :labels="[
            'پرسشنامه‌های پاسخ داده شده',
            'پرسشنامه‌های پاسخ داده نشده',
          ]"
          :data="[5, 5]"
          :background-color="[
            'rgba(92, 187, 255, 0.78)',
            'rgba(0, 119, 204, 0.78)',
          ]"
        ></Chart>
      </div>
    </div>
    <div class="bottom">
      <Chart
        width="1000"
        height="300"
        id="chart2"
        title="# of Votes"
        type="bar"
        :labels="['پرسشنامه‌های پاسخ داده شده', 'پرسشنامه‌های پاسخ داده نشده']"
        :data="[5, 5]"
        :background-color="[
          'rgba(92, 187, 255, 0.78)',
          'rgba(0, 119, 204, 0.78)',
        ]"
      ></Chart>
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart';
import { GET_STATS } from '@/store/actions.type.js';
import { SET_QUESTIONNAIRE_TITLE } from '@/store/mutations.type.js';

export default {
  name: 'Overview',
  components: {
    Chart,
  },
  created() {
    this.$store.commit(SET_QUESTIONNAIRE_TITLE, 'پنل ادمین');
  },
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

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .top {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .left {
    // background-color: #fff;
    border-radius: 5px;
  }
  & .right {
    // background-color: #fff;

    border-radius: 5px;
  }
  & .bottom {
    // background-color: #fff;

    border-radius: 5px;
  }
}
</style>
