<template>
  <div class="my-message-bg">
    <div class="ui container">
      <div class="ui secondary segment">
        <img
          src="@images/message.png"
          class="ui image rounded"
          width="100"
          style="margin: auto"/>
        <h2 class="ui header teal" style="margin: auto; width: 100px">留言板</h2>
        <div class="ui secondary segment">
          <h4 class="ui header">给我留言吧</h4>
          <div class="ui form">
            <div class="field">
              <textarea
                placeholder="欢迎各位留言..."
                v-model="content"
                class="message"
                ref="messageVal"
              ></textarea>
            </div>
            <div class="ui left icon input">
              <input type="text" placeholder="姓名" v-model="author" />
              <i class="user icon"></i>
            </div>
            <div class="ui left icon input">
              <input type="text" placeholder="邮箱" v-model="email" />
              <i class="mail icon"></i>
            </div>
            <button class="ui teal button" @click="addMessage">
              <i class="edit outline icon"></i>发布
            </button>
          </div>
        </div>
        <div class="ui secondary segment">
          <div class="ui threaded comments">
            <h3 class="ui dividing header">Comments</h3>
            <div
              class="comment"
              v-for="(message, index) in messageList"
              :key="index">
              <a class="avatar">
                <img
                  :src="message.author == 'Echo.'? require('../../static/images/user.jpg'):require('../../static/images/elliot.jpg')" width="35"
                />
              </a>
              <div class="content">
                <a class="author">{{ message.author }}</a>
                <div class="metadata">
                  <span class="date">{{ message.medate }}</span>
                </div>
                <div class="text">{{ message.content }}</div>
                <div class="actions">
                  <a class="reply" @click="reply(message.author, message.id)">回复</a>
                </div>
              </div>
              <tree-message :childrenList="message.childrenList" :reply="reply"></tree-message>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ui.container {
  width: 80%;
  height: 100%;
  opacity: 0.8;
  margin-top: 20px;
  margin-bottom: 40px;
}
.my-message-bg {
  padding-top: 5em;
  padding-bottom: 5em;
  background-image: url("../../static/images/bg-1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed !important;
  background-size: 100% !important;
  background-position: center top;
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
import messageApi from "../../api/message";
import treeMessage from './components/children'
export default {
  inject: ["reload"],
  data() {
    return {
      imageList: [],
      messageList: [],
      content: "",
      author: "",
      email: "",
      replyName: "",
      pid: 0,
    };
  },
  components:{
      treeMessage
  },
  methods: {
    getMessageList() {
      const _this = this;
      messageApi.getMessageList().then((req) => {
        _this.messageList = req.data;
      });
    },
    reply(replyName, pid) {
      // 获得滚动的像素数
      var intElemScrollTop = document.querySelector(".message"); // 通过类型定位锚点元素
      // 重新设值
      document.documentElement.scrollTop = intElemScrollTop;
      this.$refs.messageVal.focus();
      this.$refs.messageVal.placeholder = "@" + replyName;
      this.replyName = replyName;
      this.pid = pid;
    },
    addMessage() {
      const _this = this;
      const message = this.$qs.stringify({
        pid: _this.pid,
        replyname: _this.replyName,
        author: _this.author,
        email: _this.email,
        content: _this.content,
      });

      messageApi.addMessage(message).then((req) => {
        _this.content = "";
        _this.author = "";
        _this.email = "";
        _this.$refs.messageVal.placeholder = "";
        _this.$message({
          message: req.msg,
          type: "success",
        });
        setTimeout(function () {
          _this.reload();
        }, 1000);
      });
    },
  },
  created() {
    this.getMessageList();
  },
};
</script>