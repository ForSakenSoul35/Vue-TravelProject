<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  // 导出组件的写法： 注意
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
<style scoped>

</style>
