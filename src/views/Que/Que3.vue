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
            <el-select
              v-model="Form.college"
              placeholder="请选择学院"
              @change="
                handleSelect('college', 5);
                getClassesName(Form.college);
              "
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
          <el-form-item prop="major" label="6您的专业" id="a6">
            <el-select
              v-model="Form.major"
              placeholder="请选择专业"
              @change="handleSelect('major', 6)"
            >
              <el-option
                v-for="item in classesName"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
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
          <div>模块三、教育培养</div>
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
            label="27本学年，您与任课教师在以下哪些方面有过交流<多选>"
            prop="Q27"
            id="a27"
          >
            <el-checkbox-group
              v-model="Form.Q27"
              @change="handleSelect('Q27', 27)"
            >
              <el-checkbox label="课程内容及专业知识" name="type"></el-checkbox>
              <el-checkbox
                label="讨论学期论文或项目的想法"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="职业规划、职业从业指导"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="人生观、价值观等问题"
                name="type"
              ></el-checkbox>
              <el-checkbox label="以上均没有" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item
            label="28本学年，您接受过本校提供的以下哪类学业指导服务<多选>"
            prop="Q28"
            id="a28"
          >
            <el-checkbox-group
              v-model="Form.Q28"
              @change="handleSelect('Q28', 28)"
            >
              <el-checkbox
                label="学校或学院提供的辅导课程或相关活动"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="学业指导网站相关服务"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="任课教师在授课过程中帮助解决相关问题"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="本科生导师帮助解决相关问题"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="辅导员帮助解决相关问题"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="没有接受过任何学业指导"
                name="type"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item
            label="29您认为所在院校的实习实践应该改进的方面是<多选>"
            prop="Q29"
            id="a29"
          >
            <el-checkbox-group
              v-model="Form.Q29"
              @change="handleSelect('Q29', 29)"
            >
              <el-checkbox label="与专业实际结合度低" name="type"></el-checkbox>
              <el-checkbox label="老师指导反馈不足" name="type"></el-checkbox>
              <el-checkbox label="动手操作机会少" name="type"></el-checkbox>
              <el-checkbox label="实习实践内容陈旧" name="type"></el-checkbox>
              <el-checkbox
                label="实习实践场地、设备不完善"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="与同学间交流讨论机会少"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="最终成果考核方式不完善"
                name="type"
              ></el-checkbox>
              <el-checkbox label="其他" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <div class="btn">
            <el-button el-button type="primary" @click="save" class="submit"
              >提交</el-button
            >
            <!-- <el-button type="primary" @click="openDialog">打开</el-button> -->
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="closeDialog"
            >
              <score-dialog
                v-if="dialogVisible"
                @dialogClose="closeDialog"
                :id="this.Form.StudentID"
                :type="3"
              ></score-dialog>
            </el-dialog>
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
          模块三 教育培养
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
import ScoreDialog from "./component/scoreDialog.vue";
import { myMixin } from "@/utils/myMixin";
export default {
  name: "Que3",
  mixins: [myMixin],
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
        Q20: [],
        Q21: [],
        Q22: [],
        Q23: [],
        Q24: [],
        Q25: [],
        Q26: [],
        Q27: [],
        Q28: [],
        Q29: [],
      },
      dialogVisible: false,
      // 接收set数组
      queSetArr: [],
      singlePercentage: "",
      // 问题按钮上的数字数组
      arrQuebtnNum: [1, 2, 3, 4, 5, 6, 7, 8],
      arrQuebtnNum2: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
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

        const res = await this.$post("form/form3", this.$Qs.stringify(params));
        console.log(res);
        if (!res.data.errMessage) {
          this.$alert("提交成功，您可以查看本次测试得分情况。", "提示", {
            confirmButtonText: "确定",
            callback: (action) => {
              this.$message({
                type: "success",
                message: "添加成功",
              });
              this.openDialog();
            },
          });
        } else {
          this.$message({
            type: "error",
            message: "系统异常",
          });
        }
      });
    },
    openDialog() {
      console.log(this.Form);
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
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
      const { data: data2 } = await this.$get("formData/questions3");
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
  components: {
    ScoreDialog,
  },
};
</script>

<style scoped lang="less">
.box {
  display: flex;
  margin: 30px 50px;
  padding-left: 5%;
  box-sizing: border-box;
  background: url("~@/assets/paper.png") no-repeat fixed;
  background-position: 97% 90%;
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
