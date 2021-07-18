<template>
  <div class="ui container">
    <div class="ui segment">
      <div class="ui two column grid">
        <div class="column">
          <h3 class="ui header">最新资讯</h3>
        </div>
        <div class="right aligned column">
          <div class="ui large breadcrumb">
            <router-link class="section" to="/home">首页</router-link>
            <i class="right angle icon divider"></i>
            <a class="section">社团资讯</a>
            <i class="right angle icon divider"></i>
            <div class="active section">最新资讯</div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(info, index) in infoList" :key="index" :class=" index == 0 ? 'ui secondary segment my-top-segment': 'ui secondary segment'">
      <div class="ui grid">
        <div class="eleven wide column">
          <a class="ui item basic orange label my-inline-block" style="margin-right: 15px">{{ info.style}}</a>
          <router-link
            :to="{ name:'article', params: { id: info.id } }"
            class="ui item my-padding my-inline-block my-title"
          >
            <h3 class="ui header my-padding-small">{{ info.title }}</h3>
          </router-link>
          <p class="my-digest">{{ info.digest }}</p>
          <div class="ui grid">
            <div class="nine wide column">
              <div class="ui mini horizontal link list">
                <div class="item">
                  <img
                    src="@images/photo.jpg"
                    class="ui avatar image"
                  />
                </div>
                <div class="item">{{ info.author }}</div>
                <div class="item">
                  <i class="calendar alternate icon"></i>{{ info.createtime }}
                </div>
                <div class="item"><i class="eye icon"></i>{{ info.views }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="five wide column">
           <a v-show="index == 0 ? true : false" class="ui red right ribbon label">置顶</a>
        </div>
        
      </div>
    </div>
    <div class="block" style="margin-top: 20px; margin-left: 600px">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style scoped>
.ui.container {
  padding-top: 1em;
  padding-bottom: 5em;
}
h3:hover {
  color: #f2711c;
}
.my-top-segment {
  padding-right: 30px;
}
.my-digest {
  line-height: 1.8 !important;
  letter-spacing: 1px !important;
  font-weight: 300 !important;
  font-size: 15px;
  line-height: 28px;
  color: black;
  font-family: 微软雅黑;
  margin-left: 60px;
}
.my-inline-block{
  display: inline-block !important;
}
</style>
<script>
import infoApi from "@api/info";
export default {
  data() {
    return {
      infoList: [],
      total: 0,
      pageNumber: 1,
    };
  },
  methods: {
    getInfoList(current) {
      const _this = this;
      infoApi.getInfoList(current).then((req) => {
        _this.infoList = req.data.records
        _this.total = req.data.total
      });
    },
    handleCurrentChange(current) {
      this.getInfoList(current);
    },
  },
  created() {
    this.getInfoList(1);
  },
};
</script>