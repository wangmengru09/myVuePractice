<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon ref="ruleForm2" label-width="80px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="pass">
        <el-input type="type" v-model="ruleForm.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    // var validateUsername = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入用户名'));
    //   } else {
    //     callback();
    //   }
    // };
    // var validatePassword = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入密码'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm: {
        username: "",
        password: ""
      }
      // rules: {
      //   username: [
      //     { validator: validateUsername, trigger: 'blur' }
      //   ],
      //   password: [
      //     { validator: validatePassword, trigger: 'blur' }
      //   ]
      // }
    };
  },
  methods: {
    submitForm(formName) {
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
      localStorage.setItem('token', '12312312312312312');
    },
    resetForm(formName) {
      console.log(localStorage.getItem('token'));
      // this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scope>
.login {
  width: 100%;
  height: 100%;
  background-color: rgb(108, 108, 146);
  padding-top: 200px;
  box-sizing: border-box;
}
.el-form {
  width: 400px;
  margin: 0 auto;
  padding: 30px 30px 30px 20px;
  background-color: #fff;
}
.el-form-item__content {
  margin-left: 80px;
}
</style>
