<template>
  <div>
    <div class="comments" v-for="(children, index) in childrenList" :key="index">
    <div class="comment">
      <a class="avatar">
        <img :src="require('@images/matt.jpg')" width="35"/>
      </a>
      <div class="content">
        <a class="author">
          {{ children.author }}
        </a>
        <a class="author" style="color: #009c95; margin-left: 5px">@{{ children.replyname }}</a>
        <div class="metadata">
          <span class="date">{{ children.createTime }}</span>
        </div>
        <div class="text">{{ children.content }}</div>
        <div class="actions">
          <a class="reply" @click="reply(children.author, children.id)">回复</a>
        </div>
      </div>
    </div>
    <treeMessage :childrenList="children.childrenList"></treeMessage>
  </div>
  </div>
</template>

<script>
export default {
    name:"treeMessage",
    props:{
      childrenList:{
        type:Array,
        default:null
      },
    },
    methods:{
      reply(replyName,pid){
        this.$parent.reply(replyName,pid)
      }
    }
}
</script>