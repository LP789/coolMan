<template>
  <div v-swiper:mySwiper="swiperOption" >
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components: {
          swiper,
          swiperSlide
        },
        name: "swiperIndex",
        data() {
          return {
            banners: [ '/1.jpg', '/2.jpg', '/3.jpg' ],
            swiperOption: {
              pagination: {
                el: '.swiper-pagination'
              },
              autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
              },
            }
          }
        },
        methods: {},
        computed:{
        },
        mounted(){
          setTimeout(() => {
            this.banners.push('/1.jpg')
            console.log('banners update')
          }, 3000)
          console.log(
            'This is current swiper instance object', this.mySwiper, 
            'It will slideTo banners 3')
          this.mySwiper.slideTo(3, 1000, false)
        }
    }
</script>

<style scoped>
  

</style>
