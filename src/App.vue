<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script>

  export default {
    name: 'App',

  }
</script>

<style lang="scss">
  @import './assets/variables.scss';

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("./assets/fonts/Inter-Regular.woff") format("woff"),
      url("./assets/fonts/Inter-Regular.woff2") format("woff2");
  }

  @font-face {
    font-family: 'Inter';
    font-style: bold;
    font-weight: 900;
    font-display: swap;
    src: url("./assets/fonts/Inter-Bold.woff") format("woff"),
      url("./assets/fonts/Inter-Bold.woff2") format("woff2");
  }


  * {
    font-family: 'Inter';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  .app {
    width: 100%;
    height: 100vh;
    background-color: $main-color;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
</style>