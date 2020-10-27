<template>
  <div v-title data-title="学习投入模块">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>图表数据</el-breadcrumb-item>
      <el-breadcrumb-item>学习投入模块</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="row">
      <chart-show :id="'main'" :data="option" class="radar"></chart-show>
    </div>
  </div>
</template>

<script>
var echarts = require("echarts");
import chartShow from "./component/chartShow";
const _this = this;
export default {
  data() {
    return {
      option: {
        title: {
          text: "课后学习情况",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "center",
          data: ["平均指数"],
        },
        radar: [
          {
            indicator: [
              { name: "制定短期学习计划", max: 3, color: "rgb(194,53,49)" },
              {
                name: "根据情况分配学习时间和精力",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "搜集、阅读课程相关的参考资料",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "课后复习笔记及总结相关知识",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "注意观察、借鉴他人的学习方法和经验",
                max: 3,
                color: "rgb(194,53,49)",
              },
            ],
            center: ["50%", "50%"],
            radius: 150,
          },
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            areaStyle: {
              color: "rgb(194,53,49)",
            },
            data: [
              {
                value: [3, 3, 2, 1, 1],
                name: "平均指数",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    // Q12 雷达
    async getAnalysisData12() {
      const { data: res12 } = await this.$axios.get("analysis/analysis12");
      this.option.series[0].data[0].value = res12;
    },
    // Q7 条形
    async getAnalysisData2() {
      const { data: res2 } = await this.$axios.get("analysis/analysis2");
      this.option3.series[0].data.value = res2;
      console.log(res2);
    },
    // Q8 饼图
    async getAnalysisData3() {
      const { data: res3 } = await this.$axios.get("analysis/analysis3");
      console.log(res3);
      this.option2.visualMap.max = res3.length;
      this.option2.series[0].data = res3;
    },
  },
  // mounted 此时页面上的元素，已经被渲染完毕
  mounted: async function () {
    await this.getAnalysisData12();
    // await this.getAnalysisData2();
    // await this.getAnalysisData3();
  },
  components: {
    chartShow,
  },
};
</script>

<style lang="less" scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .radar {
    height: 500px;
    width: 50%;
    border: 1px solid black;
    box-sizing: border-box;
  }
  .pie {
    height: 500px;
    width: 50%;
  }
}
.bar {
  height: 350px;
  width: 80%;
}
</style>
