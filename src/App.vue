<template>
  <div class="container">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  margin: 0 auto;
  max-width: 800px;
  background-color: rgba(0,0,0,.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
