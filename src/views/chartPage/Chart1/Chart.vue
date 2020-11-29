<template>
  <div v-title data-title="专业认知模块" class="chart1Mode">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>图表数据</el-breadcrumb-item>
      <el-breadcrumb-item>专业认知模块</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="body">
      <div class="topic">
        <svg
          t="1606024523939"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2443"
          width="32"
          height="32"
        >
          <path
            d="M494.1 221.6l18.2 91.4-40.9-77.5c-31.6 19.9-64 42.2-96.9 67.3l26.8 134.4-58-109.9c-25.6 20.7-51.4 43.2-77.3 67.4L295.6 543l-61.8-117.1c-26.6 26.4-53.2 54.7-79.8 85.2l35.9 180-72.3-136.9c-17.5 21.4-34.9 43.6-52.2 66.9-13.3 49.3 79.5 232.6 79.5 232.6l-44.5 90.5 96.5-67.8s205.9-7 234.3-31.7c10.5-26.5 21.5-52.5 33.1-78.1l-122.5 1.8L486.1 720c17.4-35.8 35.8-70.6 54.9-104.3l-135.8 1.9 167.5-56c19.6-32.4 39.8-63.7 60.1-93.7L511 469.6l157.4-52.7c24.5-34.1 49-66.4 73.3-96.7l-90.5 1.3 123-41.1c71-85.3 137.1-152.5 185.8-197.7-3.7-6.2-207.3-15.7-465.9 138.9zM210.7 851c-22.9-1.7-40.5 5.7-38.8-22.5 239.7-470.6 763.6-746 763.6-746S339.4 498.5 210.7 851z"
            fill="#040000"
            p-id="2444"
          ></path>
        </svg>
        <span>数据分析报告</span>
      </div>
      <h3>1专业认知</h3>
      <div>
        该雷达图分析显示了各专业学生对自身专业认知程度情况，可以通过选择不同专业来进行横向比较，雷达图中某一轴覆盖面积越大，说明该轴所对应的专业相关性认知程度越好。最高分值为3
        <br />
        <span>注：平均指数为该院校下所有专业的平均分数</span>
      </div>
      <div class="chart">
        <chart-show :id="'main'" :data="option" class="radar"></chart-show>
      </div>
      <div class="chart">
        <chart-show :id="'main2'" :data="option2" class="pie"></chart-show>
      </div>
      <div class="chart">
        <chart-show :id="'main3'" :data="option3" class="bar"></chart-show>
      </div>
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
          text: "专业认知",
          subtext: "数据来自本网站系统数据采集",
          top: 0,
          left: 10,
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "center",
          top: 10,
          data: ["平均指数", "物联网工程", "通信工程", "机械电子工程"],
          selected: {
            通信工程: false,
            机械电子工程: false,
          },
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
            areaStyle: {},
            data: [
              {
                value: [3, 3, 2, 1, 1],
                name: "平均指数",
              },
              {
                value: [2, 3, 2, 2, 2],
                name: "物联网工程",
              },
              {
                value: [1, 3, 2, 2, 1],
                name: "通信工程",
              },
              {
                value: [1, 1, 1, 1, 1],
                name: "机械电子工程",
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
          top: 0,
          textStyle: {
            color: "#ccc",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        visualMap: {
          show: true,
          text: ["高", "低"],
          min: 0,
          max: 10,
          color: ["red", "white"],
          // inRange: {
          //   colorLightness: [0.1, 0.9],
          // },
          left: "left",
          top: "bottom",
          calculable: true,
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            center: ["50%", "60%"],
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
      option3: {
        title: {
          text: "在本专业学习情况",
          subtext: "数据来自本网站系统数据采集  ",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["平均指数", "物联网工程", "通信工程", "机械电子工程"],
          selected: {
            通信工程: false,
            机械电子工程: false,
          },
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
            name: "平均指数",
            type: "bar",
            data: [3, 9, 4, 7, 4, 3, 10],
          },
          {
            name: "物联网工程",
            type: "bar",
            data: [3, 9, 4, 7, 4, 3, 10],
          },
          {
            name: "通信工程",
            type: "bar",
            data: [3, 9, 4, 7, 4, 3, 10],
          },
          {
            name: "机械电子工程",
            type: "bar",
            data: [3, 9, 4, 7, 4, 3, 10],
          },
        ],
      },
    };
  },
  methods: {
    // Q9 雷达
    async getAnalysisData1() {
      const { data: res1 } = await this.$axios.get("analysis/analysis1");
      this.option.series[0].data[0].value = res1.sumQ9;
      this.option.series[0].data[1].value = res1.sumQ9Wlw;
      this.option.series[0].data[2].value = res1.sumQ9Tx;
      this.option.series[0].data[3].value = res1.sumQ9Jxdz;
      console.log(res1);
    },
    // Q10 条形
    async getAnalysisData2() {
      const { data: res2 } = await this.$axios.get("analysis/analysis2");
      this.option3.series[0].data.value = res2;
      this.option3.series[0].data.value = res2;
      this.option3.series[0].data.value = res2;
      this.option3.series[0].data.value = res2;
      console.log(res2);
    },
    // Q11 饼图
    async getAnalysisData3() {
      const { data: res3 } = await this.$axios.get("analysis/analysis3");
      console.log(res3);
      this.option2.visualMap.max = res3.length;
      this.option2.series[0].data = res3;
    },
  },
  // mounted 此时页面上的元素，已经被渲染完毕
  mounted: async function () {
    await this.getAnalysisData1();
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

<style lang="less" >
.chart1Mode {
  .body {
    .topic {
      text-align: center;
      margin-bottom: 20px;
      > span {
        font-size: 24px;
        vertical-align: bottom;
      }
    }
    .chart {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
      .radar {
        height: 500px;
        width: 40%;
        box-sizing: border-box;
      }
      .pie {
        height: 500px;
        width: 40%;
      }
      .bar {
        height: 350px;
        width: 60%;
      }
    }
  }
}
</style>
