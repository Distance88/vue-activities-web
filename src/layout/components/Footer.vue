<template>
  <footer class="ui inverted vertical segment my-padding-big">
    <div class="ui center aligned container">
      <div class="ui inverted divided grid">
        <div class="three wide column">
          <img
            src="@images/19南工群聊二维码.png"
            class="ui rounded image"
            alt
            style="width: 100px;margin-left: 60px"
          />
        </div>
        <div class="four wide column">
          <div class="ui inverted link list">
            <h4 class="ui inverted header">关于我们</h4>
            <router-link to="/about" class="my-about item">我们南工社团成立于2004年，是学院首批成立的工作室，社团主攻移动应用方向、web开发等方向。社团发展宗旨为:“勤学、合作、拓新、自主、敏行”。</router-link>
          </div>
        </div>
        <div class="four wide column">
          <div class="ui inverted link list">
            <h4 class="ui inverted header">联系我们</h4>
            <a class="item">邮箱:15716355016@163.com</a>
            <a class="item">
              <br />
            </a>
            <a class="item">QQ:897566246</a>
          </div>
        </div>
        <div class="five wide column">
          <div class="ui inverted link list">
            <h4 class="ui inverted header">友情链接</h4>
             <a href="http://jwxt.nyist.edu.cn/jwweb/home.aspx" class="item" style="margin-bottom:5px">南阳理工学院教务管理系统</a>
             <a href="http://61.163.231.201:8000/Lab" class="item" style="margin-bottom:5px">计算机与软件学院实验系统</a>
             <a href="http://nyist.fanya.chaoxing.com/portal" class="item">南阳理工学院网络教学平台</a>
          </div>
        </div>
      </div>
      <div class="ui inverted section divider"></div>
      <p class="my-text">Copyright © 2020 Bolg Powered by °Distance.</p>
    </div>
  </footer>
</template>
<style scoped>
.ui.container{
  width: 100%;
  padding: 0 !important;
}
.ui.segment {
  border-radius: 0 !important;
}
a {
  cursor: pointer;
  color: white;
}
a:hover {
  color: white;
}
.my-text {
  opacity: 0.6;
  letter-spacing: 1px !important;
  font-weight: 300 !important;
  box-sizing: inherit;
  font-size: 1rem;
  color: white !important;
  font-family: "Lato", "Helvetica Neue", Arial, Helvetica, sans-serif;
  line-height: 1.4285em;
}
.my-about{
  line-height: 1.8 !important;
    letter-spacing: 1px !important;
}
</style>