<template>
  <div :id="id" :data="data"></div>
</template>
 
<script>
import echarts from "echarts";
export default {
  name: "EchartsComponent",
  props: ["id", "data"],
  data() {
    return {
      myChart: null,
    };
  },
  // deep:true.深度监听，确保data中子项修改也能监听到。写法参考：https://cn.vuejs.org/v2/api/#watch
  watch: {
    data: {
      handler(newvalue, oldvalue) {
        this.drawLineGraph(this.id, newvalue);
      },
      deep: true,
    },
  },
  mounted() {
    this.drawLineGraph(this.id, this.data);
  },
  methods: {
    drawLineGraph(id, data) {
      let _this = this;
      this.myChart = echarts.init(document.getElementById(id));
      this.myChart.setOption(data);
      window.addEventListener("resize", function () {
        _this.myChart.resize();
      });
    },
  },
  beforeDestroy() {
    if (this.myChart) {
      this.myChart.clear();
    }
  },
};
</script>
 
<style scoped>
</style>