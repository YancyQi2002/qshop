<template>
  <div>
    <van-button size="small" type="info">加入购物车</van-button>
    <van-button size="small" type="info">直接购买</van-button>
  </div>
</template>

<script>
  export default {
    name: 'GoodsAction',
    props: {
      id: {
        type: Number,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      }
    }
  }
</script>

<style scoped>
</style>
