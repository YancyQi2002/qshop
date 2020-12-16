<template>
  <div class="home">
    
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods:{
    add(){
      this.$store.commit('add',10)
    },
  },
  computed: mapState({
    m:state=>state.count,
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
