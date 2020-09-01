<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: shabnam;
  src: url('./assets/fonts/Shabnam-FD.woff');
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// ::-webkit-scrollbar {
//   width: 6px;
//   height: 6px;
// }
// /* Track */
// ::-webkit-scrollbar-track {
//   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//   -webkit-border-radius: 6px;
//   border-radius: 6px;
// }
// /* Handle */
// ::-webkit-scrollbar-thumb {
//   -webkit-border-radius: 6px;
//   border-radius: 6px;
//   background: rgba(255, 0, 0, 0.8);
//   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
// }
// ::-webkit-scrollbar-thumb:window-inactive {
//   background: rgba(255, 0, 0, 0.4);
// }

#app {
  text-align: center;
  color: #2c3e50;
  font-family: shabnam;
}
.app {
  font-family: shabnam;
}
</style>
