<template>
  <div>
        <div class="ui secondary segment">
          <h4 class="ui header">精彩评论</h4>
          <div class="ui form">
            <div class="field">
              <textarea
                placeholder="优质评论可以帮助作者获得更高权重"
                v-model="content"
                class="comments"
                ref="commentsVal"
              ></textarea>
            </div>
            <div class="ui left icon input">
              <input type="text" placeholder="姓名" v-model="author" />
              <i class="user icon"></i>
            </div>
            <button class="ui teal button" @click="addComments">
              <i class="edit outline icon"></i>发布
            </button>
          </div>
        </div>
        <div class="ui secondary segment">
          <div class="ui threaded comments">
            <h3 class="ui dividing header">Comments</h3>
            <div
              class="comment"
              v-for="(comments, index) in commentsList"
              :key="index">
              <a class="avatar">
                <img
                  :src="require('@images/elliot.jpg')" width="35"
                />
              </a>
              <div class="content">
                <a class="author">{{ comments.author }}</a>
                <div class="metadata">
                  <span class="date">{{ comments.createTime }}</span>
                </div>
                <div class="text">{{ comments.content }}</div>
                <div class="actions">
                  <a class="reply" @click="reply(comments.author, comments.id)">回复</a>
                </div>
              </div>
              <tree-comments :childrenList="comments.childrenList" :reply="reply"></tree-comments>
            </div>
          </div>
    </div>
  </div>
</template>
<style scoped>
.ui.container {
  height: 100%;
  opacity: 0.8;
  margin-top: 20px;
  margin-bottom: 40px;
}
.ui.input {
  margin-right: 15px;
}
.ui.segment {
  border-radius: 0.2em;
  background-color: ;
  border-top: 2px solid #00b5ad !important;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}
</style>
<script>
import commentsApi from "@api/comments";
import treeComments from './children.vue'
export default {
  inject: ["reload"],
  props:['commentsList'],
  data() {
    return {
      imageList: [],
      content: "",
      author: "",
      email: "",
      replyName: "",
      pid: 0,
    };
  },
  components:{
      treeComments
  },
  methods: {
    getCommentsList() {
      const _this = this;
      commentsApi.getCommentsList().then((req) => {
        _this.commentsList = req.data;
      });
    },
    reply(replyName, pid) {
      // 获得滚动的像素数
      var intElemScrollTop = document.querySelector(".comments"); // 通过类型定位锚点元素
      // 重新设值
      document.documentElement.scrollTop = intElemScrollTop;
      this.$refs.commentsVal.focus();
      this.$refs.commentsVal.placeholder = "@" + replyName;
      this.replyName = replyName;
      this.pid = pid;
    },
    addComments() {
      const _this = this;
      const params = this.$qs.stringify({
        pid: _this.pid,
        replyname: _this.replyName,
        author: _this.author,
        email: _this.email,
        content: _this.content,
        blogId:this.$route.params.id
      });
      
      commentsApi.addComments(params).then((req) => {
        _this.content = "";
        _this.author = "";
        _this.email = "";
        _this.$refs.commentsVal.placeholder = "";
        _this.$message({
          comments: req.msg,
          type: "success",
        });
        setTimeout(function () {
          _this.reload();
        }, 1000);
      });
    },
  },
  created() {
    this.getCommentsList();
  },
};
</script>