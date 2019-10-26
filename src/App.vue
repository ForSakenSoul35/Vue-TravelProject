<template>
<!-- HTML模版 -->
  <div id="app">
    <!-- router-view 显示的是当前路由地址对应的内容 -->
    <router-view/>
  </div>
</template>

<script>
/* 要和全局组件区分 vue.component */
// 这里做 外部导入和注入
export default {
  name: 'App'
}
</script>

<style>
/* 样式 */
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
