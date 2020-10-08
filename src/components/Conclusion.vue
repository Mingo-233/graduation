<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item prop="sex" label="1你的性别是">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男" value="boy" border></el-radio>
            <el-radio label="女" value="girl" border></el-radio>
          </el-radio-group>
    </el-form-item>
    <el-form-item prop="major" label="3您的专业">
        <el-input v-model="ruleForm.major" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-button type="primary"  @click="submitForm">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        sex: '',
        nations: '',
        major: ''
      },
      rules: {
        sex: [{ required: true, message: '您还有未选择的选项', trigger: 'change' }],
        nation: [{ required: true, message: '您还有未选择的选项', trigger: 'change' }],
        major: [{ required: true, message: '您还有未选择的选项', trigger: 'change' }]
      }
    }
  },
  methods: {
    submitForm () {
      console.log(this.Form)
      console.log(this.$refs.ruleForm)
      this.$refs.ruleForm.validate(valid => {
        if (!valid) return
        this.$message.success('添加成功')
      })
    }
  }
}
</script>

<style scoped>
</style>
