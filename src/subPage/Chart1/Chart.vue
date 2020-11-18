<template>
  <div v-title data-title="专业认知模块">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>图表数据</el-breadcrumb-item>
      <el-breadcrumb-item>专业认知模块</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="row">
      <chart-show :id="'main'" :data="option" class="radar"></chart-show>
      <chart-show :id="'main2'" :data="option2" class="pie"></chart-show>
    </div>
    <chart-show :id="'main3'" :data="option3" class="bar"></chart-show>
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
          text: "专业认知模块",
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
              { name: "专业的就业及发展", max: 3, color: "rgb(194,53,49)" },
              { name: "专业的知识体系", max: 3, color: "rgb(194,53,49)" },
              { name: "专业技能要求", max: 3, color: "rgb(194,53,49)" },
              { name: "专业职业素养要求", max: 3, color: "rgb(194,53,49)" },
              { name: "专业的课程设置", max: 3, color: "rgb(194,53,49)" },
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
      option2: {
        backgroundColor: "#2c343c",
        title: {
          text: "了解专业的途径",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc",
          },
        },
        legend: {
          data: [
            "与专业老师交流",
            "高年级在校生介绍",
            "专业认知讲座与课程",
            "专业相关网站和论坛",
            "专业相关书籍",
            "与校外专业人士交流",
          ],
          orient: "vertical",
          left: 10,
          top: 50,
          textStyle: {
            color: "#ccc",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        visualMap: {
          show: false,
          min: 0,
          max: 10,
          inRange: {
            colorLightness: [0.1, 0.9],
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 1, name: "与专业老师交流" },
              { value: 1, name: "高年级在校生介绍" },
              { value: 1, name: "专业认知讲座与课程" },
              { value: 1, name: "专业相关网站和论坛" },
              { value: 1, name: "专业相关书籍" },
              { value: 1, name: "与校外专业人士交流" },
            ],
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.8)",
            },
            labelLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      },
      max: "",
      option3: {
        title: {
          text: "了解专业的途径",
          subtext: "数据来自本网站系统数据采集  ",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["数量"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: [
            "关注与本专业相关的行业热点和前沿动态",
            "个性特征适合在本专业学习",
            "本专业学习过程充满乐趣",
            "积极主动地学习本专业知识",
            "重新选择专业，我仍会选择本专业",
            "愿意选择与本专业对口的工作",
            "对本专业的未来发展有信心",
          ],
        },
        series: [
          {
            name: "数量",
            type: "bar",
            data: [3, 9, 4, 7, 4, 3, 10],
          },
        ],
      },
    };
  },
  methods: {
    // Q6 雷达
    async getAnalysisData1() {
      const { data: res1 } = await this.$axios.get("analysis/analysis1");
      this.option.series[0].data[0].value = res1;
      console.log("123");
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
    const res = await this.getAnalysisData1();
    console.log(res);
    await this.getAnalysisData2();
    await this.getAnalysisData3();
    // // 3.基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById("main"));
    // var myChart2 = echarts.init(document.getElementById("main2"));
    // // 4.指定图表的配置项和数据
    // // 合并2份数据
    // // const result = _.merge(res.data,this.options)
    // // 5.使用刚指定的配置项和数据显示图表。
    // myChart.setOption(this.option);
    // myChart2.setOption(this.option2);
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
