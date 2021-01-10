<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      background-color="rgb(48,65,86)"
      text-color="#fff"
      active-text-color="#409eff"
      :unique-opened="true"
      :show-timeout="200"
      :router="true"
      :default-active="$route.path"
      :collapse="isCollapse"
    >
      <el-submenu
        :index="item.path + ''"
        v-for="item in permission_routes"
        :key="item.id"
      >
        <!-- 一级菜单模板区域 -->
        <template slot="title">
          <!-- 图标 -->
          <!-- <i :class="item.meta.icon"></i> -->
          <i class="el-icon-menu"></i>
          <!-- 文字 -->
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item-group>
          <!-- @click="savePath('' + subitem.path)" -->
          <el-menu-item
            :index="subitem.path"
            v-for="subitem in item.children"
            :key="subitem.id"
          >
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 文字 -->
              <span>{{ subitem.name }}</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"/> -->
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      menuList: [],
      icons: [
        "el-icon-user-solid",
        "el-icon-pie-chart",
        "el-icon-data-analysis",
        "el-icon-notebook-1",
      ],
      activePath: "",
    };
  },
  computed: {
    ...mapGetters(["sidebar", "permission_routes"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  methods: {
    // 保存链接的激活状态
    // savePath: function (path) {
    //   window.sessionStorage.setItem("activePath", path);
    //   this.activePath = path;
    //   console.log(this.activePath);
    // },
  },
  created() {
    console.log("sidebaritem test");
    console.log(this.permission_routes);
  },
};
</script>
<style lang="scss">
</style>
