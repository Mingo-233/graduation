<template>
  <div id="main" style="width: 800px;height:400px;">
123
  </div>
</template>

<script>
var echarts = require('echarts')
export default {
  data () {
    return {
      options: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  methods: {
  },
  // mounted 此时页面上的元素，已经被渲染完毕
  mounted: async function () {
    // 3.基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'))
    // 4.指定图表的配置项和数据
    // 合并2份数据
    // const result = _.merge(res.data,this.options)
    // 5.使用刚指定的配置项和数据显示图表。
    myChart.setOption(this.options)
  }
}
</script>

<style scoped>
</style>
