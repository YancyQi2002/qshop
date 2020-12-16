<template>
  <van-field placeholder="输入书名,作者或者简介"
    input-align="left"
    maxlength="20"
    v-model.trim="value"
    @keyup.enter="searchBook" />
</template>

<script>
  export default {
    name: 'CategorySearch',
    data() {
      return {
        value: '',
      }
    },
    methods: {
      // 根据输入搜索图书
      searchBook() {
        this.axios.post("/books",{'input':this.value}).then(res => {
          this.$emit('show-books',res.data.books) // 传递数据给父组件
        }).catch(error => {
          console.log(error)
        })
      }
    },
  }
</script>

<style scoped>
  .van-field {
    margin-top: 2px;
    margin-bottom: 5px;
    line-height: 15px;
    background-color: #efeff4;
    border: 1px solid #fff;
    border-radius: 8px;
  }
</style>
