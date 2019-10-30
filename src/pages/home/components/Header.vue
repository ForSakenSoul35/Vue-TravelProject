<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe623;</div></div>
    <div class="header-input"><span class="iconfont search-icon">&#xe6a8;</span>输入城市景点游玩主题</div>
    <div class="header-right">城市<span class="iconfont arrow-icon">&#xe600;</span></div>
  </div>
</template>
<script>
export default {
  // 导出组件的写法： 注意
  name: 'HomeHeader'
}
</script>

<style  scoped>
  .header {
    width: 100%;
    height: 43px;
    background-color: #00bcd4;
    display: flex;
    align-items: center;
  }
  .header-left {
    width: 20px;
    margin-left: 10px;
  }
  .header-left .back-icon{
    font-size: 20px;
  }
  .header-input {
    flex: 1;
    margin-top:5px;
    margin-left:5px;
    margin-bottom: 5px;
    padding-left:5px;
    font-size:15px;
    height:33px;
    line-height:33px;
    border-radius: 5px;
    background-color: #fff;
  }
  .header-input .search-icon {
    margin-left: 2px;
    margin-right: 5px;
  }
  .header-right {
    width: 50px;
    font-size:15px;
    margin-left: 5px;
  }
  .header-right .arrow-icon {
    font-size:13px;
  }
</style>
