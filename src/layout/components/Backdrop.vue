<template>
      <div v-if="isVisible" class="ui center aligned container">
        <div class="my-center">
          <div class="myText">
              <h3 class="my-text-screen ui teal header" style="font-size: 36px;margin-top:40px;">{{message}}</h3>
            </div>
          </div>
          <button class="ui button basic red" style="margin-top:40px;padding-right:11px;">加入我们吧</button>
      </div>
</template>
<style scoped src='../../static/css/my.css'></style>
<style scoped>
.ui.container{
  height: 100vh;
  width: 100%;
}
.my-center {
  padding-top: 240px;
}
.myText h3{
  margin: auto;
}
.my-header-text-larage {
  font-size: 22px;
  color: #fff;
}
</style>
<script>
export default {
  props:['message'],
  computed:{
    isVisible(){
      let name = this.$route.name
      if(name === 'article'){
        return false
      }
      if(name === 'detail'){
        return false
      }
      return true;
    }
  }
}
</script>