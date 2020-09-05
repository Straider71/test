<template>
  <div class="navbar-username">
    <a href="#" @click.prevent="showDropDown = !showDropDown" ref="a">
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

    <!-- <div
      v-show="showDropDown"
      v-closable="{
        exclude: ['a'],
        handler: 'onClose',
      }"
    > -->
    <div v-show="showDropDown">
      <ul class="menu">
        <li class="list">
          <router-link to="/profile/5">
            <p class="link">پروفایل</p>
          </router-link>
        </li>
        <li class="list">
          <a href="#" class="link" @click="logout">خروج</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import Vue from 'vue';
// let handleOutsideClick;
// Vue.directive('closable', {
//   bind(el, binding, vnode) {
//     handleOutsideClick = e => {
//       e.stopPropagation();
//       const { handler, exclude } = binding.value;
//       let clickedOnExcludedEl = false;
//       exclude.forEach(refName => {
//         if (!clickedOnExcludedEl) {
//           const excludedEl = vnode.context.$refs[refName];
//           clickedOnExcludedEl = excludedEl.contains(e.target);
//         }
//       });
//       if (!el.contains(e.target) && !clickedOnExcludedEl) {
//         vnode.context[handler]();
//       }
//     };
//     document.addEventListener('click', handleOutsideClick);
//   },
//   unbind() {
//     document.removeEventListener('click', handleOutsideClick);

//   },
// });
export default {
  name: 'UserInfo',

  data() {
    return {
      showDropDown: false,
    };
  },
  methods: {
    ...mapActions({ logout: 'logout' }),
    // showDropDown() {
    //   this.showDropDown = false;
    // },
  },
  computed: {
    ...mapGetters({ userName: 'userName' }),
  },
};
</script>

<style lang="scss" scoped>
.navbar-username {
  display: flex;
  align-items: center;
  flex-shrink: 1;
  flex-basis: 50%;

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
    top: 45px;
    right: 180px;

    & .list {
      margin-top: 1px;
      background-color: rgb(100, 125, 235);
      padding: 0 25px;
      border-radius: 5px;
      border: none;

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }

  @media (max-width: 815px) {
    .navbar-username-text {
      display: none;
      flex-basis: 30%;
    }
    .menu {
      right: 50px;
    }
  }
}
</style>
