<template>
  <div>分析结论</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    submitForm() {
      console.log(this.Form);
      console.log(this.$refs.ruleForm);
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return;
        this.$message.success("添加成功");
      });
    },
  },
};
</script>

<style scoped>
</style>
