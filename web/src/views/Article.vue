<template>
  <div class="about" v-if="model">
    <div class="d-flex ">
      <div class="iconfont icon-back fs-xs text-info">{{model.title}}</div>
      <div>
        201 
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { required: true }
  },
  data(){
    return {
      model : null 
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get(`article/${this.id}`) 
      this.model = res.data
    }
  },
  created(){
     this.fetch()
  }
};
</script>
