<template>
  <div class="option">
    <label class="radio" :for="id">
      <input
        type="radio"
        :id="id"
        class="radio-button"
        :value="label"
        :name="name"
        v-model="value"
      />
      <span class="radio-circle"> </span>
      <span class="radio-circle__inner"> </span>
      <span class="radio-button__label">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CustomRadio',
  props: ['name', 'lable', 'id', 'value'],
  computed: {
    radioButtonValue: {
      get: function() {
        return this.value;
      },
      set: function() {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit('change', this.label);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>

// // // <CustomRadio // name="options" // label="1" // :value="selectedValue"
// @change="changeValue" // /> // data: function() { // return { //
selectedValue: "1" // }; // }, // methods: { // changeValue: function(newValue)
{ // this.selectedValue = newValue; // } // }
