<template>
  <div>
    <img src="../assets/loginBg.jpg" alt />
    <div class="box">
      <p>账户密码登录</p>

      <!-- 登录页面 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名：" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="密码：" prop="password">
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>

        <el-form-item class="elButton">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        <div class="text">
          还没有账号?
          <span>
            <router-link to="/register">立即注册</router-link>
          </span>
          <router-view></router-view>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    var myvalidate = function(context, value, callback) {
      if (/^(?=.*\d+)(?=.*[a-zA-Z]+)(?=.*[_]+).{6,16}$/gim.test(value)) {
        callback();
      } else {
        callback(new Error("必须包含数字、字母、下划线，6~16位"));
      }
    };
    return {
      activeIndex: "1",
      ruleForm: {
        name: "",
        password: "",
        loginName: "",
        loginPassW: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur"
          },
          { validator: myvalidate, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 登录按钮
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //   alert("submit!");
          axios
            .post("http://localhost:9999/login", {
              username: this.ruleForm.name,
              password: this.ruleForm.password
            })
            .then(res => {
              if (res.data.status == -1) {
                // this.$message.error(res.data.msg);
                this.$message({
                  type: "error",
                  message: res.data.msg,
                  offset: 60
                });
              } else if (res.data.status == 0) {
                this.$message({
                  type: "error",
                  message: res.data.msg,
                  offset: 60
                });
              } else {
                this.$message({
                  message: res.data.msg,
                  type: "success",
                  offset: 60
                });
                window.sessionStorage.setItem("loginInfo", "true");
                window.sessionStorage.setItem('username',res.data.username)
                this.$router.push({ path: "/personal" });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
img {
  width: 100%;
  height: 1000px;
}
.box {
  width: 500px;
  height: 500px;
  background-color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -250px;
  border-radius: 6px;
  text-align: center
}
p {
  font-size: 28px;
  font-weight: bold;
  margin-top: 48px;
}
.demo-ruleForm {
  width: 75%;
  margin: 50px auto;
  margin-left: 20px;
}
.elButton {
  margin-top: 40px;
}
.text {
  color: gray;
  font-weight: bold;
  margin-left: 93px;
  height: 84px;
  line-height: 84px;
  text-align: center;
}
div span {
  color: black;
  cursor: pointer;
}
</style>