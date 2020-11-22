<template>
  <div v-title data-title="个人数据分析" class="conclusion-person">
    <div class="head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>分析结论</el-breadcrumb-item>
        <el-breadcrumb-item>个人数据分析</el-breadcrumb-item>
      </el-breadcrumb>
      <span class="head-right">测试人学号：{{ id }}</span>
    </div>
    <div class="body">
      <div class="title">
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
      <div>
        <h4>一、专业认知模块</h4>
        <h4>二、学习投入模块</h4>
        <h4>三、教育培养模块</h4>
        <h4>四、德育与能力模块</h4>
        <h4>五、在校体验模块</h4>
        <h4>六、XX</h4>
      </div>

      <el-progress
        type="dashboard"
        :percentage="percentage"
        :color="colors"
        :show-text="true"
        :stroke-width="20"
        :format="format"
      ></el-progress>
    </div>
  </div>
</template>
<script>
export default {
  name: "conclusionPerson",
  data() {
    return {
      percentage: 10,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
      id: "",
      formData: [],
    };
  },
  mounted() {
    this.getId();
    this.getData1();
  },
  methods: {
    format(percentage) {
      return "30/50 分";
      // return percentage === 100 ? '满' : `${percentage}%`;
    },
    getId() {
      const data = JSON.parse(window.localStorage.getItem("PersonData"));
      this.id = data.StudentID;
    },
    async getData1() {
      // const { data } = await this.$axios.get(`person/personCheck/${this.id}`);
      // this.formData = data;
      // console.log(this.formData);
    },
  },
  components: {},
};
</script>
<style lang="less">
.conclusion-person {
  .head {
    display: flex;
    justify-content: space-between;
    .head-right {
      font-weight: 400;
      color: #606266;
      font-size: 14px;
      line-height: 1;
    }
  }
  .body {
    .title {
      text-align: center;
      > span {
        font-size: 24px;
        vertical-align: bottom;
      }
    }
  }
}
</style>
