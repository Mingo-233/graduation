<template>
  <div class="box" v-title data-title="问卷 ">
    <!-- 答题主题区域 -->
    <div class="main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div>大学生学情情况与能力调查问卷</div>
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
            @click="backHome"
            >返回</el-button
          >
        </div>
        <div>
          基本信息
          <el-link type="primary" @click="recovery" v-if="isRecord"
            >读取个人信息数据</el-link
          >
        </div>

        <el-divider></el-divider>
        <!-- 卡片内容区域 -->
        <el-form
          :model="Form"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demoForm"
          label-position="top"
        >
          <!-- prop 属性设置为需校验的字段名 -->
          <el-form-item prop="sex" label="1你的性别" id="a1">
            <el-radio-group v-model="Form.sex" @change="handleSelect('sex', 1)">
              <el-radio label="男" value="boy" border></el-radio>
              <el-radio label="女" value="girl" border></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="age" label="2您的年龄" id="a2">
            <el-input
              v-model="Form.age"
              placeholder="请输入内容"
              @change="handleSelect('age', 2)"
            ></el-input>
          </el-form-item>
          <el-form-item prop="grade" label="3您的年级" id="a3">
            <el-radio-group
              v-model="Form.grade"
              @change="handleSelect('grade', 3)"
            >
              <el-radio label="大一" value="大一" border></el-radio>
              <el-radio label="大二" value="大二" border></el-radio>
              <el-radio label="大三" value="大三" border></el-radio>
              <el-radio label="大四" value="大四" border></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="school" label="4您的学校" id="a4">
            <el-input
              v-model="Form.school"
              placeholder="请输入内容"
              @change="handleSelect('school', 4)"
            ></el-input>
          </el-form-item>
          <el-form-item prop="college" label="5您的学院" id="a5">
            <el-input
              v-model="Form.college"
              placeholder="请输入内容"
              @change="handleSelect('college', 5)"
            ></el-input>
          </el-form-item>
          <el-form-item prop="major" label="6您的专业" id="a6">
            <el-input
              v-model="Form.major"
              placeholder="请输入内容"
              @change="handleSelect('major', 6)"
            ></el-input>
          </el-form-item>
          <el-form-item prop="StudentID" label="7您的学号" id="a7">
            <el-input
              v-model="Form.StudentID"
              placeholder="请输入内容"
              @change="handleSelect('StudentID', 7)"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="profession"
            label="8您父母所属的主要职业阶层是"
            id="a8"
          >
            <el-select
              v-model="Form.profession"
              placeholder="请选择"
              @change="handleSelect('profession', 8)"
            >
              <el-option
                v-for="item in professionArray"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <div>模块二、学习投入</div>
          <el-divider></el-divider>
          <!-- 三层遍历，在第一次遍历每个模块，第二次遍历模块内的问题，第三次遍历问题中的选项 -->
          <div v-for="item1 in arrQueList2" :key="item1.index">
            <div class="Firstlevel" :id="'a' + item1.index">
              {{ item1.title }}
            </div>
            <el-form-item
              :prop="'Q' + item1.index"
              :label="item2.question"
              v-for="(item2, index2) in item1.Subtitle"
              :key="item2.question"
            >
              <el-radio-group
                v-model="Form['Q' + item1.index][index2]"
                @change="handleSelect('Q' + item1.index, item1.index)"
              >
                <el-radio
                  :label="element.value"
                  v-for="element in item2.options"
                  :key="element.value"
                  >{{ element.name }}</el-radio
                >
              </el-radio-group>
            </el-form-item>
          </div>
          <el-form-item
            label="18每周课外学习时间内都会做哪些安排<多选>"
            prop="Q18"
            id="a18"
          >
            <el-checkbox-group
              v-model="Form.Q18"
              @change="handleSelect('Q18', 18)"
            >
              <el-checkbox label="完成作业" name="type"></el-checkbox>
              <el-checkbox label="除作业外的自习" name="type"></el-checkbox>
              <el-checkbox label="接受校内学习指导" name="type"></el-checkbox>
              <el-checkbox label="接受校外培训" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item
            label="19您在学习方面遇到的最主要问题<多选>"
            prop="Q19"
            id="a19"
          >
            <el-checkbox-group
              v-model="Form.Q19"
              @change="handleSelect('Q19', 19)"
            >
              <el-checkbox
                label="对所学内容缺乏学习动力"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="缺乏老师的督促和指导"
                name="type"
              ></el-checkbox>
              <el-checkbox label="缺乏自学方法" name="type"></el-checkbox>
              <el-checkbox label="贪玩旷课较多" name="type"></el-checkbox>
              <el-checkbox label="跟不上课程进度" name="type"></el-checkbox>
              <el-checkbox label="竞争强，学习压力大" name="type"></el-checkbox>
              <el-checkbox label="学习氛围不浓" name="type"></el-checkbox>
              <el-checkbox label="没有遇到学习问题" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <div class="btn">
            <el-button el-button type="primary" @click="save" class="submit"
              >提交</el-button
            >
          </div>
        </el-form>
      </el-card>
    </div>
    <div class="tips">
      <div class="btnBox">
        <div class="title">
          基本信息
          <div ref="btnQues" class="btnQues">
            <el-button
              v-for="(item, index) in arrQuebtnNum"
              :key="index"
              :id="index"
              class="singleBtn"
              @click="btnclick(item)"
              >{{ item }}</el-button
            >
          </div>
        </div>
        <div class="title">
          模块二 学习投入
          <div ref="btnQues2" class="btnQues">
            <el-button
              v-for="(item, index) in arrQuebtnNum2"
              :key="index"
              :id="index"
              class="singleBtn"
              @click="btnclick(item)"
              >{{ item }}</el-button
            >
          </div>
        </div>
        <el-progress
          text-inside
          :percentage="percentage > 100 ? 100 : percentage"
          :color="customColors"
          :stroke-width="24"
        ></el-progress>
        <div class="backTop">
          <el-tooltip effect="dark" content="返回顶部" placement="right-start">
            <el-button
              icon="el-icon-caret-top"
              @click="backTophandle"
            ></el-button>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Que2",
  data() {
    return {
      Form: {
        sex: "",
        age: "",
        grade: "",
        school: "",
        college: "",
        major: "",
        StudentID: "",
        profession: "",
        Q12: [],
        Q13: [],
        Q14: [],
        Q15: [],
        Q16: [],
        Q17: [],
        Q18: [],
        Q19: [],
      },
      rules: {
        sex: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        age: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        grade: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        school: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        college: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        major: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        StudentID: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        profession: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
      },
      // 进度条
      percentage: 0,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
      //职业选项数组
      professionArray: [
        "国家与社会管理者",
        "企业经理人员",
        "私营企业主",
        "专业人士与技术人员",
        "办事人员阶层",
        "个体工商户阶层",
        "商业服务人员阶层",
        "产业工人阶层",
        "农业劳动者阶层",
        "城市无业、失业和半失业人员阶层",
      ],
      // 接收set数组
      queSetArr: [],
      singlePercentage: "",
      // 问题按钮上的数字数组
      arrQuebtnNum: [1, 2, 3, 4, 5, 6, 7, 8],
      arrQuebtnNum2: [12, 13, 14, 15, 16, 17, 18, 19],
      // 问题按钮数组
      arrQuebtn: [],
      arrQuebtn2: [],
      // 提取的问题模块数组集合
      arrQueList2: [],
      //本地是否有记录
      isRecord: false,
      //是否点击过一次恢复按钮
      btnFlag: false,
    };
  },
  mounted() {
    const s = new Set([]);
    this.queSetArr = s;
    // 获取问题按钮div盒子下dom元素
    this.arrQuebtn = this.$refs.btnQues.children;
    this.arrQuebtn2 = this.$refs.btnQues2.children;
    // 获取Form对象属性个数
    const total = Object.getOwnPropertyNames(this.Form).length - 1;

    //console.log(Object.getOwnPropertyNames(this.Form));
    //计算单次点击按钮增加的百分比值
    let m = parseInt(Math.ceil(10000 / total));
    this.singlePercentage = m / 100;
    this.getQuestionList();
    this.checkRecord();
  },
  methods: {
    // 提交表单
    save() {
      console.log(this.Form);
      const params = this.Form;

      this.$refs.ruleForm.validate(async (valid) => {
        if (!valid) return;
        // 个人基础信息
        const basicsData = {
          sex: params.sex,
          age: params.age,
          grade: params.grade,
          school: params.school,
          college: params.college,
          major: params.major,
          StudentID: params.StudentID,
          profession: params.profession,
        };
        window.localStorage.setItem("PersonData", JSON.stringify(basicsData));
        //window.sessionStorage.setItem("PersonData", JSON.stringify(basicsData));

        const res = await this.$axios.post(
          "form/form2",
          this.$Qs.stringify(params)
        );
        console.log(res);
        if (!res.data.errMessage) {
          this.$alert(
            "感谢您的参与。您可以继续参加其他模块测试，全部测试完成之后将解锁个人能力指标图。",
            "提示",
            {
              confirmButtonText: "确定",
              callback: (action) => {
                this.$message({
                  type: "success",
                  message: "添加成功",
                });
                console.log(action);
                this.$router.push("question");
              },
            }
          );
        } else {
          this.$message({
            type: "error",
            message: "系统异常",
          });
        }
      });
    },
    //恢复个人信息数据
    recovery() {
      if (!this.btnFlag) {
        const recoveryData = JSON.parse(
          window.localStorage.getItem("PersonData")
          //window.sessionStorage.getItem("PersonData")
        );
        this.Form.sex = recoveryData.sex;
        this.Form.age = recoveryData.age;
        this.Form.grade = recoveryData.grade;
        this.Form.school = recoveryData.school;
        this.Form.college = recoveryData.college;
        this.Form.major = recoveryData.major;
        this.Form.StudentID = recoveryData.StudentID;
        this.Form.profession = recoveryData.profession;
        let num = this.singlePercentage;
        this.percentage += 8 * num;
        this.queSetArr.add(
          "sex",
          "age",
          "grade",
          "school",
          "college",
          "major",
          "Student",
          "profession"
        );
        for (let index = 0; index < 8; index++) {
          this.arrQuebtn[index].style.background = "rgb(72,162,255)";
        }
        this.btnFlag = true;
      }
    },
    // 选择答案触发事件
    handleSelect(name, i) {
      // 将数据值转化为索引值
      i = i - 1;
      //每次点击增加的百分比
      let num = this.singlePercentage;

      // 如果set数组中不存在这个问题类名
      if (!this.queSetArr.has(name)) {
        //js计算小数运算时存在偏差
        this.percentage += num;
        this.percentage = Math.round(this.percentage * 100) / 100;
        this.queSetArr.add(name);
        if (i < 8) {
          this.arrQuebtn[i].style.background = "rgb(72,162,255)";
        } else {
          // 获得索引
          i += 1;
          var n = Number(i);
          var arrIndex = this.arrQuebtnNum2.indexOf(n);
          this.arrQuebtn2[arrIndex].style.background = "rgb(72,162,255)";
        }
      }
    },
    // 获取问题数据列表
    async getQuestionList() {
      const { data: data2 } = await this.$axios.get("formData/questions2");
      this.arrQueList2 = data2;
    },
    // 点击按钮跳转锚点
    btnclick(i) {
      location.href = "#a" + i;
    },
    // 返回首页
    backHome() {
      this.$router.push("/question");
    },
    // 返回顶部
    backTophandle() {
      this.animate(window, 0);
      // window.scroll(0, 0)
    },
    // 滚动动画
    animate(obj, target, callback) {
      clearInterval(obj.timer);
      obj.timer = setInterval(function () {
        // 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        var step = (target - window.pageYOffset) / 10;
        // 把步长值改为整数 不要出现小数的问题
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset === target) {
          clearInterval(obj.timer);
          // 短路运算-回调函数
          callback && callback();
        }
        window.scroll(0, window.pageYOffset + step);
      }, 15);
    },
    checkRecord() {
      //判断是否存在
      if (!!window.localStorage.getItem("PersonData")) {
        this.isRecord = true;
      } else {
        this.isRecord = false;
      }
    },
  },
  watch: {},
};
</script>

