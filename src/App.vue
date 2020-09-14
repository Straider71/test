<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --primary-color: #4570f5;
  --second-color: #e6e9ef;
  // --primary-text:
  // --second-text:
}

@font-face {
  font-family: shabnam;
  src: url('./assets/fonts/Shabnam-FD.woff');
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
.app {
  font-family: shabnam;
}
</style>
