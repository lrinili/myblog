<template >
  <div class="login" style="background: url(public/static/login.jpg) no-repeat center;">
    <el-row :gutter="24">
      <el-col :span="7" :offset="8">
        <div class="grid-content bg-purple login-main">
          <el-form :model="myForm" :rules="rules" ref="myForm" label-position="left" label-width="80px" class="demo-ruleForm">
             <h3 class="title">欢迎登录后台管理系统</h3>
            <el-form-item label="用户名" prop="name" >
              <el-input type="text" v-model="myForm.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="myForm.password" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
           <el-checkbox style="margin-left:80px;">记住我</el-checkbox>
          <div style="margin-left:80px;margin-top:10px">
            <el-button @click="reqiste">注册</el-button>
            <el-button type="primary" @click="login">登录</el-button>
          </div>


        </div>
      </el-col>
    </el-row>
  </div>

</template>
  <script type="text/javascript">
    export default{
      data(){
        return {
          myForm:{
            name:'',
            password:''
          },
          rules:{
            name:
            [
              { required:true,message:"账号不能为空", trigger: 'blur' }
            ],
            password:
            [
              { required:true,message:"密码不能为空", trigger: 'blur' }
            ]
          }
        }
      },
      methods:{
        login(){
          let vm = this
          vm.$refs.myForm.validate((valid)=>{
            if(valid){
              console.log('login')
            }else{
              return false
            }
          })
        
        },
        reqiste(){

        }
      }
    }
  </script>
  <style >
    .login{
      width: 100%;
      height: 100%
    }
    .login-main{
      background: #ccc;
      opacity: 0.85;
      width: 100%;
      height: 300px;
      margin-top: 90px;
      padding:10px 30px 10px 30px;
      border-radius:20px;
    }
    .title{
      text-align: center;
      margin-bottom: 20px
    }
  </style>
