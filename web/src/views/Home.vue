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
        <div class="navItem mt-3 border-color" v-for=" n in 10 " :key="n">
          <i class="sprite sprite-new"></i>
          <div>爆料站</div>
        </div>
      </div>
      <div class="up bg-grey-1 d-flex jc-center py-2 ai-center">
        <i class="sprite sprite-up pl-3"></i>
        <span>收起</span>
      </div>
    </div>
    <m-card icon="Menu" title="新闻资讯" :cardlist="newsCard">
      <template #item="{cardlists}">
        <div class="d-flex" v-for="(cardcontent,i) in cardlists.news" :key="i">
          <span>[{{cardcontent.title}}]</span>
          <span>|</span>
          <span class="f-1">{{cardcontent.content}}</span>
          <span>{{cardcontent.time}}</span>
        </div>
      </template>
    </m-card>
    <m-card icon="Menu" title="英雄列表"></m-card>
    <m-card icon="Menu" title="精彩视频"></m-card>
    <m-card icon="Menu" title="图文攻略"></m-card>
    <!-- <div class="cardc mt-3 py-3 bg-white">
      <div class="card_nav pl-3 d-flex">
        <i class="iconfont icon-Menu pr-3"></i>
        <span class="f-1">新闻资讯</span>
        <i class="iconfont icon-gengduo pr-3"></i>
      </div>
      <div class="nav_head d-flex jc-between m-3 pt-2">
        <div class="nav_item active">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav_item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav_item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav_item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav_item">
          <div class="nav-link">新闻</div>
        </div>

      </div>
      <swiper>
        <swiper-slide v-for="n in 5" :key="n">
          <div class="d-flex" v-for="n in 5" :key="n">
            <span>[新闻]</span>
            <span class="f-1">aaaaaaaaaa</span>
            <span>0906</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>-->
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
      },
      newsCard: [
        {
          name: "热点",
          news: new Array(5).fill({}).map(v => ({
            title: "新闻",
            content: "全服停机公告",
            time: "09-11"
          }))
        },
        {
          name: "爆料",
          news: new Array(5).fill({}).map(v => ({
            title: "新闻",
            content: "全服停机公告",
            time: "09-11"
          }))
        },
        {
          name: "热点",
          news: new Array(5).fill({}).map(v => ({
            title: "新闻",
            content: "全服停机公告",
            time: "09-11"
          }))
        },
        {
          name: "热点",
          news: new Array(5).fill({}).map(v => ({
            title: "新闻",
            content: "全服停机公告",
            time: "09-11"
          }))
        },
        {
          name: "热点",
          news: new Array(5).fill({}).map(v => ({
            title: "新闻",
            content: "全服停机公告",
            time: "09-11"
          }))
        }
      ]
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
  border-top: 2px solid $border-color;
  .navItem {
    width: 25%;
    border-right: 2px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
.up {
  border-bottom: 2px solid $border-color;
  span {
    color: #5d6585;
  }
}
</style>

