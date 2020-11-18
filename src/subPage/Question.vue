<template>
  <div class="box" v-title data-title="问卷 ">
    <h1>请选择下面模块开始测试</h1>
    <el-button @click="moudle1Btn">专业认知模块</el-button>
    <el-button @click="moudle2Btn">学习投入模块</el-button>
    <el-button @click="moudle3Btn">教育培养模块</el-button>
    <el-button @click="moudle4Btn">德育与能力模块</el-button>
    <el-button @click="moudle5Btn">在校体验模块</el-button>
    <div>
      <el-button @click="check">查看测试结果</el-button>
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
    async check() {
      const id = 2017010888;
      const data = await this.$axios.get(`person/personCheck/${id}`);
      this.$router.push({ path: "/conclusionPerson" });
    },
  },
};
</script>

<style scoped lang="less">
</style>
