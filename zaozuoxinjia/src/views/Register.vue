<template>
  <div>
    <img src="../assets/loginBg.jpg" alt />
    <div class="box">
        <p>用户注册</p>
      <!-- 注册页面 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        status-icon
      >

        <el-form-item label="用户名：" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="密码：" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="确认密码：" prop="checkPassword">
            <el-input type="password" v-model="ruleForm.checkPassword" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item class="elButton">
          <el-button type="primary" @click="submitRegist('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
         <div class="text">注册代表你已同意<span>《造作用户协议》</span></div>
      </el-form>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  data() {
    var myvalidate = function(context, value, callback) {
      if (/^(?=.*\d+)(?=.*[a-zA-Z]+)(?=.*[_]+).{6,16}$/gim.test(value)) {
        callback();
      } else {
        callback(new Error("必须包含数字、字母、下划线，6~16位"));
      }
    };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPassword !== '') {
            this.$refs.ruleForm.validateField('checkPassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

    return {
      activeIndex: "1",
      ruleForm: {
        name: "",
        password: "",
        checkPassword: '',
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
          { validator: myvalidate, trigger: "blur" },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur"
          },
          { validator: myvalidate, trigger: "blur" },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 注册按钮
    submitRegist(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("http://localhost:9999/register", {
              username: this.ruleForm.name,
              password: this.ruleForm.password
            })
            .then(res => {
              if (res.data.code == 1) {
                this.$message({
                  message: res.data.msg,
                  type: "success",
                  offset:60
                });
                this.$router.push({path:'/login'})
              } else {
                 this.$message({
                  message: res.data.msg,
                  type: "error",
                  offset:60
                });
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
  width: 80%;
  margin: 50px auto;
  margin-left: 20px;
}
.elButton {
  margin-top: 20px;
}
.text {
  color: gray;
  font-weight: bold;
  margin-left: 87px;
  height: 84px;
  line-height: 84px;
  text-align: center;
}
div span {
  color: black;
  cursor: pointer;
}

</style>