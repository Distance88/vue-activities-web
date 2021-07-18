<template>
  <div class="ui container">
    <div class="ui segment">
      <div class="ui two column grid">
        <div class="column">
          <h3 class="ui header">习题作业</h3>
        </div>
        <div class="right aligned column">
          <div class="ui large breadcrumb">
            <a class="section">首页</a>
            <i class="right angle icon divider"></i>
            <a class="section">社团资讯</a>
            <i class="right angle icon divider"></i>
            <div class="active section">习题作业</div>
          </div>
        </div>
      </div>
    </div>
    <el-table :data="problemList" stripe style="width: 100%; padding-top: 2em; padding-bottom: 2em">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item>
              <p class="description">Description:</p>
              <span>{{ scope.row.description }}</span>
            </el-form-item>
            <el-form-item>
              <p class="description">Input:</p>
              <span>{{ scope.row.input }}</span>
            </el-form-item>
            <el-form-item>
              <p class="description">Output:</p>
              <span>{{ scope.row.output }}</span>
            </el-form-item>
            <el-form-item class="my-inline-block">
              <p class="description">Sample Input 1:</p>
              <div class="sampleInput">
                <span v-for="(sampleinput, index) in scope.row.sampleinput.split('\n')" :key="index">
                  {{ sampleinput }}
                </span>
              </div>
            </el-form-item>
            <el-form-item class="my-inline-block">
              <p class="description">Sample Output 1:</p>
              <div class="sampleInput">
                <span v-for="(sampleoutput, index) in scope.row.sampleoutput.split('\n')" :key="index">
                  {{ sampleoutput }}
                </span>
              </div>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="#" align="center" width="120">
      </el-table-column>
      <el-table-column prop="title" label="Title" align="center" width="340">
      </el-table-column>
      <el-table-column
        prop="level"
        label="Level"
        align="center"
        width="340"
        :filters="[
          { text: 'Low', value: 'Low' },
          { text: 'Mid', value: 'Mid' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-button
            size="mini" :type="scope.row.level === 'Mid' ? 'primary' : 'success'" disable-transitions>{{ scope.row.level }}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Answer" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="seeAnswer(scope.$index)">查看题解</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="margin-top: 20px; margin-left: 700px;padding-bottom:2em">
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
.description {
  font-size: 20px;
  font-weight: 400;
  margin: 5px 0 8px;
  color: #3091f2;
}
.el-form-item {
  display: block;
}
span {
  display: block;
  height: 20px;
}
.my-inline-block {
  display: inline-block !important;
  margin-right: 30px;
}
.sampleInput {
  width: 350px;
  height: 100%;
  padding-bottom: 20px;
  border: 1px solid #e9eaec;
}
</style>
<script>
import problemApi from "@api/problem";
import {mapActions} from 'vuex'
export default {
  props: ["activeName"],
  data() {
    return {
      problemList: [],
      pageNumber:1,
      total:0
    };
  },
  methods: {
    ...mapActions(['setProblemList']),
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    filterTag(value, row) {
      return row.level === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    getPrblemList(current) {
      const _this = this;
      problemApi.getProblemList(current).then((req) => {
        _this.problemList = req.data.records;
        _this.$store.dispatch('setProblemList',req.data.records)
        _this.total = req.data.total;
      });
    },
    seeAnswer(index) {
      this.$emit("seeAnswer",index);
    },
    handleCurrentChange(current) {
      this.getInfoList(current);
    },
  },
  created() {
    this.getPrblemList(1);
  },
};
</script>