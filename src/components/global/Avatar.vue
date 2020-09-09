<template>
  <div class="avatar">
    <img src="@/assets/index.jpg" alt="avatar" />
    <input
      type="file"
      @change="onFileSelected"
      style="display: none"
      ref="fileInput"
    />
    <div class="two">
      <!-- <CustomButton class="custom-button" @click.native="onUpload">
        <p>آپلود عکس</p>
      </CustomButton> -->
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
export default {
  name: 'Avatar',
  components: {
    CustomButton,
  },
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];

      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      console.log(fd);
    },
    // onUpload() {
    //   const fd = new FormData();
    //   fd.append('image', this.selectedFile, this.selectedFile.name);
    //   console.log(fd);
    // },
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
      width: 375px;
      font-size: 16px;
      border-radius: 5px;
      margin-top: 10px;
    }
  }
}
</style>
