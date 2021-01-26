<template>
  <div v-title data-title="教育培养模块" class="chart1Mode" id="pdfDom">
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
          <h3>1课程教学内容</h3>
          <div>
            分析了当前学院下不同专业课程教学内容蕴含的教学特点。可以通过选择不同专业来进行横向比较，雷达图中某一轴覆盖面积越大，说明该课程设计质量越好。
          </div>
          <span class="tips">注：平均指数为该院校下所有专业的平均分数</span>
          <major-search
            url="analysis/analysisRadarForm3"
            Qnumber="Q21"
            :optionData.sync="option"
          ></major-search>
        </div>
        <div class="chart">
          <chart-show
            :id="'main'"
            :data="option"
            class="chartRadar"
          ></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>2专业课程的难度</h3>
          <div>
            分析了学生认为的专业课程的难度情况，通过课程内容、课程要求、课程作业等角度，分为同意，较为同意，不太同意，不同意四个程度。
          </div>
        </div>
        <div class="chart">
          <chart-show
            :id="'main2'"
            :data="option2"
            class="chartPie"
          ></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>3教师教学</h3>
          <div>
            分析了大学期间任课教师的教学行为，可以通过选择不同专业来进行横向比较，雷达图中某一轴覆盖面积越大，说明该方面教师教学质量越好。
          </div>
          <span class="tips">注：平均指数为该院校下所有专业的平均分数</span>
          <major-search
            url="analysis/analysisRadarForm3"
            Qnumber="Q23"
            :optionData.sync="option3"
          ></major-search>
        </div>
        <div class="chart">
          <chart-show
            :id="'main3'"
            :data="option3"
            class="chartRadar2"
          ></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>4院校组织的实习实践</h3>
          <div>
            分析了院校组织的实习实践的效果，条形图中某一轴长度越长，说明该轴所对应实习实践的效果好，满分为100。
          </div>
          <!-- <span class="tips">注：平均指数为该院校下所有专业的平均分数</span> -->
        </div>
        <div class="chart">
          <chart-show
            :id="'main4'"
            :data="option4"
            class="chartbar"
          ></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>5与任课教师交流</h3>
          <div>
            分析了大学期间学生任课教师交流情况，条形图中某一轴长度越长，说明学生在该方面内容与任课老师交流越多。
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
          <h3>6学业指导服务</h3>
          <div>
            分析了大学期间学生接受过本校提供的学业指导服务，学生在需学业指导方面的参与程度。参与程度较高的服务，学校应继续提供稳定有效的指导服务，参与程度较低的服务，学校应该在其方面进行改善。
          </div>
          <!-- <span class="tips">注：平均指数为该院校下所有专业的平均分数</span> -->
        </div>
        <div class="chart">
          <chart-show
            :id="'main6'"
            :data="option6"
            class="chartbar3"
          ></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>7实习实践</h3>
          <div>
            分析了院校的实习实践应该改进的方面，以下均为学生不满意的地方，需要校验审查真实性，并进行整改。
          </div>
          <!-- <span class="tips">注：平均指数为该院校下所有专业的平均分数</span> -->
        </div>
        <div class="chart">
          <chart-show
            :id="'main7'"
            :data="option7"
            class="chartbar4"
          ></chart-show>
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
  </div>
</template>

