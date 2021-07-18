<template>
  <div class="my-recommend">
    <div>
      <svg class="icon icon-header" aria-hidden="true">
        <use href="#icon-remen" />
      </svg>
      <span class="my-text">热门推荐</span>
    </div>
    <div class="ui middle aligned selection animated relaxed list">
      <div class="item" v-for="(recommend,index) in recommendList" :key="index">
        <div class="content">
          <router-link class="recommendList" :to="{ name: 'detail', params: {id: recommend.id } }">
            <a :class="'ui '+colors[index]+' label'" style="margin-right: 15px">{{index+1}}</a
            ><span>{{recommend.title.substring(0,24)}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.icon {
  width: 2.5em !important;
  height: 2.5em !important;
  vertical-align: -0.2em;
  fill: currentColor;
  overflow: hidden;
}
.my-text {
  margin-left: 5px;
  font-size: 18px;
}
.my-recommend {
  padding-left:2em !important;
  padding-bottom: 2em !important;
}
.recommendList {
  color: #000;
}
</style>
<script>
import blogApi from "@api/blog";
export default {
  data(){
    return {
      colors:['red','orange','yellow','olive','green'],
      recommendList:[]
    }
  },
  methods:{
    getRecommendList(){
      blogApi.getRecommendList().then(req=>{
        this.recommendList = req.data
      })
    }
  },
  created(){
    this.getRecommendList();
  }
}
</script>