<template>
  <div id="employ-container">
    <div class="employ-btn">
      <el-button   type="primary" @click="pwdLogin" style="margin-left: 100px;" >密码登录</el-button>
      <el-button   type="primary" @click="infoLogin" style="margin-left: 30px;">短信登录</el-button>
    </div>
    <!--    //登录-->
    <div class="employ-form"  v-if="isShow">
      <el-row  >
        <el-col :span="16"><div class="grid-content bg-purple-light">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item  label="招聘账号" prop="account" style="width: 350px; margin-top: 70px;"  >
              <el-input placeholder="请输入招聘者手机号/用户名" type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  label="密码" prop="pass" style="width: 350px; margin-top: 70px;"  >
              <el-input placeholder="请输入密码" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" style="width: 350px; margin-top:50px;">
              <el-input placeholder="请确认密码" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item >
              <el-button type="primary" @click="PasssubmitForm('ruleForm')">登录</el-button>
              <el-button @click="employRegister">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
        </el-col>
      </el-row>
    </div >

    <!--    注册-->
    <div class="employ-form-register" v-else>
      <el-row  >
        <el-col   style="margin-top: 50px;"><div class="grid-content bg-purple-light">
          <el-form :model="TelruleForm" status-icon :rules="Telrules" ref="TelruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="手机号码"  placeholder="请输入11位正确手机号" prop="Telphone" style="width: 350px; " >
              <el-input type="tel" v-model="TelruleForm.Telphone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码"placeholder="请输入有效验证码"  prop="Telcode" style="margin-top: 50px;">
              <el-input v-model="TelruleForm.Telcode" style="width: 200px"  label-width="80px" ></el-input>
              <el-button v-show="Verification" @click="handleClick" type="primary" style="margin-left: 10px;">点击获取验证码</el-button>
              <el-button v-show="!Verification" type="primary"><span>{{timer}}</span>秒后重新获取</el-button>
            </el-form-item>
            <div style="display: flex;flex-direction: row">
              <el-form-item  >
                <el-button type="primary" @click="TelsubmitForm('TelruleForm')">登录</el-button>
                <el-button @click="employRegister()">注册</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "bossForm",
  data(){
    var validatephone =(rule, value, callback) => {
      if (value.length<11) {
        callback(new Error('请输入11位有效用户名'));
      } else {
        callback();
      }
      console.log(value)
    };
    var validateAccount =(rule, value, callback) => {
      if (value.length<11) {
        callback(new Error('请输入11位有效用户名'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    var   checkPhone= (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入手机号码'));
      } else if (value.length !=11) {
        return callback(new Error('请输入11位手机号码'));
      } else {
        callback();
      }
    };
    //验证验证码
    var  checkCode =  (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入验证码'));
      } else{
        callback();
      }
    };
    return{

      // background: 'url(' +require('@/assets/background.jpg') + ')',
      CODE:'',
      isShow:true,
      Verification:true,    //通过v-show控制显示获取还是倒计时
      timer:60  ,    //定义初始时间为60s
      //普通登录规则
      ruleForm: {
        account:"",
        pass: '',
        checkPass: '',
        phone:'',
        code:''
      },
      //普通登录规则
      rules: {
        account:[
          {
            validator:validateAccount,trigger: 'blur'
          }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phone:[{
          validator: checkPhone, trigger: 'blur'
        }],
        code:[{
          validator: checkCode, trigger: 'blur'
        }]

      },
      //电话登录
      Telrules:{
        Telphone:[
          {
            validator:validatephone,trigger: 'blur'
          }],

        Telcode:[{
          validator: checkCode, trigger: 'blur'
        }]

      },

      //电话登录
      TelruleForm:{
        Telphone:"15055910401",
        Telcode:"77888"
      },



    }
  },
  methods: {

    //密码登录
    pwdLogin(){
      console.log("密码登录")
      this.isShow=true;
    },
    //手机登录
    infoLogin(){
      console.log("手机登录")
      this.isShow=false;
    },
//手机验证码提交表单
    TelsubmitForm(formName){
      var that=this;
      this.$refs[formName].validate((valid) => {
        if(valid){
          console.log(valid)
          this.$axios.post(this.$store.state.URL+"checkRecruiterLoginByTel/"+this.TelruleForm.Telphone).then(function (response) {
            console.log("老板")
          console.log(response.data)
            console.log(response.data.code+"----"+that.TelruleForm.Telphone)
            if(response.data.code===0&&that.CODE===that.TelruleForm.Telcode){
              console.log(response.data.code)
                //将应聘者的手机号带过来
              that.$router.push({path:'/',query:{account:that.TelruleForm.Telcode,flag:"boss"}})
            }else{
              that.$message({
                message: '登录失败',
                type: 'warning'
              });
            }

          },function(err){
            that.$message({
              message: '服务端出问题啦',
              type: 'warning'
            });
          })

        }else{
          that.$message({
            message: '请输入正确验证码或手机号',
            type: 'warning'
          });
        }
      });
    },
    //提交账号密码表单
    PasssubmitForm(formName) {
      var that =this;
      this.$refs[formName].validate((valid) => {
        if (valid) {

          this.$axios.post(this.$store.state.URL+"checkRecruiterLoginByAccount",
              {
                recruiterAccount:this.ruleForm.account,
                recruiterPassword:this.ruleForm.pass
              }

          ).then(function(response){
            console.log(response)
            if(response.data.code==0){
              console.log("成功");
              that.$router.push({path:'/',query:{account:that.ruleForm.account,flag:"boss"}})
            }else{
                that.$message({
                message: '登录失败',
                type: 'warning'
              });
            }


          },function(err){
            console.log(err);
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //获取手机验证码
    handleClick(){
      var that = this
      // that.codeNumber ="123456"
      console.log(this.TelruleForm.Telphone)
      // URL:"http://localhost:8084/yibole/",
      this.$axios.post(this.$store.state.URL+"getCode/"+this.TelruleForm.Telphone)
          .then(function(response){
            console.log(response.data.msg)
            //将验证码赋值给code
            that.CODE=response.data.msg



          },function(err){
            console.log(err);
          });

      this.Verification = false;      //点击button改变v-show的状态
      let auth_timer = setInterval(()=>{  //定时器设置每秒递减
        this.timer--;        //递减时间
        if(this.timer<=0){
          this.Verification = true;    //60s时间结束还原v-show状态并清除定时器
          clearInterval(auth_timer)
        }
      },1000)
    },
    //普通用户注册
    employRegister(){

      this.$router.push({path:'/bossRegister'})
    }

  }

}
</script>

<style scoped>

</style>