<script>
import chartShow from "@/components/chartShow";
import majorSearch from "@/components/Search";
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
      htmlTitle: "教育培养模块",

      option: {
        title: {
          text: "课程教学",
          subtext: "数据来自本网站系统数据采集",
          top: 0,
          left: 0,
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
              {
                name: "注重（外语、数学等）基础知识的教育",
                max: 4,
                color: "rgb(194,53,49)",
              },
              {
                name: "专业基础课教学内容充实",
                max: 4,
                color: "rgb(194,53,49)",
              },
              {
                name: "教学内容有利于拓宽自己的知识面",
                max: 4,
                color: "rgb(194,53,49)",
              },
              {
                name: "教学内容介绍了本专业发展的前沿动向",
                max: 4,
                color: "rgb(194,53,49)",
              },
              {
                name: "教学内容注重学科间的交叉与融合",
                max: 4,
                color: "rgb(194,53,49)",
              },
              {
                name: "教学内容重视实践与理论的结合",
                max: 4,
                color: "rgb(194,53,49)",
              },
              {
                name: "实践教学课程充实，注重培养学生的动手能力",
                max: 4,
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
            areaStyle: {},
            data: [
              {
                value: [3, 3, 2, 1, 2, 2, 1],
                name: "平均指数",
              },
              {
                value: [2, 3, 2, 2, 2, 1, 1],
                name: "物联网工程",
              },
              {
                value: [1, 3, 2, 2, 1, 2, 2],
                name: "通信工程",
              },
              {
                value: [2, 2, 2, 3, 1, 3, 2],
                name: "机械电子工程",
              },
            ],
          },
        ],
      },
      option2: {
        title: [
          {
            top: "10%",
            right: "10%",
            text: "专业课程难度",
          },
          {
            subtext: "对于课程内容，我经常感到难以理解",
            left: "16.67%",
            top: "75%",
            textAlign: "center",
            subtextStyle: {
              color: "#000",
            },
          },
          {
            subtext: "需要非常努力才能达到课程要求",
            left: "50%",
            top: "75%",
            textAlign: "center",
            subtextStyle: {
              color: "#000",
            },
          },
          {
            subtext: "我在课外花很多时间来完成老师布置的作业",
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
            name: "课程难度",
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
            name: "课程要求",
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
            name: "课程作业",
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
      option3: {
        title: {
          text: "教师教学",
          subtext: "数据来自本网站系统数据采集",
          top: 0,
          left: 0,
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
              {
                name: "清楚地向学生解释了所学课程的目标和要求",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "有组织和计划地进行课堂教学",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "使用插图或举例的方式来解释教学难点",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "提供案例或事例讨论",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "课堂中加入互动环节，注重学生参与〔提问、讨论)",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "课堂上激发学生的学习兴趣",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "使用信息技术辅助课堂教学",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "课后为学生提供辅导答疑",
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
            areaStyle: {},
            data: [
              {
                value: [3, 3, 2, 1, 2, 2, 1, 2],
                name: "平均指数",
              },
              {
                value: [2, 3, 2, 2, 2, 1, 1, 2],
                name: "物联网工程",
              },
              {
                value: [1, 3, 2, 2, 1, 2, 2, 2],
                name: "通信工程",
              },
              {
                value: [2, 2, 2, 3, 1, 3, 2, 2],
                name: "机械电子工程",
              },
            ],
          },
        ],
        color: ["#c23531", "#2f4554", "#61a0a8", "#d48265"],
      },
      option4: {
        title: {
          text: "实习实践",
          subtext: "数据来自本网站系统数据采集  ",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "1%",
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
            "使我更了解本专业的职业发展",
            "对所学知识技能有了更深的理解",
            "与我所学专业及能力目标相匹配",
            "有充分的学习机会",
            "帮助职场准备做的更好",
            "实习的成绩客观地反映能力",
          ],
        },
        series: [
          {
            name: "平均指数",
            type: "bar",
            data: [30, 9, 4, 7, 4, 3],
          },
        ],
      },
      option5: {
        xAxis: {
          type: "category",
          data: [
            "课程内容及专业知识",
            "学期论文或项目",
            "职业规划、职业从业指导",
            "人生观、价值观等问题",
            "以上均没有",
          ],
          axisLabel: {
            interval: 0, //强制文字产生间隔
            rotate: 20, //文字逆时针旋转
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
            data: [120, 200, 150, 80, 10],
            type: "bar",
            barMaxWidth: "50px",
            name: "与任课教师的交流",
          },
        ],
        color: ["#61a0a8"],
      },
      option6: {
        xAxis: {
          type: "category",
          data: [
            "学校提供辅导课程或活动",
            "学业指导网站相关服务",
            "任课教师帮助",
            "本科生导师帮助",
            "辅导员帮助",
            "没有接受过学业指导",
          ],
          axisLabel: {
            interval: 0, //强制文字产生间隔
            rotate: 20, //文字逆时针旋转
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
            data: [120, 200, 150, 80, 80, 80],
            type: "bar",
            barMaxWidth: "50px",
            name: "接收过本校提供的哪些学业指导服务",
          },
        ],
        color: ["#d48265"],
      },
      option7: {
        xAxis: {
          type: "category",
          data: [
            "专业结合度低",
            "老师指导反馈不足",
            "动手操作机会少",
            "实习内容陈旧",
            "场地、设备不完善",
            "同学间交流机会少",
            "考核方式不完善",
          ],
          axisLabel: {
            interval: 0, //强制文字产生间隔
            rotate: 20, //文字逆时针旋转
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
            data: [120, 200, 150, 80, 80, 80, 90],
            type: "bar",
            barMaxWidth: "50px",
            name: "认为所在院校的实习实践应该改进的方面",
          },
        ],
        color: ["#ca8622"],
      },
    };
  },
  methods: {
    backTop() {
      var element = document.getElementById("pdfDom");
      element.scrollIntoView(true);
    },
    // Q21
    async getAnalysisData21() {
      const { data: res1 } = await this.$get("analysis/analysis21Default");
      this.option.series[0].data[0].value = res1.sumQ21;
      this.option.series[0].data[1].value = res1.sumQ21Wlw;
      this.option.series[0].data[2].value = res1.sumQ21Tx;
      this.option.series[0].data[3].value = res1.sumQ21Jxdz;
      console.log(res1);
    },
    //Q22
    async getAnalysisData22() {
      const { data: res2 } = await this.$get("analysis/analysis22");
      console.log(res2);
      this.option2.series[0].data = res2[0];
      this.option2.series[1].data = res2[1];
      this.option2.series[2].data = res2[2];
    },
    // Q23
    async getAnalysisData23() {
      const { data: res3 } = await this.$get("analysis/analysis23Default");
      this.option3.series[0].data[0].value = res3.sumQ23;
      this.option3.series[0].data[1].value = res3.sumQ23Wlw;
      this.option3.series[0].data[2].value = res3.sumQ23Tx;
      this.option3.series[0].data[3].value = res3.sumQ23Jxdz;
      console.log(res3);
    },
    async getAnalysisData26() {
      const { data: res4 } = await this.$get("analysis/analysis26");
      console.log(res4);
      this.option4.series[0].data = res4;
    },
    async getAnalysisData27() {
      const { data: res5 } = await this.$get("analysis/analysis27");
      this.option5.series[0].data = res5;
    },
    async getAnalysisData28() {
      const { data: res6 } = await this.$get("analysis/analysis28");
      this.option6.series[0].data = res6;
    },
    async getAnalysisData29() {
      const { data: res7 } = await this.$get("analysis/analysis29");
      this.option7.series[0].data = res7;
    },
  },
  // mounted 此时页面上的元素，已经被渲染完毕
  mounted() {
    this.getAnalysisData21();
    this.getAnalysisData22();
    this.getAnalysisData23();
    this.getAnalysisData26();
    this.getAnalysisData27();
    this.getAnalysisData28();
    this.getAnalysisData29();
  },
  components: {
    chartShow,
    majorSearch,
  },
};
</script>

<style lang="less" >
.chart {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  .chartRadar {
    height: 500px;
    width: 60%;
  }
  .chartPie {
    height: 500px;
    width: 65%;
  }
  .chartRadar2 {
    height: 500px;
    width: 60%;
  }
  .chartbar {
    height: 400px;
    width: 70%;
  }
  .chartbar2 {
    height: 500px;
    width: 70%;
  }
  .chartbar3 {
    height: 500px;
    width: 80%;
  }
  .chartbar4 {
    height: 500px;
    width: 80%;
  }
}
</style>
