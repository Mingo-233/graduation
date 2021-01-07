<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header height="40px">
      <div>
        <span>大学生学情分析系统</span>
      </div>
      <el-tooltip content="返回首页" placement="bottom" effect="dark">
        <el-button @click="home" icon="el-icon-house"></el-button>
      </el-tooltip>
      <el-button @click="login" icon="el-icon-house">登录</el-button>
      <!-- {{ getinfo.Name }} -->
      <el-button @click="getdatabytoken">通过token拿数据</el-button>
      <el-tooltip
        content="退 出"
        effect="dark"
        style="margin-right: 15px"
        placement="bottom"
      >
        <div
          class="right-menu-item hover-effect el-icon-switch-button"
          @click="logout"
          style="line-height: 50px; font-weight: bold"
        ></div>
      </el-tooltip>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 左侧边栏 -->
      <sidebar></sidebar>
      <!-- 右侧主体 -->
      <el-main>
        <!-- 路由占位符 -->

        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getInfos, getToken } from "@/utils/auth";
import sidebar from "./components/sideBara";
export default {
  data: function () {
    return {
      // 左边菜单栏数据
      menuList: [],
    };
  },
  computed: {
    getinfo() {
      return JSON.parse(getInfos());
    },
  },
  created: function () {
    // this.getContent()
  },
  mounted() {
    // console.log(JSON.parse(getInfos()));
  },
  methods: {
    home: function () {
      window.sessionStorage.clear();
      // 编程式导航
      this.$router.push("/welcome");
    },
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.dispatch("FedLogOut").then(() => {
        location.reload();
      });
    },
    getdatabytoken() {
      // const token = getToken();
      // console.log(token);
      this.$store.dispatch("GetInfo").then((res) => {
        console.log(res);
      });
    },
  },
  components: {
    sidebar,
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: rgb(54, 133, 242);
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 16px;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-main {
  background-color: rgb(244, 249, 255);
}
</style>
