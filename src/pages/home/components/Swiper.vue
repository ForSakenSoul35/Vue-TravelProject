<template>
  <div class="wrap">
    <swiper :options="swiperOption" >
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
<style  scoped>
  .wrap{
    width: 100%;
    height:180px;
  }
  .swiper-image{
    height:180px;
    width:100%;
  }
</style>
