<template>
  <div class="app-wrapper" :class="classObj">
    <!-- <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    /> -->
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div ref="navbar">
        <navbar />
      </div>
      <div ref="appmain">
        <app-main
          :style="{ height: contentHeight + 'px', 'overflow-y': 'auto' }"
        />
      </div>
      <div
        class="footer overh"
        ref="footer"
        style="
          line-height: 50px;
          position: absolute;
          z-index: 1002;
          width: 100%;
          bottom: 0;
        "
      >
        <div class="pull-right" style="padding-right: 20px; float: right">
          © <a href="javascript:;" target="_blank">大学生学情分析系统</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "layout",
  data() {
    return {
      showSettings: true,
      contentHeight: 0,
      timer: false,
    };
  },
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  watch: {
    contentHeight(val) {
      this.contentHeight = val;
      this.$store.dispatch("heightAuto", this.contentHeight);
    },
  },
  mixins: [ResizeMixin],
  computed: {
    structure() {
      return this.$store.getters.structure;
    },
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
  mounted() {
    const _this = this;
    console.log(this.$store.getters);
    this.onresizeHeight();
    this.$nextTick(() => {
      window.onresize = () => {
        _this.onresizeHeight();
      };
    });
  },
  methods: {
    onresizeHeight() {
      // console.log(this.$refs.navbar);
      // console.log(this.$refs.footer);
      const navbarHeight = this.$refs.navbar.offsetHeight;
      const footerHeight = this.$refs.footer.offsetHeight;
      this.contentHeight =
        document.documentElement.clientHeight - (navbarHeight + footerHeight);
      this.$store.dispatch("heightAuto", this.contentHeight);
    },
    handleClickOutside() {
      this.$store.dispatch("CloseSideBar", { withoutAnimation: false });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./../styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
