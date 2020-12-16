<template>
  <van-pull-refresh
    v-model="isLoading"
    success-text="刷新成功"
    @refresh="onRefresh"
  >
    <div class="home">
        <!-- 轮播区 -->
        <homeswipe></homeswipe>

        <!-- 九宫格区 -->
        <homegridnine></homegridnine>

    </div>
  </van-pull-refresh>
</template>

<script>
// 导入子组件
import { Toast } from 'vant'
import homeswipe from './part/HomeSwipe.vue'
import homegridnine from './part/HomeGridNine.vue'

// 将子组件导出
export default {
  name: 'Home',
  components: {
    homeswipe,
    homegridnine,
  },
  data() {
    return {
      count: 0,
      isLoading: false,
    };
  },
  methods: {
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

</style>
