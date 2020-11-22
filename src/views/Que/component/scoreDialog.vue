<template>
  <div class="score">
    <span>感谢您的参与，您在该模块的测试得分为：</span>
    <number-counter
      :value="this.score"
      :time="0.1"
      :denominator="this.total"
      class="nums"
      >/</number-counter
    >
    <div v-if="this.ratio > 80">分数等级为优秀。</div>
    <div v-else-if="this.ratio > 50">分数等级为良好。</div>
    <div v-else>分数等级为一般。</div>

    <div>您可以继续参与其他模块测试。</div>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </div>
  </div>
</template>

<script>
import NumberCounter from "@/components/NumberCounter";
export default {
  props: {
    id: {
      type: String,
      dafault: "",
    },
  },
  data() {
    const _this = this;
    return {
      score: 0,
      total: 0,
    };
  },
  methods: {
    handleClose() {
      this.$emit("dialogClose");
      this.$router.push("question");
    },
    async getScore() {
      const { data } = await this.$axios.get(`person/personCheck1/${this.id}`);
      this.score = data.score;
      this.total = data.total;
      console.log(data);
    },
  },
  async mounted() {
    await this.getScore();
    console.log(this.ratio);
  },
  computed: {
    ratio: function () {
      return (this.score / this.total) * 100;
    },
  },
  components: {
    NumberCounter,
  },
};
</script>
<style lang="less" >
.score {
  font-size: 16px;
  .nums {
    color: rgb(64, 158, 255);
    font-size: 40px;
    font-weight: 800;
    font-family: "Comic Sans MS";
    text-align: center;
  }
  .dialog-footer {
    display: flex;
    flex-direction: row-reverse;
    margin: 10px 0;
  }
}
</style>