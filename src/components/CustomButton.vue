<template>
  <div>
    <a v-if="href" :href="href" class="button ">
      <slot />
    </a>
    <button v-else class="button ">
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
      type: String,
      default: false,
    },
  },
  methods: {
    funcClass() {
      if (this.disable === 'true') return 'disable';
      else return 'button';
    },
  },
};
</script>
<style scoped>
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
  background-color: #f1f1f2;
  border: none;
  font-size: 16px;
  letter-spacing: -0.16px;
  line-height: 1.38;
  text-decoration: none;
  cursor: pointer;
  color: #b9b9b9;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
