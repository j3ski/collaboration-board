<template>
  <div id="app">
    <router-view></router-view>
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
</style>
