<template>
  <div class="box" v-title data-title="问卷 ">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>采样问卷</el-breadcrumb-item>
      <el-breadcrumb-item>问卷详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>请选择下面模块开始测试</h1>
    <el-button @click="moudle1Btn">专业认知模块</el-button>
    <el-button @click="moudle2Btn">学习投入模块</el-button>
    <el-button @click="moudle3Btn">教育培养模块</el-button>
    <el-button @click="moudle4Btn">德育与能力模块</el-button>
    <el-button @click="moudle5Btn">在校体验模块</el-button>
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

<style  lang="less">
</style>
