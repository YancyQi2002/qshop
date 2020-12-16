<template>
  <div>
    <van-card v-for="item in books" :key="item.id"
      :centered="true"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="require('../../assets/images/book/' + item.pic)"
      num="10"
      @click-thumb="showBook(item.id)"
    >
      <template #footer>
        <goodsaction :id="item.id" :amount="1"></goodsaction>
      </template>
    </van-card>
  </div>
</template>

<script>
  //  导入子组件
  import goodsaction from './GoodsAction.vue'

  export default {
    name: 'CategoryShowBooks',
    components: {
      goodsaction,
    },
    props: {
      books: {
        type: Array,
        required: true
      }
    },
    methods: {
      // 跳转到图书详情
      showBook(id) {
        this.$router.push({path: "/Book",query: {id:id}})
      }
    }
  }
</script>

<style scoped>
  .van-card {
    font-size: 14px;
    background-color: #fff;
    border-bottom: 1px solid #B4C2FF;
  }
</style>
