<template>
  <div>
    <a v-if="href" :href="href" :class="classFunc()">
      <slot />
    </a>
    <button v-else :class="classFunc()">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    classFunc() {
      if (this.disable) return 'disable';
      else return 'button';
    },
  },
};
</script>
<style scoped lang="scss">
.button {
  width: 119px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(69, 112, 245, 0.6);
  background-color: #4570f5;
  border: none;
  font-size: 16px;
  letter-spacing: -0.16px;
  line-height: 1.38;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;

  align-items: center;
}

.disable {
  width: 119px;
  height: 50px;
  border-radius: 10px;
  opacity: 0.3;
  background-color: #e6e6e6;
  border: none;
  font-size: 16px;
  letter-spacing: -0.16px;
  line-height: 1.38;
  text-decoration: none;

  color: #b9b9b9;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 640px) {
  .button {
    width: 300px;
    height: 40px;
    margin-top: 10px;
  }
}
</style>
