<template>
  <div class="box" v-title data-title="问卷">
    <div class="content">
      <h1 class="title">请选择下面模块开始测试</h1>
      <div class="btns">
        <el-button @click="moudle1Btn">专业认知模块</el-button>
        <el-button @click="moudle2Btn">学习投入模块</el-button>
        <el-button @click="moudle3Btn">教育培养模块</el-button>
        <el-button @click="moudle4Btn">德育与能力模块</el-button>
        <el-button @click="moudle5Btn">在校体验模块</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    moudle1Btn() {
      this.$router.push({ name: "que1" });
    },
    moudle2Btn() {
      this.$router.push({ name: "que2" });
    },
    moudle3Btn() {
      this.$router.push({ name: "que3" });
    },
    moudle4Btn() {
      this.$router.push({ name: "que4" });
    },
    moudle5Btn() {
      this.$router.push({ name: "que5" });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  background: url("~@/assets/paper.png") no-repeat fixed;
  background-position: 98% 95%;
  width: 100%;
  height: 100%;
  .content {
    margin-top: 5%;
    text-align: center;
    .btns {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 5%;
      .el-button {
        margin-left: 40px;
      }
    }
  }
}
</style>
