<template>
  <div class="progress-bar">
    <div @click="makeProgress">
      <CustomButton class="deep-left">
        <img src="../../assets/arrow-white.svg" alt="arrow" />
        <p>سوال بعدی</p>
      </CustomButton>
    </div>

    <div class="gray">
      <div class="blue-circle" data-text="progress">
        <div class="before"></div>
        <div class="after">
          <div class="number">{{ number }}</div>
          <div class="percent">{{ progress + '%' }} {{ percent }}</div>
        </div>
      </div>
      <div class="blue" :style="{ width: progress + '%' }"></div>
    </div>

    <div @click="minusProgress">
      <CustomButton class="deep-right">
        <img src="../../assets/arrow-back.svg" alt="arrow" />
      </CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from '../global/CustomButton';
export default {
  name: 'ProgressBar',
  components: {
    CustomButton,
  },
  data() {
    return {
      progress: 0,
      percent: 'تکمیل شده',
      number: 'سوال 8/10',
    };
  },
  methods: {
    makeProgress() {
      if (this.progress < 100) {
        this.progress += 10;
      }
    },
    minusProgress() {
      if (this.progress > 0) {
        this.progress -= 10;
      }
    },
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
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  // margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  & .deep-left::v-deep .button {
    width: 151px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(69, 112, 245, 0.6);

    & p {
      font-size: 16px;
      line-height: 1.38;
      letter-spacing: -0.16px;
      color: #ffffff;
      padding: 0 0 6px 10px;
    }
  }

  & .deep-right::v-deep .button {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: #e6e9ef;
    box-shadow: none;
  }

  & .gray {
    width: 60%;
    height: 5px;
    border-radius: 10px;
    background-color: #e6e9ef;
    display: flex;
    justify-content: flex-end;

    & .blue {
      // width: 290px;
      height: 5px;
      border-radius: 10px;
      background-color: #4570f5;
    }

    & .blue-circle {
      width: 12px;
      height: 12px;
      background-color: #4570f5;
      border-radius: 50%;
      top: -3px;
      position: relative;

      & {
        & .after {
          bottom: 1.35em;
          color: #fff;
          display: flex;
          direction: rtl;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          white-space: nowrap;
          z-index: 98;
          left: -105px;
          width: 214px;
          height: 38px;
          border-radius: 3px;
          background-color: #2e3133;
          font-size: 14px;
          line-height: 2;
          letter-spacing: -0.14px;
          padding-top: 2px;
          padding: 0 25px;

          & .number {
            color: #fcb833;
          }
        }

        & .before {
          border: solid;
          border-color: #111 transparent;
          border-color: rgba(0, 0, 0, 0.8) transparent;
          border-width: 0.4em 0.4em 0 0.4em;
          bottom: 1em;
          content: '';
          display: block;
          // left: 105px;
          position: absolute;
          z-index: 99;
        }
      }
    }
  }
}

@media (max-width: 750px) {
  .progress-bar {
    & .deep-left::v-deep .button {
      width: 50px;
      height: 50px;

      & p {
        display: none;
      }
    }
  }
}
</style>
