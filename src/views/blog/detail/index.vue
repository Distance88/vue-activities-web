<template>
    <div class="ui container" style="padding-bottom:5em;padding-top:6em">
      <div class="ui top attached segment">
        <div class="ui two column middle aligned grid">
          <div class="column">
            <div class="ui horizontal link list">
              <div class="item">
                <img
                  :src="blog.photo"
                  class="ui avatar image"
                />
              </div>
              <div class="item">{{ blog.author }}</div>
               <div class="item">
                <i class="calendar alternate icon"></i>
                {{ blog.createTime }}
              </div>
              <div class="item">
                <i class="eye icon"></i>
                {{ blog.views }}
              </div>
            </div>
          </div>
          <div class="right aligned column">
            <div class="ui breadcrumb">
              <router-link class="section" to="/">首页</router-link>
              <div class="divider">/</div>
              <router-link  class="section" to="/blog">社团博客</router-link>
              <div class="divider">/</div>
              <div class="active section">博客正文</div>
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
            <h3 class="ui center aligned header">{{ blog.title }}</h3>
          </div>
          <div class="two wide column">
            <a class="item">
              <div class="ui orange label basic" style="margin-bottom: 20px">
                {{ blog.style }}
              </div>
            </a>
          </div>
        </div>
        <div v-html="blog.content" class="typo type-selection"></div>
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
              <li class="my-text">作者：{{ blog.author }}</li>
              <li class="my-text">发布时间：{{ blog.createTime }}</li>
              <li class="my-text">作品标签：{{blog.type}}</li>
            </ul>
          </div>
        </div>
      </div>
        <comment-list :commentsList="commentsList"></comment-list>
    </div>
</template>
<style >
ul li a{
  color: #4183c4;
}
</style>
<style src="../../../static/css/typo.css"></style>
<script>
import $ from "jquery";
import blogApi from "@api/blog";
import Prism from "prismjs";
import commentList from './components/comment'
export default {
  data() {
    return {
      blog: {},
      commentsList:[]
    };
  },
  components:{
    commentList
  },
  methods: {
    getBlogById() {
      let id = this.$route.params.id;
      const _this = this;
      if (id != null) {
        sessionStorage.setItem("blogId", id);
      }

      blogApi.getBlogById(sessionStorage.getItem('blogId')).then(req=>{
          _this.blog = req.data
          _this.commentsList = req.data.commentsList
            setTimeout(function () {
          $("pre").addClass("line-numbers").css("white-space", "pre-wrap");
          $(".toolbar-item button").addClass("ui inverted button");
          $(".toolbar-item button").css("background-color", "white");
          $(".toolbar-item button").css("color", "black");
          $(".line-numbers-row span").css("heigth", "20px!important");
          Prism.highlightAll();
        }, 100);
      })
    },
  },
  created() {
    this.getBlogById();
  },
};
</script>