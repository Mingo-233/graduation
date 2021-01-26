<template>
  <div v-title data-title="学习投入模块" class="chart1Mode" id="pdfDom">
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
      <div class="part">
        <div class="content">
          <h3>1学习现状描述</h3>
          <div>
            该饼图分析了当前学院下学生最近的学习状况描述，通过学习获得的满足感,学习兴趣,求知欲和课堂与老师的互动等这些角度，分为同意，较为同意，不太同意，不同意四个程度,描述了学生最近的学习状况。
          </div>
          <!-- <span class="tips">注：平均指数为该院校下所有专业的平均分数</span> -->
        </div>
        <div class="chart">
          <chart-show :id="'main'" :data="option" class="chartPie"></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>2课前课后学习情况</h3>
          <div>
            该极坐标系柱状图分析了当前学院下各专业学生在课前、课上、课后的学习情况，该轴指数越高,说明该轴对应的学习情况越好。所有专业学生的数据堆叠显示,能够直观显示整个学院学生情况,也可以选择不同专业的数据,进行单独分析。
          </div>
          <major-search
            url="analysis/analysis13"
            Qnumber="Q13"
            :optionData.sync="option2"
            Type="polar"
          ></major-search>
        </div>
        <div class="chart">
          <chart-show
            :id="'main2'"
            :data="option2"
            class="chartPolar"
          ></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>3课外安排</h3>
          <div>
            该条形图分析了学院下学生在课外的学习时间安排情况，条形图中某一轴长度越长，说明该轴所对应课外学习安排学生参与的越多的。
          </div>
          <!-- <span class="tips">注：平均指数为该院校下所有专业的平均分数</span> -->
        </div>
        <div class="chart">
          <chart-show :id="'main3'" :data="option3" class="bar"></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>4学习问题</h3>
          <div>
            该条形图分析了学院下学生在学习方面遇到主要问题，条形图中某一轴长度越长，说明该轴所对应的问题学生遇到的越多，学校方面需要重视这一块内容的改善。
          </div>
          <!-- <span class="tips">注：平均指数为该院校下所有专业的平均分数</span> -->
        </div>
        <div class="chart">
          <chart-show
            :id="'main4'"
            :data="option4"
            class="barMultiple"
          ></chart-show>
        </div>
      </div>
    </div>

    <div class="footer">
      <el-button type="primary round plain" @click="backTop()"
        >回到顶部
      </el-button>
      <el-button type="primary round plain" @click="getPdf()"
        >保存本地</el-button
      >
    </div>
  </div>
</template>

