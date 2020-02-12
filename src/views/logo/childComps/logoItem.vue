<template>
  <div class='logo-item'>
    <div class="logo-shine"></div>
    <div class="logo-icon">
      <img src="~assets/img/logo.png" alt="">
    </div>
    <div class="logo-from">
      <!-- from表单 -->
      <el-form :model="ruleForm" :rules='logorules' ref='logoFromRef'>
        <!-- 用户框 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" v-model="ruleForm.username" placeholder='请输入用户名称'></el-input>
        </el-form-item>
        <!-- 密码框 -->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-goods" v-model="ruleForm.password" placeholder='请输入密码' type='password'>
          </el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click='logo'>登录</el-button>
          <el-button type="info" @click='resetLoginFrom'>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {
    getAutorityToLogo
  } from 'network/logo'
  export default {
    name: 'logoItem',
    components: {},
    data() {
      return {
        //登录表单的数据
        ruleForm: {
          username: 'admin',
          password: '123456'
        },
        //表单的验证规则
        logorules: {
          username: [{
              required: true,
              message: '请输入用户名称',
              trigger: 'blur'
            },
            {
              min: 5,
              max: 10,
              message: '长度在 5 到 10 个字符',
              trigger: 'blur'
            }
          ],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 5,
              max: 20,
              message: '长度在 5 到 20 个字符',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      logo() {
        this.$refs.logoFromRef.validate(valid => {
          if (!valid) {
            return
          } else {
            console.log('校验成功');
            this.getAutorityToLogo(this.ruleForm)
          }
        })
      },
      //发送用户信息验证
      getAutorityToLogo(data) {
        // getAutorityToLogo(data.username, data.password).then(res => {
        // console.log(data);
        // })
        // console.log(data.username);
        // console.log(data.password);
        // getAutorityToLogo().then(res => {
        //   console.log(res);
        // })
        getAutorityToLogo()
      },
      //重置输入框
      resetLoginFrom() {
        this.$refs.logoFromRef.resetFields()
      }
    },
  }
</script>
<style scoped>
  .logo-item {
    background-color: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 300px;
    width: 450px;
    border-radius: 10px;
  }

  .logo-shine {
    width: 120px;
    height: 60px;
    border-radius: 120px 120px 0 0;
    box-shadow: 0 -1px 10px #ccc;
    position: fixed;
    left: 50%;
    transform: translate(-50%, -100%);
  }

  .logo-icon {
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 10px;
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .logo-icon img {
    width: 100%;
    background-color: #eee;
    border-radius: 50%;
  }

  .logo-from {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
</style>