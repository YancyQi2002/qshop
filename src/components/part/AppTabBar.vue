<template>
  <!-- 开启底部安全区适配 -->
  <van-tabbar v-model="active" @change="onChange" safe-area-inset-bottom>
    <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="search" replace to="/Category">栏目</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" :badge="carts" replace to="/Shopcart">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" replace to="/User">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import { Notify } from 'vant';

  export default {
    name: 'AppTabBar',
    data() {
      return {
        active: 0, // 默认第0项是激活
        carts: 0,
      }
    },
    methods: {
	    onChange(index) {
	      Notify({ type: ''});
	    },
    },
    watch: {
      // 根据页面切换项目激活态
      // 有时用户会直接输入网址，这时无法激活项目
      $route(val) {
        console.log(val.name)
        switch(val.name) {
          case "Home" :
          this.active = 0
          break
          case "Category" :
          this.active = 1
          break
          case "Shopcart" :
          this.active = 2
          break
          case "User" :
          this.active = 3
          break
        }
      }
    }
  }
</script>

<style>
</style>
