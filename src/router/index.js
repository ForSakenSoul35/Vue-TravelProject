import Vue from 'vue'
import Router from 'vue-router'
// @ 指的是src这个目录
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
Vue.use(Router)
//  根据网址的不同  返回不同的内容给用户  路由的功能
export default new Router({
  // 配置Router
  //  导出配置路由项
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
