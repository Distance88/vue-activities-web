<template>
  <div class="my-detials">
    <div class="ui container my-container">
      <h3 class="ui header my-header">社团安排</h3>
      <div class="ui container my-container-container">
        <div class="ui three column grid">
          <div class="column">
            <img class="ui image rounded" src="@images/computer1.jpg" />
            <div class="content">
              <router-link to="/recruit"><p>社团招新</p></router-link>
            </div>
          </div>
          <div class="column">
            <img class="ui image rounded" src="@images/computer2.jpg" />
            <div class="content">
              <router-link to="/info"><p>社团任务</p></router-link>
            </div>
          </div>
          <div class="column">
            <img
              class="ui image rounded my-image"
              src="@images/computer3.jpg"
              alt=""
            />
            <div class="content">
              <a href=""><p>社团简介</p></a>
            </div>
          </div>
        </div>
      </div>
      <div class="ui medium my-image"></div>
    </div>
  </div>
</template>
<style scoped>
.my-detials {
  width: 100%;
  height: 100%;
  background-color: #fff !important;
}
.my-container {
  margin: auto !important;
  width: 80%;
  padding-bottom: 5em !important;
}
.my-container-container {
  width: 100%;
  margin: 0 !important;
}
.desc {
  font-weight: bold !important;
}
.my-header {
  padding: 20px 0;
  width: 125px;
  border-bottom: 2px #f2711c solid;
}
.my-direction-text {
  color: #333;
  letter-spacing: 1px !important;
  line-height: 1.8 !important;
}

img {
  cursor: pointer;
  position: relative;
}
.content {
  position: absolute;
  bottom: 40px;
  left: 40px;
  font-size: 18px;
  color: #fff;
}
</style>