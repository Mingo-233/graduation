<template>
  <div class="select">
    <el-form>
      <el-form-item label="学院：">
        <el-select
          v-model="formModel.college"
          placeholder="请选择学院"
          clearable
          @change="getClassesName(formModel.college)"
        >
          <el-option
            v-for="item in collegesName"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <!-- style="display: inline" -->
      <el-form-item label="专业：" class="majorSelect">
        <el-select
          v-model="formModel.major"
          multiple
          clearable
          placeholder="请选择专业"
          @clear="clearMajor"
          style="margin-right: 20px"
        >
          <el-option
            v-for="item in classesName"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
        <el-button type="primary" @click="onSubmit(url, Qnumber)"
          >查询</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    url: {
      type: String,
      default: () => "",
    },
    Qnumber: {
      type: String,
      default: () => "",
    },
    optionData: {
      type: Object,
      default: () => {},
    },
    Type: {
      type: String,
      default: () => "radar",
    },
  },
  data() {
    return {
      collegesName: [],
      classesName: [],
      formModel: {
        college: "",
        major: [],
      },
    };
  },
  methods: {
    async getCollegeName() {
      const { data } = await this.$get("formData/collegeNames");
      this.collegesName = data;
    },
    async getClassesName(college) {
      const { data } = await this.$get("formData/majorClasses", {
        collegeName: college,
      });
      this.formModel.major = [];
      this.classesName = data;
    },
    async onSubmit(url, Qnumber) {
      if (this.formModel.major.length === 0) {
        this.$message({
          type: "warning",
          message: "请先选择查询专业",
        });
        return;
      }
      const params = {
        colleges: this.formModel.college,
        classes: this.formModel.major,
        Qnumber: Qnumber,
        percentage: 4,
      };
      const { data } = await this.$get(url, params);
      console.log(data);
      if (data.status === 0) {
        this.$message({
          type: "warning",
          message: data.msg,
        });
        return;
      }
      //去除该属性双向绑定特性
      params.classes = JSON.parse(JSON.stringify(params.classes));
      params.classes.unshift("学院平均指数");
      //柱状图
      if (this.Type === "bar") {
        let settingOption = params.classes.map((item, index) => {
          return {
            name: item,
            type: "bar",
            data: data[index],
          };
        });
        this.optionData.legend.data = params.classes;
        this.optionData.series = settingOption;
        //重置echart图表选择呈现数据
        this.optionData.legend.selected = {};
      }
      //雷达图
      else if (this.Type === "radar") {
        let settingOption = params.classes.map((item, index) => {
          return {
            name: item,
            value: data[index],
          };
        });
        this.optionData.legend.data = params.classes;
        this.optionData.series[0].data = settingOption;
        this.optionData.legend.selected = {};
      } else if (this.Type === "polar") {
        let settingOption = params.classes.map((item, index) => {
          return {
            name: item,
            type: "bar",
            data: data[index],
            coordinateSystem: "polar",
            animation: true,
            //数据堆叠
            stack: "a",
          };
        });
        this.optionData.legend.data = params.classes;
        this.optionData.series = settingOption;
        this.optionData.legend.selected = {};
      }
    },
    clearMajor() {
      this.formModel.major = [];
    },
  },
  mounted() {
    this.getCollegeName();
  },
};
</script>
<style lang="less" scoped>
</style>