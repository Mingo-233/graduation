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
        <div>一、基本信息</div>
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
          <el-form-item prop="nations" label="2您的民族" id="a2">
            <el-select
              v-model="Form.nations"
              placeholder="请选择"
              @change="handleSelect('nations', 2)"
            >
              <el-option
                v-for="item in nationsArray"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="major" label="3您的专业" id="a3">
            <el-input
              v-model="Form.major"
              placeholder="请输入内容"
              @change="handleSelect('major', 3)"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="education"
            label="4您父母任何一方的最高教育水平是"
            id="a4"
          >
            <el-radio-group
              v-model="Form.education"
              @change="handleSelect('education', 4)"
            >
              <el-radio label="小学及以下" value="小学及以下" border></el-radio>
              <el-radio label="初中" value="初中" border></el-radio>
              <el-radio label="高中" value="高中" border></el-radio>
              <el-radio label="大学" value="大学" border></el-radio>
              <el-radio
                label="研究生及以上"
                value="研究生及以上"
                border
              ></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            prop="profession"
            label="5您父母所属的主要职业阶层是"
            id="a5"
          >
            <el-radio-group
              v-model="Form.profession"
              @change="handleSelect('profession', 5)"
            >
              <el-radio
                label="国家与社会管理者"
                value="国家与社会管理者"
              ></el-radio>
              <el-radio label="企业经理人员" value="企业经理人员"></el-radio>
              <el-radio label="私营企业主" value="私营企业主"></el-radio>
              <el-radio
                label="专业人士与技术人员"
                value="专业人士与技术人员"
              ></el-radio>
              <el-radio label="办事人员阶层" value="办事人员阶层"></el-radio>
              <el-radio
                label="个体工商户阶层"
                value="个体工商户阶层"
              ></el-radio>
              <el-radio
                label="商业服务人员阶层"
                value="商业服务人员阶层"
              ></el-radio>
              <el-radio label="产业工人阶层" value="产业工人阶层"></el-radio>
              <el-radio
                label="农业劳动者阶层"
                value="农业劳动者阶层"
              ></el-radio>
              <el-radio
                label="城市无业、失业和半失业人员阶层"
                value="城市无业、失业和半失业人员阶层"
              ></el-radio>
            </el-radio-group>
          </el-form-item>
          <div>二、专业认知</div>
          <el-divider></el-divider>
          <!-- 三层遍历，在第一次遍历每个模块，第二次遍历模块内的问题，第三次遍历问题中的选项 -->
          <div v-for="item1 in arrQueList" :key="item1.index">
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
            <!-- <div class="Firstlevel" id="a7">7下列表述是否符合您的实际情况</div>
        <el-form-item prop="Q7" :label="item.question"  v-for="(item,index) in arrQueList[1]" :key="item.question">
          <el-radio-group v-model="Form.Q7[index]"  @change="handleSelect('Q7',7)"
         >
            <el-radio :label="element.value"  v-for="element in item.options" :key="element.value">{{element.name}}</el-radio>
          </el-radio-group>
        </el-form-item> -->
          </div>
          <el-form-item
            label="8您是通过以下哪些途径了解本专业的<多选>"
            prop="Q8"
            id="a8"
          >
            <el-checkbox-group
              v-model="Form.Q8"
              @change="handleSelect('Q8', 8)"
            >
              <el-checkbox label="与专业老师交流" name="type"></el-checkbox>
              <el-checkbox label="高年级在校生介绍" name="type"></el-checkbox>
              <el-checkbox label="专业认知讲座与课程" name="type"></el-checkbox>
              <el-checkbox label="专业相关网站和论坛" name="type"></el-checkbox>
              <el-checkbox label="专业相关书籍" name="type"></el-checkbox>
              <el-checkbox label="与校外专业人士交流" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <div>三、学习投入</div>
          <el-divider></el-divider>
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
            label="15每周课外学习时间内都会做哪些安排<多选>"
            prop="Q15"
            id="a15"
          >
            <el-checkbox-group
              v-model="Form.Q15"
              @change="handleSelect('Q15', 15)"
            >
              <el-checkbox label="完成作业" name="type"></el-checkbox>
              <el-checkbox label="除作业外的自习" name="type"></el-checkbox>
              <el-checkbox label="接受校内学习指导" name="type"></el-checkbox>
              <el-checkbox label="接受校外培训" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item
            label="16您在学习方面遇到的最主要问题<多选>"
            prop="Q16"
            id="a16"
          >
            <el-checkbox-group
              v-model="Form.Q16"
              @change="handleSelect('Q16', 16)"
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
          <div>四、教育培养</div>
          <el-divider></el-divider>
          <div v-for="item1 in arrQueList3" :key="item1.index">
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
            label="27本学年，您参加过以下哪种课程考核方式<多选>"
            prop="Q27"
            id="a27"
          >
            <el-checkbox-group
              v-model="Form.Q27"
              @change="handleSelect('Q27', 27)"
            >
              <el-checkbox label="卷面考试" name="type"></el-checkbox>
              <el-checkbox label="随堂提问或测试" name="type"></el-checkbox>
              <el-checkbox label="课程论文或实验报告" name="type"></el-checkbox>
              <el-checkbox label="课堂展示" name="type"></el-checkbox>
              <el-checkbox
                label="个人独立完成的课程作业"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="小组合作完成的课程作业"
                name="type"
              ></el-checkbox>
              <el-checkbox label="以上均没参加过" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item
            label="28本学年，您与任课教师在以下哪些方面有过交流<多选>"
            prop="Q28"
            id="a28"
          >
            <el-checkbox-group
              v-model="Form.Q28"
              @change="handleSelect('Q28', 28)"
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
            label="29本学年，您接受过本校提供的以下哪类学业指导服务<多选>"
            prop="Q29"
            id="a29"
          >
            <el-checkbox-group
              v-model="Form.Q29"
              @change="handleSelect('Q29', 29)"
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
            label="30您认为所在院校的实习实践应该改进的方面是<多选>"
            prop="Q30"
            id="a30"
          >
            <el-checkbox-group
              v-model="Form.Q30"
              @change="handleSelect('Q30', 30)"
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
          <div>五、德育与能力</div>
          <el-divider></el-divider>
          <div v-for="item1 in arrQueList4" :key="item1.index">
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
            label="32本学年，您参加过哪些劳动教育<多选>"
            prop="Q32"
            id="a32"
          >
            <el-checkbox-group
              v-model="Form.Q32"
              @change="handleSelect('Q32', 32)"
            >
              <el-checkbox
                label="劳动教育类的通识课程"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="本专业领域的实习实践"
                name="type"
              ></el-checkbox>
              <el-checkbox label="勤工助学" name="type"></el-checkbox>
              <el-checkbox label="助教助研" name="type"></el-checkbox>
              <el-checkbox label="校园清洁" name="type"></el-checkbox>
              <el-checkbox label="社会公益活动" name="type"></el-checkbox>
              <el-checkbox
                label="没有参加任何劳动教育"
                name="type"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item
            label="33劳动教育对您在以下哪些方面有帮助<多选>"
            prop="Q33"
            id="a33"
          >
            <el-checkbox-group
              v-model="Form.Q33"
              @change="handleSelect('Q33', 33)"
            >
              <el-checkbox label="形成坚定意志" name="type"></el-checkbox>
              <el-checkbox label="增强身体素质" name="type"></el-checkbox>
              <el-checkbox label="培养良好习惯" name="type"></el-checkbox>
              <el-checkbox label="增强社会责任感" name="type"></el-checkbox>
              <el-checkbox label="形成团结合作意识" name="type"></el-checkbox>
              <el-checkbox label="了解相关知识和技能" name="type"></el-checkbox>
              <el-checkbox label="维护校园卫生环境" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item
            label="34大二期间，您在以下哪些素养方面得到了明显提升<多选>"
            prop="Q34"
            id="a34"
          >
            <el-checkbox-group
              v-model="Form.Q34"
              @change="handleSelect('Q34', 34)"
            >
              <el-checkbox label="遵纪守法" name="type"></el-checkbox>
              <el-checkbox label="乐于助人" name="type"></el-checkbox>
              <el-checkbox label="人生的乐观态度" name="type"></el-checkbox>
              <el-checkbox label="积极努力、追求上进" name="type"></el-checkbox>
              <el-checkbox
                label="精益求精，追求卓越的工匠精神"
                name="type"
              ></el-checkbox>
              <el-checkbox label="诚实守信" name="type"></el-checkbox>
              <el-checkbox label="团队合作" name="type"></el-checkbox>
              <el-checkbox label="关注社会" name="type"></el-checkbox>
              <el-checkbox label="环境意识" name="type"></el-checkbox>
              <el-checkbox label="工程安全" name="type"></el-checkbox>
              <el-checkbox label="没有任何提升" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <div>六、在校体验</div>
          <el-divider></el-divider>
          <div v-for="item1 in arrQueList5" :key="item1.index">
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
            label="42您认为本校学风方面主要强调了哪些方面<多选>"
            prop="Q42"
            id="a42"
          >
            <el-checkbox-group
              v-model="Form.Q42"
              @change="handleSelect('Q42', 42)"
            >
              <el-checkbox
                label="在学业方面投入大量时间"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="端正学习态度，严肃课堂纪律"
                name="type"
              ></el-checkbox>
              <el-checkbox label="严格规范考试管理" name="type"></el-checkbox>
              <el-checkbox label="以上均未强调" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item
            label="43请您对本校提供的教室及教学设备进行评价<多选>"
            prop="Q43"
            id="a43"
          >
            <el-checkbox-group
              v-model="Form.Q43"
              @change="handleSelect('Q43', 43)"
            >
              <el-checkbox label="数量满足教学需求" name="type"></el-checkbox>
              <el-checkbox label="功能满足教学需求" name="type"></el-checkbox>
              <el-checkbox label="管理与维护方便使用" name="type"></el-checkbox>
              <el-checkbox label="设施更新及时" name="type"></el-checkbox>
              <el-checkbox label="以上均不满足" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item
            label="44请您对本校提供的实验室及设备进行评价<多选>"
            prop="Q44"
            id="a44"
          >
            <el-checkbox-group
              v-model="Form.Q44"
              @change="handleSelect('Q44', 44)"
            >
              <el-checkbox
                label="数量满足实践需求（如满足实验的安排和分组情况等)"
                name="type"
              ></el-checkbox>
              <el-checkbox label="功能满足实践需求" name="type"></el-checkbox>
              <el-checkbox
                label="有良好的管理与运行维护机制，方便使用)"
                name="type"
              ></el-checkbox>
              <el-checkbox label="设备或材料更新及时" name="type"></el-checkbox>
              <el-checkbox label="以上均不满足" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item
            label="45请您对本校提供的计算机、网络及图书资源进行评价<多选>"
            prop="Q45"
            id="a45"
          >
            <el-checkbox-group
              v-model="Form.Q45"
              @change="handleSelect('Q45', 45)"
            >
              <el-checkbox label="满足日常学习需求" name="type"></el-checkbox>
              <el-checkbox label="管理规范" name="type"></el-checkbox>
              <el-checkbox label="共享程度高" name="type"></el-checkbox>
              <el-checkbox label="设备及资源更新及时" name="type"></el-checkbox>
              <el-checkbox label="以上均不满足" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <div class="btn">
            <el-button
              el-button
              type="primary"
              @click="submitForm"
              class="submit"
              >提交</el-button
            >
            <el-button el-button @click="resetForm">重置</el-button>
          </div>
        </el-form>
      </el-card>
    </div>
    <div class="tips">
      <div class="btnBox">
        <div class="title">题目序号</div>
        <div ref="btnQues" class="btnQues">
          <el-button
            v-for="(item, index) in arrQuebtnNum"
            :key="index"
            :id="index"
            class="singleBtn"
            @click="btnclick(index + 1)"
            >{{ index + 1 }}</el-button
          >
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
  data() {
    return {
      Form: {
        sex: "",
        nations: "",
        major: "",
        education: "",
        profession: "",
        Q6: [],
        Q7: [],
        Q8: [],
        Q9: [],
        Q10: [],
        Q11: [],
        Q12: [],
        Q13: [],
        Q14: [],
        Q15: [],
        Q16: [],
        Q17: [],
        Q18: [],
        Q19: [],
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
        Q30: [],
        Q31: [],
        Q32: [],
        Q33: [],
        Q34: [],
        Q35: [],
        Q36: [],
        Q37: [],
        Q38: [],
        Q39: [],
        Q40: [],
        Q41: [],
        Q42: [],
        Q43: [],
        Q44: [],
        Q45: [],
      },
      rules: {
        sex: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        nations: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        major: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        education: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
        profession: [
          { required: true, message: "您还有未选择的选项", trigger: "change" },
        ],
      },
      nationsArray: [
        { id: 1, name: "汉族" },
        { id: 2, name: "蒙古族" },
        { id: 3, name: "回族" },
        { id: 4, name: "藏族" },
        { id: 5, name: "维吾尔族" },
        { id: 6, name: "苗族" },
        { id: 7, name: "彝族" },
        { id: 8, name: "壮族" },
        { id: 9, name: "布依族" },
        { id: 10, name: "朝鲜族" },
        { id: 11, name: "满族" },
        { id: 12, name: "侗族" },
        { id: 13, name: "瑶族" },
        { id: 14, name: "白族" },
        { id: 15, name: "土家族" },
        { id: 16, name: "哈尼族" },
        { id: 17, name: "哈萨克族" },
        { id: 18, name: "傣族" },
        { id: 19, name: "黎族" },
        { id: 20, name: "傈僳族" },
        { id: 21, name: "佤族" },
        { id: 22, name: "畲族" },
        { id: 23, name: "高山族" },
        { id: 24, name: "拉祜族" },
        { id: 25, name: "水族" },
        { id: 26, name: "东乡族" },
        { id: 27, name: "纳西族" },
        { id: 28, name: "景颇族" },
        { id: 29, name: "柯尔克孜族" },
        { id: 30, name: "土族" },
        { id: 31, name: "达翰尔族" },
        { id: 32, name: "么佬族" },
        { id: 33, name: "羌族" },
        { id: 34, name: "布朗族" },
        { id: 35, name: "撒拉族" },
        { id: 36, name: "毛南族" },
        { id: 37, name: "仡佬族" },
        { id: 38, name: "锡伯族" },
        { id: 39, name: "阿昌族" },
        { id: 40, name: "普米族" },
        { id: 41, name: "塔吉克族" },
        { id: 42, name: "怒族" },
        { id: 43, name: "乌孜别克族" },
        { id: 44, name: "俄罗斯族" },
        { id: 45, name: "鄂温克族" },
        { id: 46, name: "德昂族" },
        { id: 47, name: "保安族" },
        { id: 48, name: "裕固族" },
        { id: 49, name: "京族" },
        { id: 50, name: "塔塔尔族" },
        { id: 51, name: "独龙族" },
        { id: 52, name: "鄂伦春族" },
        { id: 53, name: "赫哲族" },
        { id: 54, name: "门巴族" },
        { id: 55, name: "珞巴族" },
        { id: 56, name: "基诺族" },
      ],
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
      // 接收set数组
      queSetArr: [],
      // 问题按钮上的数字数组
      arrQuebtnNum: [],
      // 问题按钮数组
      arrQuebtn: [],
      // 提取的问题五个模块数组集合
      arrQueList: [],
      arrQueList2: [],
      arrQueList3: [],
      arrQueList4: [],
      arrQueList5: [],
    };
  },
  mounted() {
    const s = new Set([]);
    this.queSetArr = s;
    // 获取问题按钮div盒子下dom元素
    this.arrQuebtn = this.$refs.btnQues.children;
    // 获取Form对象属性个数
    const total = Object.getOwnPropertyNames(this.Form).length - 1;
    const arrQuebtnNum = [];
    for (let index = 0; index < total; index++) {
      arrQuebtnNum.push(index);
    }
    this.arrQuebtnNum = arrQuebtnNum;
    console.log(Object.getOwnPropertyNames(this.Form));
    this.getQuestionList();
  },
  methods: {
    // 提交表单
    submitForm() {
      console.log(this.Form);
      const params = this.Form;
      this.$refs.ruleForm.validate(async (valid) => {
        if (!valid) return;
        // this.$message.success('添加成功')
        const res = await this.$axios.post("form", this.$Qs.stringify(params));
        console.log(res);
        this.$alert("提交成功，感谢您的参与", "提示", {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "success",
              message: "添加成功",
            });
          },
        });
      });
    },
    // 重置表单
    resetForm() {
      this.$refs.ruleForm.resetFields();
      this.arrQuebtn.forEach((item) => {
        item.style.background = "rgb(255,255,255)";
      });
      this.percentage = 0;
    },
    // 选择答案触发事件
    handleSelect(name, i) {
      // 将传过来的问题序列号转化为索引号
      i = i - 1;
      // 如果set数组中不存在这个问题类名
      if (!this.queSetArr.has(name)) {
        this.percentage += 2.25;
        this.queSetArr.add(name);
        this.arrQuebtn[i].style.background = "rgb(72,162,255)";
      }
    },
    // 获取问题数据列表
    async getQuestionList() {
      const { data } = await this.$axios.get("formData/questions");
      this.arrQueList = data;
      const { data: data2 } = await this.$axios.get("formData/questions2");
      this.arrQueList2 = data2;
      const { data: data3 } = await this.$axios.get("formData/questions3");
      this.arrQueList3 = data3;
      const { data: data4 } = await this.$axios.get("formData/questions4");
      this.arrQueList4 = data4;
      const { data: data5 } = await this.$axios.get("formData/questions5");
      this.arrQueList5 = data5;
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
      height: 50%;
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
