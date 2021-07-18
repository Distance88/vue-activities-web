<template>
  <div class="ui container" style="padding-top: 5em !important; padding-bottom: 5em !important;">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="最新资讯" name="first">
          <first></first>
      </el-tab-pane>
      <el-tab-pane label="习题作业" name="second">
          <second  v-on:seeAnswer="seeAnswer($event)"></second>
      </el-tab-pane>
      <el-tab-pane label="习题答案" name="third">
          <third :activeNames="activeNames"></third>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import first from './components/first'
import second from './components/second'
import third from './components/third'
export default {
  data() {
    return {
      activeName: "first",
      activeNames:"-1"
    };
  },
  components:{
      first:first,
      second:second,
      third:third
  },
  methods: {
    seeAnswer(index){
      this.activeName = 'third'
      this.activeNames = index+''
    },
    handleClick() {
      this.activeNames = "-1"
    }
  },
   
};
</script>