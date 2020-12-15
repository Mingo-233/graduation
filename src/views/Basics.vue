<template>
  <div class="basics">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>基础指数</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">数据样本的基础信息</div>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="sex" label="性别" width="180"> </el-table-column>
      <el-table-column prop="nation" label="民族" width="180">
      </el-table-column>
      <el-table-column prop="major" label="专业" width="180"> </el-table-column>
      <el-table-column prop="education" label="父母最高教育水平" width="180">
      </el-table-column>
      <el-table-column prop="profession" label="父母职业阶级">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import "./icon";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    async getBasicsData() {
      const { data: res } = await this.$axios.get("analysis/analysis0");
      console.log(res);
      this.tableData = res;
    },
  },
  mounted() {
    this.getBasicsData();
  },
};
</script>
<style lang="less" >
.basics {
  font-size: 16px;
  .svg-icon {
    font-size: 3em;
    color: brown;
  }
  .title {
    width: 100%;
    height: 50px;
    background: #ffffff;
    line-height: 50px;
    font-size: 20px;
    margin: 10px 0;
    text-align: center;
  }
}
</style>