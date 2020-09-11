<template>
  <div class="avatar">
    <img :src="user.photo ? photo : defaultPhoto" alt="avatar" />
    <input
      type="file"
      accept="image/*"
      @change="onFileSelected"
      style="display: none"
      ref="fileInput"
    />
    <div class="two">
      <CustomButton class="custom-button" @click.native="removePic">
        <p>پاک کردن عکس</p>
      </CustomButton>
      <CustomButton
        class="custom-button"
        @click.native="$refs.fileInput.click()"
      >
        <p>انتخاب عکس</p>
      </CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/global/CustomButton';
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'Avatar',
  components: {
    CustomButton,
  },
  data() {
    return {
      selectedFile: null,
      defaultPhoto: `http://127.0.0.1:3000/server/image/users/avatar@3x.png`,
      photo: `http://127.0.0.1:3000/${this.$store.state.user.photo}`,
    };
  },
  computed: { ...mapState(['user']), ...mapMutations(['SET_USER_PHOTO']) },
  methods: {
    ...mapActions(['profilePic']),

    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(event.target.files[0]);
      if (event.target.files[0].size >= 1000000) {
        return this.$toasted.error('حجم عکس از 1 مگابایت نباید بیشتر باشد');
      }

      const fd = new FormData();
      fd.append('image', this.selectedFile);
      this.profilePic(fd);
    },
    removePic() {
      // const fd = new FormData();
      // fd.append('image', this.selectedFile);
      // this.profilePic(fd);
      this.SET_USER_PHOTO;
    },
  },
};
</script>

<style scoped lang="scss">
.avatar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  & img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  & .two {
    display: flex;
    justify-content: space-between;
    width: 375px;

    & .custom-button::v-deep .button {
      height: 45px;
      width: 185px;
      font-size: 16px;
      border-radius: 5px;
      margin-top: 38px;
    }
  }
}
</style>
