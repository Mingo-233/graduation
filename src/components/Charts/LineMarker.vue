<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";
// 渐变色
// new echarts.graphic.LinearGradient
// 对应的方位 0, 0, 1, 0 // 右/下/左/上
// color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
//     {
//         offset: 0,
//         color: '#12c2e9'
//     },
//     {
//         offset: 0.5,
//         color: '#c471ed'
//     },
//     {
//         offset: 1,
//         color: '#f64f59'
//     }
// ])

const defaultOption = {
  backgroundColor: "#fff",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      lineStyle: {
        color: "#57617B",
      },
    },
  },
  legend: {
    top: 20,
    icon: "rect",
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: ["人员", "车辆"],
    right: "4%",
    textStyle: {
      fontSize: 12,
      color: "#909399",
    },
  },
  grid: {
    top: 65,
    left: "2%",
    right: "2%",
    bottom: "2%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: "#57617B",
        },
      },
      data: [],
    },
  ],
  yAxis: [{ type: "value" }],
  series: [],
};
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "200px",
    },
    height: {
      type: String,
      default: "200px",
    },
    option: {
      type: Object,
      default: () => defaultOption,
    },
    title: [String, Object],
    legend: [Array, Object],
    xAxis: Array,
    series: Array,
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      let title = {
        text: "折线图",
        subtext: "副标题",
        textStyle: {
          fontWeight: "normal",
          fontSize: 16,
          color: "#606266",
        },
        top: 0,
        left: "1%",
      };
      if (this.title) {
        if (Object.prototype.toString.call(this.title) === "[object Object]") {
          title = Object.assign(title, this.title);
        } else {
          title = {
            text: this.title,
            textStyle: {
              fontWeight: "normal",
              fontSize: 16,
              color: "#606266",
            },
            top: 0,
            left: "1%",
          };
        }
      }
      let legend = {
        top: 0,
        itemHeight: 10,
        icon: "circle",
        itemGap: 13,
        data: [],
        right: "4%",
        textStyle: {
          fontSize: 12,
          color: "#909399",
        },
      };
      if (this.legend) {
        if (Object.prototype.toString.call(this.legend) === "[object Array]") {
          legend.data = this.legend;
        } else {
          legend = Object.assign(legend, this.legend);
        }
      }
      let xAxis = [
        {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#57617B",
            },
          },
          data: [],
        },
      ];
      if (this.xAxis) {
        xAxis = this.xAxis;
      }
      let series = null;
      if (this.series) {
        series = this.series;
      }
      console.log(Object.assign(this.option, { title, legend, xAxis, series }));
      this.chart.setOption(Object.assign(this.option, { title, legend }));
    },
  },
};
</script>
