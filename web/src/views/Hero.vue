<template>
  <!-- V-IF 防止第一遍刷新的时候会出现{{model.name}}没有被加载 -->
  <div class="page-hero" v-if="model">
    <div class="topbar px-3 py-2 bg-black d-flex ai-center">
      <img src="../assets/images/king.jpg" height="30" />

      <div class="px-2 flex-grow-1 text-white">
        <span class="text-white">王者荣耀</span>
        <span class="text-white fs-xxs pl-3">攻略站</span>
      </div>
      <span class="text-white">更多英雄 <strong class="fs-xg pl-2"> &gt;</strong></span>
    </div>
    <h1>{{model.name}}</h1>
    </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/hero/${this.id}`);
      this.model = res.data;
    }
  },

  created() {
    this.fetch();
  }
};
</script>
