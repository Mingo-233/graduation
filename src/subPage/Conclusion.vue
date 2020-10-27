<template>
  <div>分析结论</div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        sex: "",
        nations: "",
        major: "",
      },
      rules: {
        sex: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        nation: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        major: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
      },
    };
  },
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
