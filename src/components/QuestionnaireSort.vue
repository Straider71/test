<template>
  <div class="sort-list">
    <button class="dropbtn">
      <img src="../assets/arrow.svg" alt="" /> جدیدترین
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <p>مرتب‌سازی براساس</p>
  </div>
</template>

<script>
export default {
  name: 'QuestionnaireSort',
};
</script>

<style lang="scss" scoped>
.sort-list {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 5px;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 1.36;
    letter-spacing: -0.14px;
    color: #7f86aa;
  }
}

.dropbtn {
  width: 104px;
  height: 36px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #aeaeae;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
