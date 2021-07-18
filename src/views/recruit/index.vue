<template>
  <div class="my-synopsis">
    <div class="ui container animated bounceInDown">
      <h3 class="ui header my-header">招新对象</h3>
      <div class="ui middle aligned animated selection relaxed list" style="padding-left:50px">
        <div class="item" style="margin-top:30px">
          <div class="content">
              <div class="ui grid">
                <div class="two wide center aligned column">
                   <svg class="icon icon-header">
                    <use href="#icon-daima" />
                  </svg>
                </div>
                <div class="eleven wide column">
                  <h3 class="ui header header-txt">移动应用与开发</h3>
                  <p>以手机、PDA、UMPC等便携终端为基础，进行相应的开发工作，由于这些随身设备基本都采用无线上网的方式，因此，业内也称作为无线开发。</p>
                </div>
              </div>
            </div>
        </div>
          <div class="item">
          <div class="content">
              <div class="ui grid">
                <div class="two wide center aligned column">
                   <svg class="icon icon-header">
                    <use href="#icon-ziyuan" />
                  </svg>
                </div>
                <div class="eleven wide column">
                  <h3 class="ui header header-txt">大数据</h3>
                  <p>基于互联网“云计算和大数据时代”的高速发展、传统数据处理应用软件不足以处理它们的大或复杂的数据集的术语， 通过云计算和大数据领域的主流技术，培养具备对海量数据管理、分析、处理、挖掘能力的复合型应用人才。</p>
                </div>
              </div>
            </div>
        </div>
          <div class="item">
          <div class="content">
              <div class="ui grid">
                <div class="two wide center aligned column">
                   <svg class="icon icon-header">
                    <use href="#icon-yunjisuan" />
                  </svg>
                </div>
                <div class="eleven wide column">
                  <h3 class="ui header header-txt">云计算</h3>
                  <p>基于互联网“云计算和大数据时代”的高速发展、使用和交付模式，通常涉及通过互联网来提供动态易扩展且经常是虚拟化的资源。 主要用于云平台开发与部署，虚拟化技术应用等。</p>
                </div>
              </div>
            </div>
        </div>
          <div class="item">
          <div class="content">
              <div class="ui grid">
                <div class="two wide center aligned column">
                   <svg class="icon icon-header">
                    <use href="#icon-fenzhi" />
                  </svg>
                </div>
                <div class="eleven wide column">
                  <h3 class="ui header header-txt">智能软件</h3>
                  <p>基于信息化时代的数据爆发式的增长，培养具备较好的数理基础，掌握常用机器学习及深度神经网络常用模型及应用， 能够熟练使用主流的深度学习框架进行智能应用系统的设计与开发的应用型工程技术人才。</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.my-synopsis {
  width: 100%;
  height: 100%;
  background-color: #fff !important;
}
.icon {
  width: 5em !important;
  height: 5em !important;
  vertical-align: -0.2em;
  fill: currentColor;
  color: #000;
  overflow: hidden;
}
.ui.container {
  margin: 0 auto !important;
  width: 80%;
  padding-top: 5em !important;
  padding-bottom: 5em !important;
}
.my-header {
  padding: 20px 0;
  width: 125px;
  border-bottom: 2px #f2711c solid;
}
.item{
  padding-top: 2em !important;
  padding-bottom: 2em !important;
}
.ui.selection.list>.item:hover{
  background-color: #E0E1E2 !important;
  color:#d2212c !important;
  border-left: 10px solid #d2212c;
}
.header-txt{
  padding-bottom: 1.5em !important;
}
p{
  font-size:15px;
  line-height:28px; 
}
</style>
<script>
export default {
}
</script>