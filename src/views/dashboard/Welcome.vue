<template>
  <div class="app-container dashboard" v-title data-title="首页">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" style="margin: 0 !important" class="all-count">
      <el-col :span="6">
        <div class="card_box bg_box">
          <h3>专业数</h3>
          <div class="main">
            <div class="card_icon">
              <svg-icon icon-class="major"></svg-icon>
            </div>
            <div>
              <span>{{ toThousandFilters(allCount.majorNumber) }}</span>
              <p>覆盖专业数</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="card_box bg_box">
          <h3>班级数</h3>
          <div class="main">
            <div class="card_icon">
              <svg-icon icon-class="class"></svg-icon>
            </div>
            <div>
              <span>{{ toThousandFilters(allCount.classNumber) }}</span>
              <p>覆盖班级数</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="card_box bg_box">
          <h3>人数</h3>
          <div class="main">
            <div class="card_icon">
              <svg-icon icon-class="person"></svg-icon>
            </div>
            <div>
              <span>{{ toThousandFilters(allCount.personNumber) }}</span>
              <p>答题人数</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="card_box bg_box">
          <h3>样本数</h3>
          <div class="main">
            <div class="card_icon">
              <svg-icon icon-class="sampleData"></svg-icon>
            </div>
            <div>
              <span>{{ toThousandFilters(allCount.sampleNumber) }}</span>
              <p>有效样本数据</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <p>即时统计概况&nbsp;{{ toDay }} 00:00:00 -- {{ presentTime }}</p>
    <el-row style="background: #fff; padding: 16px 16px 0; margin: 32px 0">
      <line-chart :chart-data="lineChartData" />
    </el-row>
  </div>
</template>

<script>
import { toThousandFilter } from "@/filters";
import lineChart from "./componentes/LineChart";
import { parseTime } from "@/utils";
import echarts from "echarts";
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [30, 60, 91, 154, 162, 140, 145],
  },
};
export default {
  name: "dashboard",
  data() {
    return {
      chartsError: false,
      chartsLoading: false,
      lineChartData: lineChartData.newVisitis,

      allCount: {
        majorNumber: 8,
        classNumber: 24,
        personNumber: 250,
        sampleNumber: 1120,
      },
      presentTime: "----",
      timer: null,
    };
  },
  components: {
    lineChart,
  },
  computed: {
    toThousandFilters() {
      return (num) => {
        return toThousandFilter(num);
      };
    },
    toDay() {
      return parseTime(new Date(), "{y}-{m}-{d}");
    },
  },
  methods: {
    changeType() {
      this.BizMemberCurrent();
    },

    //数量统计
    async getAllCount() {
      const { Data } = await this.$methods("BizAlert").Count();
      this.allCount = Data;
    },
  },
  mounted() {
    //this.getAllCount();
    // this.presentTime = parseTime(new Date(), "{h}:{i}:{s}"); // 修改数据date
    this.timer = setInterval(() => {
      this.presentTime = parseTime(new Date(), "{h}:{i}:{s}"); // 修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="less">
.app-container {
  background: rgb(244, 249, 255);
  box-shadow: none;
  .bg_box {
    -webkit-border-radius: 0.5em;
    -moz-border-radius: 0.5em;
    border-radius: 0.5em;
    height: 100%;
    background: #fff;
    padding: 1em;
    box-shadow: 0 9px 23px rgba(203, 218, 239, 0.2),
      0 5px 5px rgba(203, 218, 239, 0.2);
    -webkit-transition: box-shadow 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
    -moz-transition: box-shadow 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
    -o-transition: box-shadow 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: box-shadow 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
  }
  > P {
    color: #606266;
    &:before {
      content: "";
      display: block;
      float: left;
      height: 18px;
      width: 3px;
      margin-right: 10px;
      @include background_color("com_primary_color");
    }
  }
  &.dashboard {
    svg {
      opacity: 0.65;
      -webkit-transition: opacity 0.225s ease-in-out;
      -moz-transition: opacity 0.225s ease-in-out;
      -o-transition: opacity 0.225s ease-in-out;
      transition: opacity 0.225s ease-in-out;
    }
    .all-count {
      > div {
        margin-bottom: 15px;
      }
      .el-col-4 {
        width: 20% !important;
      }
      .el-col:nth-child(1) {
        svg,
        span,
        > div:nth-child(2) span {
          color: #13227a;
        }
      }
      .el-col:nth-child(2) {
        svg,
        span,
        > div:nth-child(2) span {
          color: #00c851;
        }
      }
      .el-col:nth-child(3) {
        svg,
        span,
        > div:nth-child(2) span {
          color: rgb(75, 154, 252);
        }
      }
      .el-col:nth-child(4) {
        svg,
        span,
        > div:nth-child(2) span {
          color: rgb(255, 193, 127);
        }
      }
    }
  }
  svg {
    font-size: 4em;
    color: chartreuse;
  }
  .card_box {
    cursor: pointer;
    position: relative;
    &:hover {
      -webkit-box-shadow: 0 9px 23px rgba(203, 218, 239, 0.6),
        0 5px 5px rgba(203, 218, 239, 0.6);
      -moz-box-shadow: 0 9px 23px rgba(203, 218, 239, 0.6),
        0 5px 5px rgba(203, 218, 239, 0.6);
      box-shadow: 0 9px 23px rgba(203, 218, 239, 0.6),
        0 5px 5px rgba(203, 218, 239, 0.6);
      & {
        svg {
          opacity: 1;
        }
      }
    }
    h3 {
      padding-left: 11px;
      margin: 0;
      color: #909399;
    }
    .main {
      display: flex;
      div:nth-child(2) {
        p {
          color: #c0c4cc;
          margin: 0;
        }
        span {
          font-size: 52px;
          margin-bottom: 5px;
          display: block;
        }
      }
    }
    .card_icon {
      display: flex;
      align-content: center;
      align-items: center;
      width: 5em;
      height: 5em;
      padding: 15px;
      & + div {
        margin-left: 10px;
      }
    }
    & + div {
      margin-top: -5px;
      padding: 15px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      -webkit-border-radius: 0.5em;
      -moz-border-radius: 0.5em;
      border-radius: 0.5em;
      box-shadow: 0 9px 23px rgba(203, 218, 239, 0.2),
        0 5px 5px rgba(203, 218, 239, 0.2);
      div {
        color: #909399;
        font-family: "黑体";
        font-size: 14px;
      }
      span {
        font-size: 30px;
      }
    }
    /*background: -webkit-linear-gradient(220deg, #aa66cc, #d28ef4) !important;*/
    /*background: -moz-oldlinear-gradient(220deg, #aa66cc, #d28ef4) !important;*/
    /*background: -o-linear-gradient(220deg, #aa66cc, #d28ef4) !important;*/
    /*background: linear-gradient(230deg, #aa66cc, #d28ef4) !important;*/
  }
}
</style>
