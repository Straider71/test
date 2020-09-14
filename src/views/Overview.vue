<template>
  <div class="overview">
    <div class="right">
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
    <div class="left">
      <Chart
        width="1000"
        height="300"
        id="chart1"
        title="# of Votes"
        type="doughnut"
        :labels="['پرسشنامه‌های پاسخ داده شده', 'پرسشنامه‌های پاسخ داده نشده']"
        :data="[5, 5]"
        :background-color="[
          'rgba(92, 187, 255, 0.78)',
          'rgba(0, 119, 204, 0.78)',
        ]"
      ></Chart>
    </div>
    <div class="bottom">
      <Chart
        width="1000"
        height="300"
        id="chart3"
        title="# of Votes"
        type="polarArea"
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

export default {
  name: 'Overview',
  components: {
    Chart,
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
