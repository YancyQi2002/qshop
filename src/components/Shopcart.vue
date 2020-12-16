<template>
  <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh" >

    <div class="shopcart">
      <h4>我的购物车</h4>
      <hr>
      <van-empty />
      <h5>购物车空空如也</h5>

      <van-submit-bar safe-area-inset-bottom disabled :price="0" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <template #tip>
          你的收货地址不支持同城送, 请<span @click="onClickEditAddress">修改地址</span> 
          <div class="alsrtInfo" :style="{display: displayStsates}" ref="alertMsg">
            <div class="profPrompt_test">{{aletMsg}}</div>
          </div>
        </template>
      </van-submit-bar>
    </div>
  
  </van-pull-refresh>
</template>

<script>
import Vue from 'vue';
import { SubmitBar } from 'vant';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
Vue.use(SubmitBar); 

export default {
  name: 'shopcart',
  components: {
    
  },
  data () {
    displayStsates = 'none'
    return {
      count: 0,
      isLoading: false,
    };
  },
  methods: {
    onClickEditAddress : {
       // 提示弹框
      alertDia (msg) {
        this.displayStsates = 'block'
        this.aletMsg = msg
        // 延迟5秒后消失
        window.setTimeout(() => {
          this.displayStsates = 'none'
        }, 5000)
      }
    },

    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h4,
    h5 {
      text-align: center;
    }

    hr {
      margin-top: 5px;
      margin-left: 50px;
      margin-right: 50px;
      color: #000;
    }

    .van-empty {
      margin-top: -20px;
    }

    .van-submit-bar {
      margin-bottom: 50px;
    }
</style>
