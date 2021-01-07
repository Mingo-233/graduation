<template>
  <div v-title data-title="反馈建议" class="suggestion">
    <div class="head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>分析结论</el-breadcrumb-item>
        <el-breadcrumb-item>反馈建议</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="body">
      <h1 class="title">反馈建议区</h1>
      <el-row :gutter="50">
        <el-col :span="8" v-for="(item, index) in formData" :key="index">
          <el-card shadow="hover"> {{ item }} </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "suggestion",
  data() {
    return {
      formData: [],
    };
  },
  mounted() {
    this.getCommentData();
  },
  methods: {
    async getCommentData() {
      const { data } = await this.$get("analysis/comment");
      this.formData = data;
      console.log(this.formData);
    },
  },
  components: {},
};
</script>

<style lang="less">
.suggestion {
  .body {
    margin-top: 2%;
    text-align: center;
    .el-card {
      margin: 20px;
      text-align: left;
    }
  }
}
</style>