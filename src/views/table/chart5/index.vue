<template>
  <div v-title data-title="在校体验模块" class="chart1Mode" id="pdfDom">
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
          <h3>1本校校园环境满意度</h3>
          <div>
            该雷达图分析了各专业学生对本校校园环境的满意程度情况，可以通过选择不同专业来进行比较，雷达图中某一轴覆盖面积越大，说明该专业对该学校校园环境满意程度越高。最高分值为4。
          </div>
          <div>可自由选择查看不同学院下不同专业的数据分析情况。</div>
          <span class="tips">注：平均指数为该院校下所有专业的平均分数</span>
          <major-search
            url="analysis/analysisRadarForm5"
            Qnumber="Q36"
            :optionData.sync="option"
          ></major-search>
        </div>
        <div class="chart">
          <chart-show :id="'main'" :data="option" class="radar"></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>2本校学生工作满意度</h3>
          <div>
            该雷达图分析了各专业学生对本校学生工作的满意程度情况，可以通过选择不同专业来进行比较，雷达图中某一轴覆盖面积越大，说明该专业对该学校学生工作满意程度越高。最高分值为4。
          </div>
          <div>可自由选择查看不同学院下不同专业的数据分析情况。</div>
          <span class="tips">注：平均指数为该院校下所有专业的平均分数</span>
          <major-search
            url="analysis/analysisRadarForm5"
            Qnumber="Q37"
            :optionData.sync="option2"
          ></major-search>
        </div>
        <div class="chart">
          <chart-show :id="'main2'" :data="option2" class="radar"></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>3本校学生管理服务满意度</h3>
          <div>
            该雷达图分析了各专业学生对本校学生管理服务的满意程度情况，可以通过选择不同专业来进行比较，雷达图中某一轴覆盖面积越大，说明该专业对该学校学生管理服务满意程度越高。最高分值为4。
          </div>
          <div>可自由选择查看不同学院下不同专业的数据分析情况。</div>
          <span class="tips">注：平均指数为该院校下所有专业的平均分数</span>
          <major-search
            url="analysis/analysisRadarForm5"
            Qnumber="Q38"
            :optionData.sync="option3"
          ></major-search>
        </div>
        <div class="chart">
          <chart-show :id="'main3'" :data="option3" class="radar"></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>4本校生活服务满意度</h3>
          <div>
            该雷达图分析了各专业学生对本校生活服务的满意程度情况，可以通过选择不同专业来进行比较，雷达图中某一轴覆盖面积越大，说明该专业对该学校生活服务满意程度越高。最高分值为4。
          </div>
          <div>可自由选择查看不同学院下不同专业的数据分析情况。</div>
          <span class="tips">注：平均指数为该院校下所有专业的平均分数</span>
          <major-search
            url="analysis/analysisRadarForm5"
            Qnumber="Q39"
            :optionData.sync="option4"
          ></major-search>
        </div>
        <div class="chart">
          <chart-show :id="'main4'" :data="option4" class="radar"></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>5本校提供的教室及教学设备进行评价</h3>
          <div>
            分析了学生对本校提供的教室及教学设备的评价，条形图中某一轴长度越长，说明学生对此类评价认同度越高。
          </div>
          <!-- <span class="tips">注：平均指数为该院校下所有专业的平均分数</span> -->
        </div>
        <div class="chart">
          <chart-show
            :id="'main5'"
            :data="option5"
            class="chartbar2"
          ></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>6本校提供的实验室及设备进行评价</h3>
          <div>
            分析了学生对本校提供的实验室及设备的评价，条形图中某一轴长度越长，说明学生对此类评价认同度越高。
          </div>
        </div>
        <div class="chart">
          <chart-show
            :id="'main6'"
            :data="option6"
            class="chartbar2"
          ></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>7本校提供的计算机、网络及图书资源进行评价</h3>
          <div>
            分析了学生对本校提供的计算机、网络及图书资源的评价，条形图中某一轴长度越长，说明学生对此类评价认同度越高。
          </div>
        </div>
        <div class="chart">
          <chart-show
            :id="'main7'"
            :data="option7"
            class="chartbar2"
          ></chart-show>
        </div>
      </div>
    </div>
    <div class="footer">
      <el-button type="primary round plain" @click="backTop()"
        >回到顶部</el-button
      >
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
const _this = this;
export default {
  data() {
    return {
      htmlTitle: "在校体验模块",
      option: {
        title: {
          text: "校园环境满意度",
          subtext: "数据来自本网站系统数据采集",
          top: 0,
          left: 0,
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "center",
          top: 50,
          data: ["平均指数", "物联网工程", "通信工程", "机械电子工程"],
          selected: {
            通信工程: false,
            机械电子工程: false,
          },
        },
        radar: [
          {
            indicator: [
              { name: "校园自然环境", max: 4, color: "rgb(194,53,49)" },
              { name: "校风学风", max: 4, color: "rgb(194,53,49)" },
              { name: "宿舍环境", max: 4, color: "rgb(194,53,49)" },
              { name: "图书馆环境", max: 4, color: "rgb(194,53,49)" },
              { name: "教室设备", max: 4, color: "rgb(194,53,49)" },
              { name: "实验室", max: 4, color: "rgb(194,53,49)" },
              {
                name: "计算机、网络及图书资源",
                max: 4,
                color: "rgb(194,53,49)",
              },
              { name: "自习教室的数量", max: 4, color: "rgb(194,53,49)" },
              { name: "文娱体育设施", max: 4, color: "rgb(194,53,49)" },
            ],
            center: ["50%", "60%"],
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
                value: [3, 3, 2, 1, 1, 2, 2, 2, 2],
                name: "平均指数",
              },
              {
                value: [2, 3, 2, 2, 2, 3, 3, 2, 2],
                name: "物联网工程",
              },
              {
                value: [1, 3, 2, 2, 1, 2, 1, 1, 3],
                name: "通信工程",
              },
              {
                value: [1, 1, 1, 1, 1, 2, 2, 2, 2],
                name: "机械电子工程",
              },
            ],
          },
        ],
      },
      option2: {
        title: {
          text: "学生工作满意度",
          subtext: "数据来自本网站系统数据采集",
          top: 0,
          left: 0,
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "center",
          top: 50,
          data: ["平均指数", "物联网工程", "通信工程", "机械电子工程"],
          selected: {
            通信工程: false,
            机械电子工程: false,
          },
        },
        radar: [
          {
            indicator: [
              { name: "本专业辅导员工作", max: 4, color: "rgb(194,53,49)" },
              { name: "社团活动", max: 4, color: "rgb(194,53,49)" },
              { name: "就业指导", max: 4, color: "rgb(194,53,49)" },
              { name: "心理健康教育", max: 4, color: "rgb(194,53,49)" },
            ],
            center: ["50%", "60%"],
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
                value: [3, 3, 2, 1, 2],
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
      option3: {
        title: {
          text: "学生管理服务满意度",
          subtext: "数据来自本网站系统数据采集",
          top: 0,
          left: 0,
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "center",
          top: 50,
          data: ["平均指数", "物联网工程", "通信工程", "机械电子工程"],
          selected: {
            通信工程: false,
            机械电子工程: false,
          },
        },
        radar: [
          {
            indicator: [
              { name: "课程考核与成绩管理", max: 4, color: "rgb(194,53,49)" },
              { name: "转/休/复/退学的处理", max: 4, color: "rgb(194,53,49)" },
              { name: "学生资助", max: 4, color: "rgb(194,53,49)" },
              { name: "奖励/处分/申诉", max: 4, color: "rgb(194,53,49)" },
            ],
            center: ["50%", "60%"],
            radius: 150,
            shape: "circle",
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
                value: [3, 3, 2, 1],
                name: "平均指数",
              },
              {
                value: [2, 3, 2, 2],
                name: "物联网工程",
              },
              {
                value: [1, 3, 2, 2],
                name: "通信工程",
              },
              {
                value: [1, 1, 1, 1],
                name: "机械电子工程",
              },
            ],
          },
        ],
      },
      option4: {
        title: {
          text: "生活服务满意度",
          subtext: "数据来自本网站系统数据采集",
          top: 0,
          left: 0,
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "center",
          top: 50,
          data: ["平均指数", "物联网工程", "通信工程", "机械电子工程"],
          selected: {
            通信工程: false,
            机械电子工程: false,
          },
        },
        radar: [
          {
            indicator: [
              { name: "食堂服务与饭菜质量", max: 4, color: "rgb(194,53,49)" },
              {
                name: "转/休/复/住宿条件与管理",
                max: 4,
                color: "rgb(194,53,49)",
              },
              { name: "洗浴条件与管理", max: 4, color: "rgb(194,53,49)" },
              {
                name: "奖励/学校的医疗服务/申诉",
                max: 4,
                color: "rgb(194,53,49)",
              },
            ],
            center: ["50%", "60%"],
            radius: 150,
            shape: "circle",
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
                value: [3, 3, 2, 1],
                name: "平均指数",
              },
              {
                value: [2, 3, 2, 2],
                name: "物联网工程",
              },
              {
                value: [1, 3, 2, 2],
                name: "通信工程",
              },
              {
                value: [1, 1, 1, 1],
                name: "机械电子工程",
              },
            ],
          },
        ],
      },
      option5: {
        xAxis: {
          type: "category",
          data: [
            "数量满足教学需求",
            "功能满足教学需求",
            "管理与维护方便使用",
            "设施更新及时",
            "以上均不满足",
          ],
          axisLabel: {
            interval: 0, //强制文字产生间隔
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
            data: [120, 200, 150, 80, 66],
            type: "bar",
            barMaxWidth: "50px",
            name: "社会活动教育",
          },
        ],
        color: ["#61a0a8"],
      },
      option6: {
        xAxis: {
          type: "category",
          data: [
            "数量满足实践需求",
            "功能满足实践需求",
            "管理与维护方便使用",
            "设备或材料更新及时",
            "以上均不满足",
          ],
          axisLabel: {
            interval: 0, //强制文字产生间隔
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
            data: [120, 200, 150, 80, 66],
            type: "bar",
            barMaxWidth: "50px",
            name: "实验室及设备评价",
          },
        ],
        color: ["#ca8622"],
      },
      option7: {
        xAxis: {
          type: "category",
          data: [
            "满足日常学习需求",
            "管理规范",
            "共享程度高",
            "设备及资源更新及时",
            "以上均不满足",
          ],
          axisLabel: {
            interval: 0, //强制文字产生间隔
            // rotate: 20, //文字逆时针旋转
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
            data: [120, 200, 150, 80, 66],
            type: "bar",
            barMaxWidth: "50px",
            name: "计算机、网络及图书资源评价",
          },
        ],
        color: ["#bda29a"],
      },
    };
  },
  methods: {
    // Q42 条形
    async getAnalysisData42() {
      const { data: res1 } = await this.$get("analysis/analysis42");
      this.option5.series[0].data = res1;
    },
    // Q43 条形
    async getAnalysisData43() {
      const { data: res2 } = await this.$get("analysis/analysis43");
      this.option6.series[0].data = res2;
      console.log(res2);
      console.log(this.option6.series[0]);
    },
    // Q44 条形
    async getAnalysisData44() {
      const { data: res3 } = await this.$get("analysis/analysis44");
      this.option7.series[0].data = res3;
    },
    backTop() {
      var element = document.getElementById("pdfDom");
      element.scrollIntoView(true);
    },
  },
  // mounted 此时页面上的元素，已经被渲染完毕
  mounted() {
    this.getAnalysisData42();
    this.getAnalysisData43();
    this.getAnalysisData44();
  },
  components: {
    chartShow,
    majorSearch,
  },
};
</script>

<style lang="less" >
.chart1Mode {
  padding: 10px;
  .body {
    overflow: hidden;
    .topic {
      text-align: center;
      margin-bottom: 20px;
      > span {
        font-size: 24px;
        vertical-align: bottom;
      }
    }
    .content {
      text-indent: 2em;
      padding-left: 20%;
      padding-right: 20%;
      margin-bottom: 15px;
      overflow: hidden;
      .tips {
        color: rgb(163, 164, 165);
        font-size: 14px;
        padding-bottom: 10px;
        padding-left: 5px;
      }
    }
    .chart {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0;

      .radar {
        height: 500px;
        width: 50%;
        // box-sizing: border-box;
        // border: black 1px solid;
      }
      .pie {
        height: 500px;
        width: 50%;
      }
      .bar {
        height: 350px;
        width: 70% !important;
        // border: black 1px solid;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
  }
}
</style>
