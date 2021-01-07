<template>
  <el-aside :width="isCollapse ? '64px' : '200px'">
    <div class="toggle-button" @click="toggleCollapse">|||</div>
    <el-menu
      background-color="rgb(22,36,64)"
      text-color="#fff"
      active-text-color="#409eff"
      :unique-opened="true"
      :collapse="isCollapse"
      :router="true"
      :default-active="activePath"
    >
      <!-- 一级菜单 -->
      <!-- v-for 里面index 是每项索引 -->
      <el-submenu
        :index="item.id + ''"
        v-for="(item, index) in menuList"
        :key="item.id"
      >
        <!-- 一级菜单模板区域 -->
        <template slot="title">
          <!-- 图标 -->
          <i :class="icons[index]"></i>
          <!-- 文字 -->
          <span>{{ item.name }}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item-group>
          <el-menu-item
            :index="'/' + subitem.path"
            v-for="subitem in item.children"
            :key="subitem.id"
            @click="savePath('/' + subitem.path)"
          >
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 文字 -->
              <span>{{ subitem.uname }}</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data: function () {
    return {
      // 左边菜单栏数据
      menuList: [],
      icons: [
        "el-icon-user-solid",
        "el-icon-pie-chart",
        "el-icon-data-analysis",
        "el-icon-notebook-1",
      ],
      isCollapse: false,
      activePath: "",
    };
  },
  computed: {},
  created: function () {
    // this.getContent()
    this.getMenuList();
    // 页面创建时，将浏览器存储的激活路径复制，让选择的侧边栏高亮
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  mounted() {},
  methods: {
    getMenuList: async function () {
      // 返回的是promise对象，访问路由是menus
      const res = await this.$get("formData/menus");
      // mongoDB find()返回的是一个数组，所以用[0]去选中
      this.menuList = res.data[0].menuName;
    },
    // 按钮，切换菜单折叠
    toggleCollapse: function () {
      this.isCollapse = !this.isCollapse;
    },
    // 保存链接的激活状态
    savePath: function (path) {
      window.sessionStorage.setItem("activePath", path);
      this.activePath = path;
      console.log(this.activePath);
    },
  },
};
</script>
<style lang="less" scoped>
.el-aside {
  background-color: rgb(22, 36, 64);
  .el-menu {
    border-right: none;
  }
}
.toggle-button {
  margin-top: 10px;
  background-color: rgb(22, 36, 64);
  border: 1px solid rgb(54, 133, 242);
  font-size: 10px;
  line-height: 24px;
  color: white;
  text-align: center;
  //字符间空隙，父元素字体的0.2倍
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>