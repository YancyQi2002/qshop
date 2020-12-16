<template>
  <!-- 采用vant栅格布局 -->
  <van-row>
    <!-- 左侧栏目 -->
    <van-col span="6">
      <categorylist @show-books="showBooks"></categorylist>
    </van-col>

    <!-- 右侧图书 -->
    <van-col span="18" class="content-books">
      <!-- 查询书目 -->
      <categorysearch @show-books="showBooks"></categorysearch>
      <van-empty v-if="0 == books.length" description="空空如也" />
      <categoryshowbooks :books="books"></categoryshowbooks>
    </van-col>
  </van-row>
</template>

<script>
// 导入子组件
import categorylist from './part/CategoryList.vue'
import categorysearch from './part/CategorySearch.vue'
import categoryshowbooks from './part/CategoryShowBooks.vue'

export default {
  name: 'Category',
  components: {
    categorylist,
    categorysearch,
    categoryshowbooks,
  },
  data() {
    return {
      books: [],
    }
  },
  methods: {
    // 将查询到的图书赋值给当前图书列表
    showBooks(val) {
      this.books = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-books {
    padding-right: 5px;
    margin-bottom: 60px;
  }
</style>
