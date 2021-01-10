<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">
        <!-- <span v-if="$route.path === '/question'" style="color: #97a8be"
          >首页<span style="margin: 0 9px">/</span>问卷</span
        > -->
        <!-- <span v-else class="no-redirect">{{ tagTitle(item) }}</span> -->
        <span class="no-redirect">{{ tagTitle(item) }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from "path-to-regexp";

export default {
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith("/redirect/")) {
        return;
      }
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  mounted() {
    // console.log(this.levelList);
    // console.log(this.$route);
  },
  computed: {
    tagTitle() {
      return (tag) => {
        const route = this.$route;
        if (route.path === tag.path) {
          if (route.query.title) {
            return this.$route.query.title;
          } else {
            return tag.meta.title;
          }
        } else {
          return tag.meta.title;
        }
      };
    },
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );

      const first = matched[0];
      if (!this.isDashboard(first)) {
        matched = [{ path: "/welcome", meta: { title: "首页" } }].concat(
          matched
        );
      }
      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    },
  },
};
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .el-breadcrumb__inner {
    a {
      color: #666;
    }
  }
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
