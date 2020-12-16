<template>
  <!-- 图书栏目 -->
  <van-sidebar v-model="activeKey" @change="onChange">
    <van-sidebar-item v-for="item in list" :title="item.title" :key="item.type" />
  </van-sidebar>
</template>

<script>
  export default {
    name: 'CategoryList',
    data() {
      return {
        list: [], // 栏目列表
        activeKey: 0,
      }
    },
    methods: {
      onChange(index) {
        // 根据栏目获取书籍
        // this.list[index].type : 当前栏目的图书类别
        this.axios.post("/booktype",{'type':this.list[index].type}).then( res => {
          this.$emit('show-books',res.data.books) // 传递数据给父组件
        }).catch(error => {
          console.log(error)
        })
      }
    },
    created() {
      // 获取栏目列表
      this.axios.post('/category').then(res => {
        this.list = res.data.categoryList
        this.onChange(this.activeKey) // 查询当前类别的图书
      }).catch(error => {
        console.log(error)
      })
    }
  }
</script>

<style scoped>
  .cell-title {
    font-size: 13px;
  }
</style>
