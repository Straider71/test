<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    <!-- </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: shabnam;
  src: url('./assets/Shabnam.woff');
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  text-align: center;
  color: #2c3e50;
  font-family: shabnam;
}
</style>
