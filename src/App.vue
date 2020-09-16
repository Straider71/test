<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --primary-color: #4570f5;
  --second-color: #e6e9ef;
  --bg-primary: #ffffff;
  --bg-second: #f3f4f8;

  --primary-shadow: 0 5px 10px 0 #f1f1f2;
  --primary-text: #2a3774;
  --second-text: #7f86aa;
  --green-text: #05d667;
  --dark-text: #4b5a94;
  --gray-text: #747474;
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
