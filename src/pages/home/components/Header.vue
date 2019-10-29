<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">内容</div>
    <div class="header-right">城市</div>
  </div>
</template>
<script>
export default {
  // 导出组件的写法： 注意
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    justify-items: center
    align-items: center
    background-color #00bcd4
    color: #fff
    .header-left
      width: .86rem
    .header-right
      width: 1.24rem
      
    .header-input
      flex: 1
</style>
