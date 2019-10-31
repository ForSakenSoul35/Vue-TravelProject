<template>
  <div class="icons">
    <swiper :options="swiperOption" >
      <swiper-slide>
        <div class="icon">
          <div class="icon-img-content">
            <img class="icon-img" src= "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png" />
          </div>
          <p class="icon-content">超市</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="icon">
          <div class="icon-img-content">
            <img class="icon-img" src= "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png" />
          </div>
          <p class="icon-content">超市</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      swiperOption: {}
    }
  }
}
</script>
<style  scoped>
  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: #eeeeee;
    height:160px;
  }
  .icon {
    height:50%;
    width:24%;
    border:1px solid #eeeeee;
    border-bottom: 0;
    /* background-color: blue; */
    overflow:hidden;
    
    
  }
  :icon-img-content {
    box-sizing: border-box;
  }
  .icon-img {
    width:60%;
    height: 60%;    
    display: block;
    margin: 0 auto;
    padding:2px;
    padding-bottom: 4px;
  }
  .icon-content {
    text-align: center;
    color:#333;
    font-size: 14px;
  }
</style>
