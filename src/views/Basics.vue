<template>
  <div class="basics">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>基础指数</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">数据样本的基础信息</div>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column type="index" label="#" width="30px"></el-table-column>
      <el-table-column prop="sex" label="性别" width="50px"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="50px"> </el-table-column>
      <el-table-column prop="grade" label="年级" width="50px">
      </el-table-column>
      <el-table-column prop="school" label="学校"> </el-table-column>
      <el-table-column prop="college" label="学院"> </el-table-column>
      <el-table-column
        prop="major"
        label="专业"
        :filters="filtersArray"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <!-- <el-table-column prop="StudentID" label="学号"> </el-table-column> -->
      <el-table-column prop="profession" label="父母职业"></el-table-column>
      <el-table-column prop="GPA" label="绩点" :formatter="formatterGPA">
      </el-table-column>
      <el-table-column
        prop="match"
        label="参与过的创新创业比赛"
        min-width="140px"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="matchTime"
        label="每周在实验室花费时间"
        :formatter="formatterTime"
      >
      </el-table-column>
      <el-table-column
        prop="matchResult"
        label="获得级别奖项"
        :formatter="formatterResult"
      >
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
      formatterGPA: (row, column, cellValue, index) => {
        let value = row.GPA.toString();
        let result = "";
        switch (value) {
          case "5":
            result = "3.7以上";
            break;
          case "4":
            result = "3.3-3.7";
            break;
          case "3":
            result = "3.0-3.3";
            break;
          case "2":
            result = "2.6-3.0";
            break;
          case "1":
            result = "2-2.6";
            break;
          case "0":
            result = "2.0以下";
            break;
          default:
            break;
        }
        return result;
      },
      formatterTime: (row, column, cellValue, index) => {
        let value = row.matchTime.toString();
        let result = "";
        switch (value) {
          case "4":
            result = "24小时以上";
            break;
          case "3":
            result = "16-24小时";
            break;
          case "2":
            result = "8-16小时";
            break;
          case "1":
            result = "8小时以下";
            break;
          default:
            break;
        }
        return result;
      },
      formatterResult: (row, column, cellValue, index) => {
        let value = row.matchResult.toString();
        let result = "";
        switch (value) {
          case "4":
            result = "国家级奖项";
            break;
          case "3":
            result = "省级奖项";
            break;
          case "2":
            result = "市级奖项";
            break;
          case "1":
            result = "无";
            break;
          default:
            break;
        }
        return result;
      },
      filtersArray: [
        { text: "物联网工程", value: "物联网工程" },
        { text: "机械电子工程", value: "机械电子工程" },
        { text: "通信工程", value: "通信工程" },
      ],
      filterHandler(value, row, column) {
        // value 为filtersArray 中你选中的value
        // colunm为你设置筛选那一列的数据，其中又一个属性为property，他里面是该列的prop名
        // console.log(value);
        // console.log(column);
        const property = column["property"];
        return row[property] === value;
      },
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