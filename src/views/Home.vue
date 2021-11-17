<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <about></about>
    <div id="hello"></div>
    <div id="dom"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import About from './About.vue'
import Vue from 'vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    About
  },
  mounted() {
    const app = new Vue({
      render: h => h(About)
    }).$mount('#hello')
    console.log(this.$createElement(About))
    console.log(app)
    console.log('creatApp')
  }
}
</script>
