<template>
  <div class="navbar-username">
    <a href="#" @click.prevent="showDropDown = !showDropDown">
      <img
        src="../../assets/arrow.svg"
        alt="arrow"
        class="navbar-username-arrow"
      />
    </a>
    <p class="navbar-username-text">{{ userName }}, خوش آمدید</p>

    <img
      src="../../assets/avatar.svg"
      alt="avatar"
      class="navbar-username-avatar"
    />

    <div v-if="showDropDown">
      <ul class="menu">
        <li class="list">
          <a href="#" class="link" @click="logout">خروج</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    userName: String,
  },
  data() {
    return {
      showDropDown: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-username {
  display: flex;
  align-items: center;
  flex-shrink: 1;
  flex-basis: 50%;
  // flex: 1;
  // justify-self: flex-end;

  &-avatar {
    width: 26px;
    height: 26px;
  }

  &-text {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.14px;
    // text-align: left;
    color: #4b5a94;
    padding: 5px;
  }

  &-arrow {
    width: 12.1px;
    height: 6.9px;
  }

  & .menu {
    list-style: none;
    position: relative;
    top: 30px;
    right: 180px;
    background-color: rgb(100, 125, 235);
    padding: 5px;
    border-radius: 5px;
    border: none;

    & .list {
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }

  @media (max-width: 450px) {
    .navbar-username-text {
      display: none;
    }
  }
}
</style>
