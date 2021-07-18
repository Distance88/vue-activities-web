<template>
  <div class="my-label">
    <div>
      <svg class="icon icon-header" aria-hidden="true">
        <use href="#icon-leixing" />
      </svg>
      <span class="my-text">分类专栏</span>
    </div>
    <div class="ui vertical menu">
      <router-link :class="index == 0 ? 'active teal item' : 'item'" v-for="(type,index) in typeList" :key="index" :to="{name:'type',params:{'name':type.name}}">
        {{type.name}}
        <div class="ui basic teal left pointing label">{{type.count}}</div>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.icon {
  width: 1.8em !important;
  height: 1.8em !important;
  vertical-align: -0.2em;
  fill: currentColor;
  overflow: hidden;
}
.my-text {
  margin-left: 5px;
  font-size: 18px;
}
.my-label {
  padding: 0 2.6em;
  padding-bottom: 2em !important;
}
.ui.vertical.menu{
    width: 100%;
}
</style>
<script>
import typeApi from '@api/type'
export default {
  data(){
    return {
      typeList:[]
    }
  },
  methods:{
    getTypeList(){
       typeApi.getTypeList().then(req=>{
        this.typeList = req.data
      })
    }
  },
  created(){
    this.getTypeList()
  }
};
</script>