<template>
  <div class="ui container" style="padding-top: 5em !important; padding-bottom: 5em !important;">
    <div class="ui grid">
      <div class="eleven wide column">
        <div class="ui segment">
          <div class="ui two column grid">
            <div class="column">
              <h3 class="ui header teal">博客</h3>
            </div>
            <div class="right aligned column">
              共
              <h4 class="ui header orange my-inline-block">{{ total }}</h4>
              篇
            </div>
          </div>
        </div>

        <div class="ui segment" v-for="(blog, index) in blogList" :key="index">
          <div class="ui grid">
            <div class="twelve wide column">
              <a class="ui orange basic mini label">{{ blog.style }}</a>
              <router-link tag="h3" :to="{ name:'detail', params: { id: blog.id } }" class="ui header my-inline-block my-title">
                  {{ blog.title }}
              </router-link>
              <p class="my-digest">
                {{ blog.digest }}
              </p>
            </div>
            <div class="four wide column">
              <img
                class="ui image rounded"
                width="150"
                :src="blog.charts"
              />
            </div>
          </div>
          <div class="ui grid">
            <div class="twelve wide column">
              <div class="ui two column grid">
                <div class="column">
                  <div class="ui horizontal mini list">
                    <div class="item">
                      <img
                        class="ui avatar image"
                        :src="blog.photo"
                      />
                    </div>
                    <router-link class="item" style="color:#333 !important" :to="{name:'user',params:{'userId':blog.userId,'username':blog.author}}">{{ blog.author }}</router-link>
                    <div class="item">
                      <i class="calendar alternate icon"></i
                      >{{ blog.createTime }}
                    </div>
                    <div class="item">
                      <i class="eye icon"></i>{{ blog.views }}
                    </div>
                  </div>
                </div>
                <div class="right aligned column">
                  <router-link 
                    class="ui red basic small label"
                    v-for="(label, i) in blog.label.split(',')"
                    :to="{name:'label',params:{'name':label}}"
                    :key="i"
                  >
                    {{ label }}
                  </router-link>
                </div>
              </div>
            </div>
            <div class="right aligned four wide column">
              <router-link class="ui red basic small label" :to="{name:'type',params:{'name':blog.type}}">{{ blog.type }}</router-link>
            </div>
          </div>
        </div>

        <div class="ui bottom attached segment">
          <div class="ui middle aligned three column grid">
            <div class="column">
              <a class="ui teal basic mini button" @click="lastPage">上一页</a>
            </div>
            <div class="center aligned column">
              <span id="current">{{ current }}</span>
              <span>/</span>
              <span>{{ pages }}</span>
            </div>
            <div class="right aligned column">
              <a class="ui teal basic mini button" @click="nextPage">下一页</a>
            </div>
          </div>
        </div>
      </div>
      <div class="five wide column">
        <recommend-list></recommend-list>
        <label-list></label-list>
        <type-list></type-list>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ui.container {
  padding-top: 3em !important;
  padding-bottom: 3em !important;
  margin: 0;
}
.my-inline-block {
  display: inline-block !important;
}
.ui.header {
  margin: 0;
}
.my-title {
  margin-left: 15px !important;
}
.my-title:hover {
  color: #f2711c !important;
}
.my-digest {
  font-weight: 500 !important;
  letter-spacing: 1px !important;
  line-height: 1.8 !important;
  margin-top: 5px;
  color: #000;
  font-family: "微软雅黑";
}
.ui.list {
  color: #666;
}
h3{
  cursor: pointer;
}
</style>
<script>
import recommendList from "./components/recommend";
import labelList from "./components/label";
import typeList from "./components/type";
import blogApi from "@api/blog";
export default {
  data() {
    return {
      blogList: [],
      current: 1,
      total: 0,
      pages:0
    };
  },
  components: {
    recommendList: recommendList,
    labelList: labelList,
    typeList: typeList,
  },
  methods: {
    getBlogList(current) {
      const _this = this;
      blogApi.getBlogList(current).then((req) => {
        _this.blogList = req.data.records;
        _this.total = req.data.total
        _this.pages = req.data.pages
      });
    },
    lastPage() {
      let current = document.querySelector("#current").innerHTML;
      if (current <= 1) {
        this.$message.error("没有更多内容");
        return false;
      }
      this.current--;
      this.getBlogList(this.current)
    },
    nextPage() {
      let current = document.querySelector("#current").innerHTML;
      if (current >= this.pages) {
        this.$message.error("没有更多内容");
        return false;
      }
      this.current++;
      this.getBlogList(this.current)
    },
  },
  created() {
    this.getBlogList(1)
  },
};
</script>