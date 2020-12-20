<template>
  <div v-title data-title="结论" class="conclusion">
    <div class="head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>分析结论</el-breadcrumb-item>
        <el-breadcrumb-item>反馈结论</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="body">
      <p>结论</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>
