<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  html {
    height: 100%;
    font-family: Source Sans Pro, Helvetica, sans-serif;
  }

  h1, h2, h3 {
    margin: 0;
  }

  button {
    font-weight: bold;
    background: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    padding: 5px;
  }

  button:hover {
    background: lightgray;
  }

  a {
    text-decoration: none;
    color: #168C8C;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
