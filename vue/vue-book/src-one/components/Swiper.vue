<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
      <img :src="slide" alt="" style="width: 100%">
    </swiper-slide>
    <!--插槽 放点的-->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          observeParents:true,
          loop:true
        },

      }
    }
  }
</script>
