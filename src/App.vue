<template>
  <div id="app">
    <router-view />
    <my-tabbar></my-tabbar>
  </div>
</template>
<script>
import MyTabbar from "@components/MyTabbar.vue";
export default {
  components: {
    MyTabbar
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
