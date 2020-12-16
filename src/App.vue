<template>
  <div id="app">
    <!-- 头部，标题根据页面切换 -->
    <appheader></appheader>

    <!-- 组件切换动画，必须用 mode, 否则会错位 -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <!-- 底部栏目 -->
    <!-- 使用组件 -->
    <apptabbar></apptabbar>
  </div>  <!--app-->
</template>

<script>
// 导入组件
import apptabbar from './components/part/AppTabBar.vue'
import appheader from './components/part/AppHeader.vue'

export default {
  name: 'App',
  // 注册组件
  components: {
    apptabbar,
    appheader
  },
  created() {
	  // 动态获取网站标题
	  this.axios.post("/title").then(res => {
		  document.title = res.data.title // 操作DOM
	  }).catch(error => {
		  console.log(error)
	  })
  }
}


</script>

<style scoped>
	/* 实现过渡动画 */
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s;
  }
</style>
