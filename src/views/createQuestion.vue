<template>
  <div id="tabs" class="container">
    <div class="tabs">
      <a
        v-on:click="activetab = 1"
        v-bind:class="[activetab === 1 ? 'active' : '']"
        >تشریحی</a
      >
      <a
        v-on:click="activetab = 2"
        v-bind:class="[activetab === 2 ? 'active' : '']"
        >دو گزینه‌ای</a
      >
      <a
        v-on:click="activetab = 3"
        v-bind:class="[activetab === 3 ? 'active' : '']"
        >چهار گزینه‌ای</a
      >
    </div>

    <div class="content">
      <div v-if="activetab === 1" class="tabcontent">
        <custom-input class="round-bottom-border" label="صورت سوال">
        </custom-input>
        <custom-input class="round-bottom-border" label="ایدی پرسشنامه">
        </custom-input>
        <CustomButton class="custom-button">
          <p>ثبت سوال</p>
        </CustomButton>
      </div>
      <div v-if="activetab === 2" class="tabcontent">
        Caught in a landslide, no escape from reality
      </div>
      <div v-if="activetab === 3" class="tabcontent">
        Open your eyes, look up to the skies and see
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '@/components/global/CustomInput.vue';
import CustomButton from '@/components/global/CustomButton.vue';

export default {
  name: 'createQuestion',
  components: {
    CustomInput,
    CustomButton,
  },
  data() {
    return { activetab: 1 };
  },
};
</script>

<style lang="scss" scoped>
.container {
  // max-width: 620px;
  // min-width: 420px;
  width: 80%;
  height: 75vh;
  margin: 40px auto;
  color: #888;
}

/* Style the tabs */
.tabs {
  overflow: hidden;
  // margin-right: 20px;
  margin-bottom: -2px;

  padding: 30px;
  // width: 50px;
  height: 30px;
}

.tabs ul {
  list-style-type: none;
  margin-right: 20px;
}

.tabs a {
  cursor: pointer;
  padding: 12px 24px;
  border: 1px solid #ccc;
  font-family: shabnam;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  width: auto;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}

.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}

.tabcontent {
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
  height: 500px;
}
</style>
