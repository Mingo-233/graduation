<template>
  <div class="login-container" v-title data-title="登录">
    <div class="login-from-container" :class="{ show: show }">
      <h2 class="headline">大学生学情分析系统</h2>
      <el-form
        class="login-form"
        :rules="rules"
        autoComplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
        v-if="isLogin"
      >
        <h3 class="title">
          欢迎登陆
          <span></span>
        </h3>
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            show-password
            v-model="loginForm.password"
            @keyup.enter.native="handleLogin"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
          >
          </el-input>
        </el-form-item>
        <el-form-item style="margin-top: 30px">
          <el-row>
            <el-col :span="24">
              <el-button
                type="primary"
                :loading="loading"
                @click.native.prevent="handleLogin"
                style="width: 100%"
              >
                登 录
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div class="login-loading" v-else>
        <div class="loader-inner ball-scale-multiple">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="loading-text">请稍后，正在登陆......</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      redirect: undefined,
      loading: false,
      loginForm: {
        username: "Admin",
        password: "qwer",
      },
      show: false,
      isLogin: true,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.isLogin = false;
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then((res) => {
              console.log(res);
              this.$message({
                message: res.data.msg,
                type: "success",
              });
              console.log(this.redirect);
              this.$router.push({ path: this.redirect || "/" });
            })
            .catch(() => {
              this.isLogin = true;
              this.loading = false;
            });
        }
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1);
  },
  components: {},
};
</script>

<style rel="stylesheet/scss" lang="less" scoped>
.login-container {
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: url(~@/assets/bg.jpg) no-repeat;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  .headline {
    margin-top: 8%;
    text-align: center;
    color: rgb(29, 50, 95);
  }
  .login-from-container {
    position: fixed;
    top: 20px;
    bottom: 20px;
    right: 20px;
    width: 500px;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.2);
    transform: translateX(500px);
    transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    background: #fff;
    opacity: 0.9;
    overflow-y: auto;
    .login-form {
      width: 80%;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.5s ease-in-out 0.3s;
      -moz-transition: all 0.5s ease-in-out 0.3s;
      -webkit-transition: all 0.5s ease-in-out 0.3s;
      -o-transition: all 0.5s ease-in-out 0.3s;
    }
  }
  .login-from-container.show {
    transform: translateX(0);
    .login-form {
      opacity: 1;
    }
    .login-loading {
      width: 155px;
      height: 115px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .loader-inner {
        width: 64px;
        height: 64px;
        margin: 0 auto;
      }
      .loading-text {
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: #909399;
      }
    }
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .title {
    position: relative;
    font-size: 24px;
    color: #303133;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: normal;
    span {
      display: block;
      width: 10%;
      height: 2px;
      background: #409eff;
      position: absolute;
      bottom: -10px;
      left: 50%;
      margin-left: -5%;
    }
  }
}
</style>
