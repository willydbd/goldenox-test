<template>
  <div id="app">
      <Nav />
      <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
// import axios from 'axios'

export default {
  name: 'App',
  components: {
    //  register nav component
     Nav,
  },
}
</script>
<style>
body {
  margin: 0px;
  background: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 0px;
}
.myNav {
  margin-bottom: 50px;
}
.card, .myNav, .back, input, select, option {
  background: #212c38;
}
  input{
    max-width: 300px;
    background: #212c38;
  }
 select {
  max-width: 200px;
  color: #fff;
}
</style>
