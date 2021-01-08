<template>
  <div class="navbar">
    <hamburger
      class="hamburger-container"
      :toggleClick="toggleSideBar"
      :isActive="sidebar.opened"
    ></hamburger>
    <breadcrumb></breadcrumb>
    <div class="right-menu">
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
        size="medium"
      >
        <div class="avatar-wrapper">
          {{ getinfo.Name }}
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item> 首 页 </el-dropdown-item>
          </router-link>
          <router-link to="/changePwdIndex">
            <el-dropdown-item> 修改密码 </el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="partition right-menu-item"></div>
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
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { getInfos } from "@/utils/auth";
import Hamburger from "@/components/Hamburger";
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: {
    Hamburger,
    Breadcrumb
  },
  data() {
    return {
      layout: true,
    };
  },
  computed: {
    ...mapGetters(["sidebar", "avatar", "name", "subject", "device"]),
    getinfo() {
      return JSON.parse(getInfos());
    },
  },
  methods: {
    // subject(name) {
    //   this.$store.dispatch('setSubject', name).then(() => {
    //     // location.reload() // 为了重新实例化vue-router对象 避免bug
    //   })
    // },
    changePwd() {},
    toggleSideBar() {
      console.log('11');
      this.$store.dispatch("ToggleSideBar");
    },
    logout() {
      this.$store.dispatch("FedLogOut").then(() => {
        location.reload(); // 为了重新实例化vue-router对象 避免bug
      });
    },
  },
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
.partition {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 30%;
    width: 1px;
    background: #999;
    display: block;
  }
}
.el-icon-switch-button:hover {
  color: red !important;
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  z-index: 3;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 15px;
      .avatar-wrapper {
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
