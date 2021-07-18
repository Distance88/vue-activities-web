<template>
  <div class="ui container">
    <div class="ui segment">
      <div class="ui two column grid">
        <div class="column">
          <h3 class="ui header">习题答案</h3>
        </div>
        <div class="right aligned column">
          <div class="ui large breadcrumb">
            <a class="section">首页</a>
            <i class="right angle icon divider"></i>
            <a class="section">社团资讯</a>
            <i class="right angle icon divider"></i>
            <div class="active section">习题答案</div>
          </div>
        </div>
      </div>
    </div>
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(problem,index) in problemList" :key="index" :title="problem.title" :name="index">
        <div class="ui threaded comments">
          <h3 class="ui dividing header">Answers</h3>
          <div class="comment" v-for="(answer,index) in problem.answerList" :key="index">
            <a class="avatar"> <img src="@images/matt.jpg" /></a>
            <div class="content">
              <a class="author">{{ answer.author }}</a>
              <div class="metadata">
                <span class="date">{{ answer.time }}</span>
              </div>
              <div style="height: 100%" v-html="answer.answer"></div>
            </div>
          </div>
          <form class="ui reply form" style="margin-top:30px">
            <div class="ui left icon input small" style="margin-right: 10px">
              <input type="text" placeholder="姓名" />
              <i class="user icon"></i>
            </div>
            <div class="ui blue labeled submit icon button small" @click="dialogVisible = !dialogVisible">
              <i class="icon edit"></i> Add Answer
            </div>
            <el-dialog
              title="添加答案"
              :visible.sync="dialogVisible"
              :append-to-body="true"
              width="90%">
              <mavon-editor style="height: 100%"  v-model="answer"/>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = !dialogVisible">取 消</el-button>
                <el-button type="primary" @click="addAnswer">确 定</el-button>
              </span>
            </el-dialog>
          </form>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible:false,
        activeNames:-1,
        answer:""
      };
    },
    computed:{
      problemList(){
        return this.$store.getters.problemList
      }
    },
    methods: {
      addAnswer(){
        console.log(this.answer)
      }
    }
  }
</script>