<script>
var echarts = require("echarts");
import chartShow from "@/components/chartShow";
import majorSearch from "@/components/Search";
import { animate } from "@/utils/index";
const _this = this;
export default {
  data() {
    var data = [
      {
        name: "同意",
        value: 70,
      },
      {
        name: "较为同意",
        value: 50,
      },
      {
        name: "不太同意",
        value: 40,
      },
      {
        name: "不同意",
        value: 68,
      },
    ];
    return {
      htmlTitle: "学习投入模块",

      option: {
        title: [
          {
            top: "10%",
            right: "10%",
            text: "学习现状",
          },
          {
            subtext: "学习能够让我获得满足感",
            left: "16.67%",
            top: "75%",
            textAlign: "center",
            subtextStyle: {
              color: "#000",
            },
          },
          {
            subtext: "我对所学的内容具有学习兴趣",
            left: "50%",
            top: "75%",
            textAlign: "center",
            subtextStyle: {
              color: "#000",
            },
          },
          {
            subtext: "会在课堂上向老师提问",
            left: "83.33%",
            top: "75%",
            textAlign: "center",
            subtextStyle: {
              color: "#000",
            },
          },
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        series: [
          {
            name: "满足感",
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            data: data,
            //动画
            animation: true,
            label: {
              position: "outer",
              alignTo: "none",
              bleedMargin: 5,
            },
            left: 0,
            right: "66.6667%",
            top: 0,
            bottom: 0,
          },
          {
            name: "学习兴趣",
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            data: data,
            animation: true,
            label: {
              position: "outer",
              alignTo: "labelLine",
              bleedMargin: 5,
            },
            left: "33.3333%",
            right: "33.3333%",
            top: 0,
            bottom: 0,
          },
          {
            name: "课堂互动",
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            data: data,
            animation: true,
            label: {
              position: "outer",
              alignTo: "edge",
              margin: 20,
            },
            left: "66.6667%",
            right: 0,
            top: 0,
            bottom: 0,
          },
        ],
        color: ["#2f4554", "#61a0a8", "#d48265", "#91c7ae"],
      },
      option2: {
        angleAxis: {
          type: "category",
          data: [
            "课前完成作业",
            "课前预习",
            "课上专心上课",
            "课上提问",
            "课后制定计划",
            "课后分配学习时间",
            "课后阅读额外资料",
            "课后复习",
            "借鉴他人学习方法",
          ],
        },
        radiusAxis: {},
        polar: {},
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
        },
        series: [
          {
            type: "bar",
            data: [1, 2, 3, 4, 3, 5, 1, 2, 3],
            coordinateSystem: "polar",
            name: "物联网工程",
            animation: true,
            //数据堆叠
            stack: "a",
          },
          {
            type: "bar",
            data: [2, 4, 6, 1, 3, 2, 1, 2, 3],
            coordinateSystem: "polar",
            name: "通信工程",
            animation: true,
            stack: "a",
          },
          {
            type: "bar",
            data: [1, 2, 3, 4, 1, 2, 5, 2, 3],
            coordinateSystem: "polar",
            name: "机械电子工程",
            animation: true,
            stack: "a",
          },
        ],
        legend: {
          show: true,
          data: ["物联网工程", "通信工程", "机械电子工程"],
        },
      },
      option3: {
        xAxis: {
          type: "category",
          data: [
            "完成作业",
            "除作业外的自习",
            "接受校内学习指导",
            "接受校外培训",
          ],
        },
        yAxis: {
          type: "value",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ",
        },
        series: [
          {
            data: [120, 200, 150, 80],
            type: "bar",
            barMaxWidth: "50px",
            name: "课外学习时间内的安排",
          },
        ],
        color: ["#61a0a8"],
      },
      option4: {
        xAxis: {
          type: "category",
          data: [
            "缺乏学习动力",
            "缺乏督促和指导",
            "缺乏自学方法",
            "贪玩旷课",
            "跟不上课程进度",
            "学习压力大",
            "学习氛围不浓",
            "无",
          ],
          axisLabel: {
            interval: 0, //强制文字产生间隔
            rotate: 30, //文字逆时针旋转
            textStyle: {
              //文字样式
              color: "black",
            },
          },
        },
        yAxis: {
          type: "value",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ",
        },
        series: [
          {
            data: [120, 200, 150, 80, 80, 80, 80, 80],
            type: "bar",
            barMaxWidth: "70px",
            name: "学习方面遇到的最主要问题",
          },
        ],
        color: ["#d48265"],
      },
    };
  },
  methods: {
    backTop() {
      // let top =
      //   document.documentElement.scrollTop ||
      //   document.body.scrollTop ||
      //   window.pageYOffset;
      var element = document.getElementById("pdfDom");
      element.scrollIntoView(true);
      // animate(window, 0);
    },
    // Q12
    async getAnalysisData12() {
      const { data: res1 } = await this.$get("analysis/analysis12");
      console.log(res1);
      this.option.series[0].data = res1[0];
      this.option.series[1].data = res1[1];
      this.option.series[2].data = res1[2];
    },
    //Q13-15
    async getAnalysisData13() {
      const { data: res2 } = await this.$get("analysis/analysis13Default");
      console.log(res2);
      this.option2.series[0].data = res2.sumQ13Wlw;
      this.option2.series[1].data = res2.sumQ13TX;
      this.option2.series[2].data = res2.sumQ13Jxdz;
    },
    // Q18
    async getAnalysisData18() {
      const { data: res3 } = await this.$get("analysis/analysis18");
      res3[0].itemStyle = { color: "#c23531" };
      console.log(res3);
      this.option3.series[0].data = res3;
    },
    // Q19
    async getAnalysisData19() {
      const { data: res4 } = await this.$get("analysis/analysis19");
      console.log(res4);
      this.option4.series[0].data = res4;
    },
  },
  // mounted 此时页面上的元素，已经被渲染完毕
  mounted() {
    this.getAnalysisData12();
    this.getAnalysisData13();
    this.getAnalysisData18();
    this.getAnalysisData19();
  },
  components: {
    chartShow,
    majorSearch,
  },
};
</script>

<style lang="less" scoped>
.chart {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  .chartPie {
    height: 500px;
    width: 80% !important;
    // box-sizing: border-box;
    // border: black 1px solid;
  }
  .chartPolar {
    height: 500px;
    width: 60%;
  }
  .bar {
    height: 500px;
    width: 50%;
  }
  .barMultiple {
    height: 500px;
    width: 90% !important;
  }
}
</style>