<style scoped lang="less">
.box {
  display: flex;
  margin: 30px 50px;
  padding-left: 5%;
  box-sizing: border-box;
  .main {
    height: 100%;
    flex: 5;
    border: 2px solid #ccc;
    margin-right: 5%;
    .clearfix {
      &::after,
      &::before {
        display: table;
        content: "";
      }
      &::after {
        clear: both;
      }
    }
    .el-divider__text,
    .el-link {
      float: right;
    }
    .el-form-item {
      background: white;
      margin: 10px 30px;
      .el-input {
        width: 60%;
      }
      .el-radio {
        margin-bottom: 10px;
      }
      /deep/ .el-form-item__label {
        font-size: 16px;
        color: #000;
      }
    }
    .Firstlevel {
      font-size: 16px;
      color: #000;
      padding-left: 30px;
    }
    .btn {
      display: flex;
      justify-content: flex-end;
    }
  }
  .tips {
    flex: 2;
    .btnBox {
      position: fixed;
      padding: 10px;
      border: 1px solid #ccc;
      .title {
        text-align: center;
        font-weight: 600;
        margin-top: 10px;
      }
      .btnQues {
        margin-bottom: 20px;
        width: 300px;
        display: flex;
        flex-wrap: wrap;
        .el-button--default {
          margin-left: 5px;
          width: 20px;
          /deep/ span {
            position: relative;
            right: 5px;
          }
        }
      }
      .backTop {
        position: fixed;
        top: 90%;
      }
    }
  }
}
.el-card {
  margin: 10px 50px;
}
</style>
