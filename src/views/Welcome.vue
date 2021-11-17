<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <about></about>
    <div id="hello"></div>
    <div id="dom" v-loading:[loadingText]="loading"></div>
    <button @click="changeLoading">点击</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import About from './About.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    About
  },
  data() {
    return {
      loading: true,
      loadingText: 'loading...'
    }
  },
  methods: {
    changeLoading() {
      this.loading = !this.loading
    }
  },
  async activated() {
    console.log(this.$createElement(About))
    console.log('actived')
  },
  deactivated() {
    console.log('deactived')
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/common.scss';
  #dom {
    width: $dom-width;
    height: $dom-height;
    background: $bg-color;
    margin: 0 auto;
    @include relative;
  }
</style>
