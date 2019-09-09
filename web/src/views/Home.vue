<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/1.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/2.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/5.jpeg" />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3" slot="pagination"></div>
    </swiper>
    <!-- end of  -->
    <div class="navBox">
      <div class="navItems d-flex flex-wrap text-center bg-white">
        <div class="navItem mt-3 border-color"  v-for=" n in 10 " :key="n">
          <i class="sprite sprite-new"></i>
          <div>爆料站</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variable.scss";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.navItems {
  .navItem {
    width: 25%;
    border-right: 2px solid $border-color;
    &:nth-child(4n){
      border-right:none
    }
  }
}
</style>

