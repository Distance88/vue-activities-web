<template>
  <div class="my-label">
    <div>
      <svg class="icon icon-header" aria-hidden="true">
        <use href="#icon-biaoqian2" />
      </svg>
      <span class="my-text">标签分类</span>
    </div>
    <div class="tags">
      <router-link class="ui mini basic button" v-for="(label, index) in labelList" :key="index" :to="{name:'label',params:{'name':label.name}}">
          <span class="my-botton-label">{{ label.name }} </span>
          <span class="my-botton-count">{{ label.count }}</span>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.icon {
  width: 2em !important;
  height: 2em !important;
  vertical-align: -0.2em;
  fill: currentColor;
  overflow: hidden;
}
.my-text {
  margin-left: 5px;
  font-size: 18px;
}
.my-label {
  width: 100%;
  padding-left: 2em !important;
  padding-bottom: 2em !important;
}
.tags {
  padding: 1em 0em;
}
.button {
  margin-bottom: 5px;
  margin-right: 5px;
  border-radius: 1020px !important;
  padding: 4px 8px !important;
}
.my-botton-label {
  color: #5a5a5a !important;
  font-size: 10px;
}
.my-botton-count {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  vertical-align: middle;
  border-radius: 10px;
  background: #17807d;
  opacity: 0.85;
  margin-left: 3px;
}
</style>
<script>
import labelApi from '@api/label'
export default {
 
  data(){
    return {
      labelList:[]
    }
  },
  methods:{
    getLabelList(){
       labelApi.getLabelList().then(req=>{
        this.labelList = req.data
      })
    }
  },
  created(){
    this.getLabelList()
  }
};
</script>