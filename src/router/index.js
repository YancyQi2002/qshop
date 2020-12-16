import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import User from '@/components/User'
import Category from '@/components/Category'
import Shopcart from '@/components/Shopcart'

Vue.use(Router)

/*
//解决重复路由报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
*/

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title: '求知书屋',
      },
    },
    {
      path: '/User',
      name: 'User',
      component: User,
      meta: {
        title:'个人资料',
      },
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category,
      meta: {
        title:'图书栏目',
      },
    },
    {
      path: '/Shopcart',
      name: 'Shopcart',
      component: Shopcart,
      meta: {
        title:'购物车',
      },
    },

  ],
  mode: 'history'
})
