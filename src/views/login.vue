<template>
  <div class="login-container">
    <div class="login-from-container" :class="{ show: show }">
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
          <span class="svg-container svg-container_login">
            <svg-icon icon-class="user" />
          </span>
          <my-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
          ></my-input>
        </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container svg-container_login">
            <svg-icon icon-class="password"></svg-icon>
          </span>
          <my-input
            :type="pwdType"
            v-model="loginForm.password"
            @keyup.enter.native="handleLogin"
            placeholder="请输入密码"
          ></my-input>
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="pwdType === 'text' ? 'eyeOpen' : 'eye'"
              :style="pwdType === 'text' ? 'color:#409EFF' : ''"
            />
          </span>
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
            <el-col :span="24" style="margin-top: 10px">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-button
                    type="success"
                    @click="adminLoading"
                    style="width: 100%"
                    >admin 登录</el-button
                  >
                </el-col>
              </el-row>
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
import MyInput from "@/components/input";

export default {
  name: "login",
  data() {
    return {
      redirect: undefined,
      otherQuery: {},
      focusInLine: false,
      focusOutLine: false,
      loading: false,
      pwdType: "password",
      loginForm: {
        username: "",
        password: "",
      },
      isOpen: false,
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
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "text";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.isLogin = false;
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then((res) => {
              this.$router.push(
                { path: this.redirect || "/", query: this.otherQuery },
                (onComplete) => {},
                (onAbort) => {}
              );
            })
            .catch(() => {
              this.isLogin = true;
              this.loading = false;
            });
        }
      });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
    adminLoading() {
      this.loginForm.username = "admin";
      this.loginForm.password = "123456";
      this.handleLogin();
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1);
  },
  components: {
    MyInput,
  },
};
</script>

<style rel="stylesheet/scss" lang="less">
.login-container {
  .el-form-item__error {
    padding-top: 5px;
    padding-left: 37px !important;
  }
}
@media screen and (max-width: 530px) {
  .login-from-container {
    width: 90% !important;
  }
  .login-container .login-form {
    width: 100% !important;
    padding: 5%;
  }
}
// $bg: #2d3a4b;
// $light_gray: #eee;
.loader-inner {
  width: 64px;
  height: 64px;
  margin: 0 auto;
}
/* reset element-ui css */
.login-container {
  .el-form-item__error {
    padding-left: 26px;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #666;
      height: 47px;
    }
  }
  .el-form-item {
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="less" scoped>
// $bg: #2d3a4b;
// $dark_gray: #889aa4;
// $light_gray: #eee;
.svg-container {
  display: block;
  width: 20px;
  font-size: 18px;
  position: absolute;
  top: 0;
  bottom: 0;
  line-height: 49px;
}
.login-container {
  overflow: hidden;
  height: 100%;
  width: 100%;
  //   background: url(../../../assets/500269947.jpg) no-repeat top center;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
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
  .svg-container {
    // color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
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
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    // color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
