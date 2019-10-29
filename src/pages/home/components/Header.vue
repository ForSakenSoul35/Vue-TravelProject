<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe623;</div></div>
    <div class="header-input"><span class="iconfont">&#xe6a8;</span>输入城市景点游玩主题</div>
    <div class="header-right">城市<span class="iconfont arrow-icon">&#xe600;</span></div>
  </div>
</template>
<script>
export default {
  // 导出组件的写法： 注意
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    justify-items: center
    background: $bgColor
    color: #fff
    .header-left
      width: 43px
      line-height: 43px
      height: 43px
      .back-icon
        text-align: center
        font-size: 30px
    .header-right
      width: 64px
      line-height: 43px
      color: #ffffff
      text-align: center
      font-size: 14px
      .arrow-icon
        font-size: 12px
    .header-input
      flex: 1
      font-size: 14px
      margin-top: 6px
      margin-left: 6px
      padding-left: 10px
      height: 32px
      line-height: 32px
      background: #ffffff
      border-radius: 5px
      color: #ccc
</style>
