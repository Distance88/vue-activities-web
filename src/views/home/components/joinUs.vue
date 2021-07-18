<template>
  <div>
    <div class="my-joinUs">
      <div class="ui container">
        <div class="ui teal header">
          <h2>联系我们</h2>
        </div>
        <span style="font-size: 14px">可通过以下方式联系我们:</span>
        <div class="ui four column center aligned grid" style="margin-top: 5px">
          <div class="column"><a href="">QQ:897566246</a></div>
          <div class="column"><a href="">手机:15716355016</a></div>
          <div class="column"><a href="">地下室:科技园B区进门右手侧</a></div>
          <div class="column"><a href="">实验室:15#615</a></div>
        </div>
      </div>
    </div>
    <div class="m-joinUs">
        <div class="ui two column center aligned grid" style="padding-top:50px">
            <div class="column animated bounceInLeft"><span class="my-span ">心动不如行动,你还在等什么?快来加入我们吧!</span></div>
            <div class="column animated bounceInRight"><router-link to="/login" class="ui button red" style="width:150px">加入我们</router-link></div>
        </div>
    </div>
  </div>
</template>
<style scoped>
.my-joinUs {
  width: 100%;
  height: 200px;
  background-color: #333;
  opacity: 0.85;
}
.ui.container {
  width: 80%;
  margin: auto !important;
  color: #fff;
  padding-top: 40px;
}
.animated {
  animation-duration: 4s;
}
.column {
  font-size: 16px;
}
.my-span{
    line-height: 2;
}
.m-joinUs {
  background-color: #fff !important;
  height: 140px;
}
</style>