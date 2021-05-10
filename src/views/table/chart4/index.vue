<template>
  <div v-title data-title="德育与能力模块" class="chart1Mode" id="pdfDom">
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
          <h3>1能力提升</h3>
          <div>
            分析了当前学院下不同专业学生在能力方面的提升情况。可以通过选择不同专业来进行横向比较，雷达图中某一轴覆盖面积越大，说明该方面能力提升越多。
          </div>
          <span class="tips">注：平均指数为该院校下所有专业的平均分数</span>
          <major-search
            url="analysis/analysisRadarForm4"
            Qnumber="Q30"
            :optionData="option"
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
          <h3>2大学期间参与过的社会活动教育</h3>
          <div>
            分析了大学期间学生参与社会活动教育情况，条形图中某一轴长度越长，说明学生在该类型的社会活动参与越多。
          </div>
          <!-- <span class="tips">注：平均指数为该院校下所有专业的平均分数</span> -->
        </div>
        <div class="chart">
          <chart-show
            :id="'main2'"
            :data="option2"
            class="chartbar2"
          ></chart-show>
        </div>
      </div>
      <div class="part">
        <div class="content">
          <h3>3社会活动教育帮助</h3>
          <div>分析了大学生在大学期间参与社会活动教育带来的帮助。</div>
          <!-- <span class="tips">注：平均指数为该院校下所有专业的平均分数</span> -->
        </div>
        <div class="chart">
          <chart-show
            :id="'main3'"
            :data="option3"
            class="chartbar3"
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
import chartShow from "@/components/chartShow";
import majorSearch from "@/components/Search";
const _this = this;
export default {
  data() {
    return {
      htmlTitle: "德育与能力模块",

      option: {
        title: {
          text: "能力提升",
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
              {
                name: "信息搜索与处理能力",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "与他人协同工作能力",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "自我认知能力",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "环境适应能力",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "沟通能力",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "创新能力",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "理解能力",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "逻辑推理能力",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "社交能力",
                max: 3,
                color: "rgb(194,53,49)",
              },
              {
                name: "自律能力",
                max: 3,
                color: "rgb(194,53,49)",
              },
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
                value: [3, 3, 2, 1, 2, 2, 1, 2, 2, 2],
                name: "平均指数",
              },
              {
                value: [2, 3, 2, 2, 2, 1, 1, 2, 2, 2],
                name: "物联网工程",
              },
              {
                value: [1, 3, 2, 2, 1, 2, 2, 2, 2, 2],
                name: "通信工程",
              },
              {
                value: [2, 2, 2, 3, 1, 3, 2, 2, 2, 2],
                name: "机械电子工程",
              },
            ],
          },
        ],
      },
      option2: {
        xAxis: {
          type: "category",
          data: [
            "社会活动类通识课程",
            "本专业领域实习",
            "勤工助学",
            "助教助研",
            "校园清洁",
            "社会公益活动",
            "没有参加过",
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
            data: [120, 200, 150, 80, 10, 40, 40],
            type: "bar",
            barMaxWidth: "50px",
            name: "社会活动教育",
          },
        ],
        color: ["#61a0a8"],
      },
      option3: {
        xAxis: {
          type: "category",
          data: [
            "形成坚定意志",
            "增强身体素质",
            "培养良好习惯",
            "增强社会责任感",
            "形成团结合作意识",
            "了解相关知识和技能",
            "维护校园卫生环境",
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
            name: "社会活动教育的在哪些方面有帮助",
          },
        ],
        color: ["#d48265"],
      },
    };
  },
  methods: {
    backTop() {
      var element = document.getElementById("pdfDom");
      element.scrollIntoView(true);
    },
    // Q30
    async getAnalysisData30() {
      const { data: res1 } = await this.$get("analysis/analysis30Default");
      this.option.series[0].data[0].value = res1.sumQ30;
      this.option.series[0].data[1].value = res1.sumQ30Wlw;
      this.option.series[0].data[2].value = res1.sumQ30Tx;
      this.option.series[0].data[3].value = res1.sumQ30Jxdz;
      console.log(res1);
    },
    async getAnalysisData31() {
      const { data: res2 } = await this.$get("analysis/analysis31");
      this.option2.series[0].data = res2;
    },
    async getAnalysisData32() {
      const { data: res3 } = await this.$get("analysis/analysis32");
      this.option3.series[0].data = res3;
    },
  },
  // mounted 此时页面上的元素，已经被渲染完毕
  mounted() {
    this.getAnalysisData30();
    this.getAnalysisData31();
    this.getAnalysisData32();
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
    width: 75%;
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
