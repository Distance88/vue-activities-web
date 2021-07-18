<template>
    <div class="ui container" style="padding-bottom:5em;padding-top:100px">
      <div class="ui top attached segment">
        <div class="ui two column middle aligned grid">
          <div class="column">
            <div class="ui horizontal link list">
              <div class="item">
                <img
                  src="@images/user.jpg"
                  alt
                  class="ui avatar image"
                />
              </div>
              <div class="item">{{ info.author }}</div>
               <div class="item">
                <i class="calendar alternate icon"></i>
                {{ info.createtime }}
              </div>
              <div class="item">
                <i class="eye icon"></i>
                {{ info.views }}
              </div>
            </div>
          </div>
          <div class="right aligned column">
            <div class="ui breadcrumb">
              <router-link class="section" to="/home">首页</router-link>
              <div class="divider">/</div>
              <router-link  class="section" to="/info">社团资讯</router-link>
              <div class="divider">/</div>
              <div class="active section">资讯正文</div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui attached center aligned segment">
        <img
          src="https://source.unsplash.com/user/erondu"
          alt
          class="ui image"
          style="margin: auto"
        />
      </div>
      <div class="ui attached segment">
        <div class="ui grid">
          <div class="fourteen wide column">
            <h3 class="ui center aligned header">{{ info.title }}</h3>
          </div>
          <div class="two wide column">
            <a class="item">
              <div class="ui orange label basic" style="margin-bottom: 20px">
                {{ info.style }}
              </div>
            </a>
          </div>
        </div>
        <div v-html="info.content" class="markdown-body"></div>
        <div class="ui center aligned basic segment">
          <el-popover width="320" trigger="click" transition="fade-in-linear">
            <template>
              <slot name="reference">
                <div class="ui orange basic label">
                  <div class="ui images" style="font-size: inherit !important">
                    <div class="image">
                      <img
                        src="@images/wechat.png"
                        alt
                        width="120"
                        class="ui rounded bordered image"
                      />
                      <div align="center">支付宝</div>
                    </div>
                    <div class="image">
                      <img
                        alt
                        src="@images/wechat.png"
                        width="120"
                        class="ui rounded bordered image"
                      />
                      <div align="center">微信</div>
                    </div>
                  </div>
                </div>
              </slot>
            </template>
            <button class="ui orange basic circular button" slot="reference">
              赞赏
            </button>
          </el-popover>
        </div>
      </div>
      <div class="ui attached positive message">
        <div class="ui grid">
          <div class="ui eleven wide column">
            <ul class="list">
              <li class="my-text">作者：{{ info.author }}</li>
              <li class="my-text">发布时间：{{ info.createtime }}</li>
              <li class="my-text">作品标签：{{info.style}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
.aaa{
  background-image: url('../../static/images/about-bg.jpg');
}
</style>
<script>
import infoApi from "@api/info";
export default {
  data() {
    return {
      info: {
        content: "",
      },
      message:"最新咨询"
    };
  },
  methods: {
    getInfoById() {
      let id = this.$route.params.id;
      const _this = this;
      if (id != null) {
        sessionStorage.setItem("InfoId", id);
      }
      infoApi
        .getInfoById(id != null ? id : sessionStorage.getItem("InfoId"))
        .then((req) => {
          _this.info = req.data;
        });
    },
  },
  created() {
    this.getInfoById();
  },
};
</script>