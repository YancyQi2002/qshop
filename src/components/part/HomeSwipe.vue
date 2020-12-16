<template>
  <!-- 轮播区 -->
  <van-swipe :autoplay="4000" indicator-color="#aaaaff">
    <van-swipe-item v-for="item in list" :key="item">
      <img :src="require('../../assets/images/swipe/' + item)" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name: 'HomeSwipe',
    data() {
      // 获取轮播列表
      this.axios.post("/swipe").then( res => {
        this.list = res.data.swipeList
      }).catch(error => {
        console.log(error)
      })
      return {
        list: []
      }
    },
  }
</script>

<style scoped>
  .van-swipe {
    padding-top: 10px;
    border-bottom: 1px solid #e6eaff;
  }
  
  .van-swipe .van-swipe-item {
    line-height: 60px;
    text-align: center;
  }
</style>
