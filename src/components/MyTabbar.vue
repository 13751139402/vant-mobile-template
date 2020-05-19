<template>
  <van-tabbar v-show="showTabbar" v-model="active" route>
    <van-tabbar-item icon="home-o" name="home" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" name="message" to="/message">消息</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="shoppingCart" to="/shoppingCart">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" name="my" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data: function() {
    return {
      active: "",
      showTabbar: false,
      whiteList: ["/home", "/message", "/shoppingCart", "/my"]
    };
  },
  watch: {
    $route: {
      handler({ fullPath }) {
        const index = this.whiteList.indexOf(fullPath);
        if (index !== -1) {
          this.showTabbar = true;
          this.active = this.whiteList[index];
        } else {
          this.showTabbar = false;
        }
      },
      immediate: true
    }
  }
};
</script>

<style>
</style>
