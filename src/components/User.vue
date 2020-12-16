<template>
  <van-cell-group>
    <van-card>
      <van-card__header>
        <van-card__thumb>
          <van-image width="100%" height="100%">
            
          </van-image>
        </van-card__thumb>
      </van-card__header>
    </van-card>
    <van-cell title="我的订单" icon="orders-o" is-link></van-cell>
    <van-cell title="收货地址" icon="contact" is-link></van-cell>
    <br>
    <van-cell title="我的帮助" icon="like-o" is-link></van-cell>
    <br>
    <van-cell title="设置" icon="question-o" is-link></van-cell>
    <van-cell title="退出" icon="close"></van-cell>
  </van-cell-group>
</template>

<script>

export default {
  name: 'user',
  data () {
    
  },//data
  created() {


  },//created
  methods:{

  },
  computed:{
    //有用户使用用户头像，没有用户使用默认头像

  },//computed
}
</script>

<style scoped>
  
</style>
