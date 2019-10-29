<template>
  <div class="wrap">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-image" src="@/assets/swiper1.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-image" src="@/assets/swiper1.jpeg">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrap >>> .swiper-pagination-bullet-active
  background: #fff
.wrap
  width: 100%
  // height: 25.28vw
  height: 0
  padding-bottom: 25.28%
  backgroun: #eee
  .swiper-image
    width: 100%
</style>
