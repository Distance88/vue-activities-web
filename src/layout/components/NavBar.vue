<template>
  <div @scroll="watchScroll">
    <div v-show="navBarFixed" class="navBar animated fadeInLeftBig">
      <div class="ui container my-nav-container">
        <div class="ui inverted segment">
          <div class="ui inverted secondary menu">
            <div class="my-header">
              <h2 class="ui header teal">南工社团</h2>
            </div>
            <router-link to="/home" class="item" >网站首页 </router-link>
            <router-link to="/recruit" class="item">社团招新</router-link>
            <router-link to="/info" class="item">社团资讯</router-link>
            <router-link to="/resource" class="item"> 社团资源 </router-link>
            <router-link to="/blog" class="item"> 社团博客 </router-link>
            <router-link to="/message" class="item"> 留言板 </router-link>
            <router-link to="/about" class="item">关于我们</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="animated fadeInLeftBig">
      <div class="ui container my-padding">
        <div class="ui grid">
          <div class="seven wide column">
            <a href="">
              <img
                src="@images/logo.png"
                class="ui middle aligned image"
                alt=""
                style="margin-left:150px"
                width="100"
              />
            </a>
          </div>
          <div class="eight wide column">
            <div class="ui secondary pointing menu" >
              <router-link to="/home"  class="item" >网站首页</router-link>
              <router-link to="/recruit" class="item">社团招新</router-link>
              <router-link to="/info" class="item">社团资讯</router-link>
              <router-link to="/resource" class="item"> 社团资源 </router-link>
              <router-link to="/blog" class="item">社团博客</router-link>
              <router-link to="/message" class="item">留言板</router-link>
              <router-link to="/about" class="item">关于我们</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ui.container {
  width: 100%;
  margin: 0 !important;
}
.ui.secondary.pointing.menu .active.item {
  border-color: #ffffff;
}
.ui.secondary.menu a {
  font-size: 16px;
  color: #fff !important;
}
.my-logo-text {
  font-size: 24px;
  font-family: "微软雅黑";
  color: #00e181;
}
.navBar {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 999;
}
.ui.segment{
  width: 100%;
}
.my-header {
  margin-left: 150px;
  margin-right: 380px;
  margin-top: 8px;
}
</style>
<script>
export default {
  data() {
    return {
      navBarFixed: false,
    };
  },
  mounted() {
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  },
  methods: {
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 100) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
  },
};
</script>