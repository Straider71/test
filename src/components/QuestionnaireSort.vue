<template>
  <div class="sort-list">
    <!--    <button class="dropbtn">-->
    <!--      <img src="../assets/arrow.svg" alt="" /> جدیدترین-->
    <!--    </button>-->
    <!--    <div class="dropdown-content">-->
    <!--      <a href="#">Link 1</a>-->
    <!--      <a href="#">Link 2</a>-->
    <!--      <a href="#">Link 3</a>-->
    <!--    </div>-->
    <!-- <Dropdown :on-click="changeInstrument" :items="instruments" /> -->



    <div class="select-box">
      <div class="select-box__current" tabindex="1">
        <div class="select-box__value">
          <input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked"/>
          <p class="select-box__input-text">مجبوب ترین</p>
        </div>
        <div class="select-box__value">
          <input class="select-box__input" type="radio" id="1" value="2" name="Ben" checked="checked"/>
          <p class="select-box__input-text">قدیمی ترین</p>
        </div>
        <div class="select-box__value">
          <input class="select-box__input" type="radio" id="2" value="3" name="Ben" checked="checked"/>
          <p class="select-box__input-text">جدید ترین</p>
        </div>
        <img class="select-box__icon" src="../assets/arrow.svg" alt="Arrow Icon" aria-hidden="true"/>
      </div>


      <ul class="select-box__list">
        <li>
          <label class="select-box__option" for="0" aria-hidden="aria-hidden">محبوب ترین</label>
        </li>
        <li>
          <label class="select-box__option" for="1" aria-hidden="aria-hidden">قدیمی ترین</label>
        </li>
        <li>
          <label class="select-box__option" for="2" aria-hidden="aria-hidden">جدید ترین</label>
        </li>
      </ul>
    </div>


    <p class="text">مرتب‌سازی براساس</p>
  </div>
</template>

<script>
// import Dropdown from './Dropdown';

export default {
  name: "QuestionnaireSort"
  // components: {
  //   Dropdown,
  // },
  // data: {
  //   activeInstrument: 'Piano',
  //   instruments: ['Piano', 'Acoustic Guitar', 'Drums', 'Trumpet'],
  // },
  // methods: {
  //   changeInstrument: function(instrument) {
  //     this.activeInstrument = instrument;
  //   },
  // },
};

</script>

<style lang="scss" scoped>
.sort-list {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .text {
    margin-left: 5px;
    font-size: 14px;
    line-height: 1.36;
    /*letter-spacing: 1.36;*/
    letter-spacing: -0.14px;
    color: #7f86aa;
  }


    /*!*border-radius: 10px;*!*/
    /*background-color: #ffffff;*/
    /*color: #aeaeae;*/
    /*border: none;*/




  & .select-box {
    position: relative;
    display: block;
    /*width: 100%;*/
    /*min-width: 100px;*/
    /*width: 130px;*/

    width: 130px;
    /*width: 70%;*/
    /*max-height: 36px;*/
    margin: 0 auto;
    /*font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;*/
    font-size: 14px;
    color: #aeaeae;
    /*border: 1px solid transparent;*/
    border-radius: 10px;
    /*direction: rtl;*/

    /*@media (min-width: 768px) {*/
    /*  width: 70%;*/
    /*}*/

    /*@media (min-width: 992px) {*/
    /*  width: 50%;*/
    /*}*/

    /*@media (min-width: 1200px) {*/
    /*  width: 30%;*/
    /*}*/

    &__current {
      position: relative;
      box-shadow: 0 15px 30px -10px transparentize(#000, 0.9);
      cursor: pointer;
      outline: none;

      &:focus {
        & + .select-box__list {
          opacity: 1;

          // We have to set "animation-name: none;" to make the list visible (read below how it works)

          animation-name: none;

          .select-box__option {
            cursor: pointer;

          }
        }

        .select-box__icon {
          width: 10px;
          height: 6px;
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }

    &__icon {
      position: absolute;
      top: 50%;
      left: 30px;
      transform: translateY(-50%);
      opacity: 0.3;
      transition: 0.2s ease;
      width: 10px;
      height: 6px;
    }

    &__value {
      display: flex;
    }

    &__input {
      display: none;

      &:checked + .select-box__input-text {
        display: block;
        border-radius: 10px;
        padding-left: 50px;
      }
    }

    &__input-text {
      display: none;
      /*width: 100%;*/
      width: 130px;
      margin: 0;
      /*height: 36px;*/
      padding: 10px 8px;
      background-color: #fff;
    }

    &__list {
      position: absolute;
      width: 100%;
      padding: 0;
      list-style: none;
      opacity: 0;

      // We need to use animation with delay.
      // Otherwise the click event will not have time to run on label, because this element disapears immediately when .select-box__current element loses the focus.
      // This delay will not be noticed because we set "opacity" to "0".
      // We also use "animation-fill-mode: forwards" to make the list stay hidden.

      animation-name: HideList;
      animation-duration: 0.5s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: step-start;
      box-shadow: 0 15px 30px -10px transparentize(#000, 0.9);
    }

    &__option {
      display: block;
      padding: 15px;
      background-color: #fff;

      &:hover,
      &:focus {
        color: #546c84;
        background-color: #fbfbfb;
      }
    }
  }

  @keyframes HideList {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }
}


</style>




























<!--/*.dropbtn {*/-->
<!--/*  width: 104px;*/-->
<!--/*  height: 36px;*/-->
<!--/*  border-radius: 10px;*/-->
<!--/*  background-color: #ffffff;*/-->
<!--/*  color: #aeaeae;*/-->
<!--/*  border: none;*/-->
<!--/*}*/-->

<!--/*.dropdown {*/-->
<!--/*  position: relative;*/-->
<!--/*  display: inline-block;*/-->
<!--/*}*/-->

<!--/*!* Dropdown Content (Hidden by Default) *!*/-->
<!--/*.dropdown-content {*/-->
<!--/*  display: none;*/-->
<!--/*  position: absolute;*/-->
<!--/*  background-color: #f1f1f1;*/-->
<!--/*  min-width: 160px;*/-->
<!--/*  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);*/-->
<!--/*  z-index: 1;*/-->
<!--/*}*/-->

<!--/*!* Links inside the dropdown *!*/-->
<!--/*.dropdown-content a {*/-->
<!--/*  color: black;*/-->
<!--/*  padding: 12px 16px;*/-->
<!--/*  text-decoration: none;*/-->
<!--/*  display: block;*/-->
<!--/*}*/-->

<!--/*!* Change color of dropdown links on hover *!*/-->
<!--/*.dropdown-content a:hover {*/-->
<!--/*  background-color: #ddd;*/-->
<!--/*}*/-->

<!--/*!* Show the dropdown menu on hover *!*/-->
<!--/*.dropdown:hover .dropdown-content {*/-->
<!--/*  display: block;*/-->
<!--/*}*/-->

<!--/*!* Change the background color of the dropdown button when the dropdown content is shown *!*/-->
<!--/*.dropdown:hover .dropbtn {*/-->
<!--/*  background-color: #3e8e41;*/-->
<!--/*}*/-->