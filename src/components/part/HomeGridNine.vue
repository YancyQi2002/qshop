<template>
  <!-- 九宫格区 -->
  <van-grid :border="false" :column-num="3">
    <van-grid-item v-for="item in list" :key="item.title" to="/">
      <van-image :src="require('../../assets/images/icon/' + item.pic)" />
      <div class="grid-title">{{item.title}}</div>
    </van-grid-item>
  </van-grid>
</template>

<script>
  export default {
    name: 'HomeGridNine',
    data() {
      // 获取九宫格列表
      this.axios.post("/grid9").then(res => {
        this.list = res.data.gridList
      }).catch(error => {
        console.log(error)
      })
      return {
        list: [],
      }
    }
  }
</script>

<style>
  .van-grid {
    border-bottom: 1px solid #e6eaff;
  }
  
  .van-grid-item {
    cursor: pointer;
  }

  .van-image {
    width: 60px;
    height: 60px;
  }

  .grid-title {
    margin-top: 10px;
    font-size: 12px;
  }
</style>
