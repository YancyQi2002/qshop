<template>
  <van-nav-bar
    :title="this.$route.meta.title"
    left-text="返回"
    left-arrow @click-left="onClickLeft" @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"></van-icon>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'AppHeader', //name的作用：方便调试时，识别组件
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    // 激活搜索，即跳转到《栏目》
    onClickRight() {
      this.$router.push("/Category")
    }
  }

}
</script>

<style scoped>
  /* 可以修改头部 底纹等 */
  .van-nav-bar {
    border-bottom: 1px solid #b4c2ff;
  }
</style>
