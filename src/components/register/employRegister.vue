<template>
  <div class="loginbody">
    <div class="login">
      <div class="mylogin" align="center">
        <h4>应聘者注册界面</h4>
        <el-form
            :model="registerForm"
            :rules="registerRules"
            ref="registerForm"
            label-width="0px"
        >
          <el-form-item
              label=""
              prop="account"
              style="margin-top:10px;"
          >
            <el-row>
              <el-col :span='2'>
                <span class="el-icon-s-custom"></span>
              </el-col>
              <el-col :span='22'>
                <el-input
                    class="inps"
                    placeholder='手机号'
                    v-model="registerForm.tel">
                </el-input>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item
              label=""
              prop="account"
              style="margin-top:10px;"
          >
            <el-row>
              <el-col :span='2'>
                <span class="el-icon-lock"></span>
              </el-col>
              <el-col :span='22'>
                <el-input
                    class="inps"
                    placeholder='密码'
                    type="password"
                    v-model="registerForm.pwd">
                </el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item
              label=""
              prop="code"
          >
            <el-row style="margin-top: 10px">
              <el-col :span='2'>
                <span class="el-icon-lock"></span>
              </el-col>
              <el-col :span='22' >
                <div class="code-button">
                <el-input
                    class="pasw"
                    type="text"
                    placeholder='验证码'
                    v-model="registerForm.code"
                ></el-input>
                <el-button v-show="Verification" @click="handleClick" type="primary" style="margin-left: 20px;">点击获取验证码</el-button>
                <el-button v-show="!Verification" type="primary"><span>{{timer}}</span>秒后重新获取</el-button>
                </div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item style="margin-top:55px;">
            <el-button
                type="primary"
                round
                class="submitBtn"
                @click="submitForm('registerForm')"
            >注册
            </el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

name: "employRegister",

    data: function () {
      return {
        CODE:"",
        Verification:true,    //通过v-show控制显示获取还是倒计时
        timer:60  ,    //定义初始时间为60s
        registerForm: {
          tel: '',
          code:"",
          pwd: ''
        },
        registerRules: {
          tel: [
            {required: true, message: "请输入11位手机号", trigger: "blur"}
          ],
          code: [{required: true, message: "请输入验证码", trigger: "blur"}],
          pwd:[{required: true, message: "请输入密码", trigger: "blur"}]
        }
      }
    },

    methods: {
      submitForm(formName) {
        var that=this;
        this.$refs[formName].validate((valid) => {

          if(valid){
            console.log(valid)
            console.log(this.registerForm.tel)
            this.$axios.post(this.$store.state.URL+"regisEmploy",{
              employTel:this.registerForm.tel,
              employPassword:this.registerForm.pwd
            }).then(function (response) {
              console.log("普通用户手机注册")
              console.log(response.data)
              console.log(response.data.code+"----"+that.registerForm.tel)
              if(response.data.code===0&&that.CODE===that.registerForm.code){
                console.log(response.data.code)
                that.$message({
                  message: '恭喜注册成功',
                  type: 'success'
                });
                  that.$router.push({path:'/login'})
                //that.$router.push({path:'/',query:{account:that.ruleForm.account}})
              }else{
                that.$message({
                  message: '注册失败',
                  type: 'warning'
                });
              }

            },function(err){
              this.$message({
                message: '服务端出问题啦',
                type: 'warning'
              });
            })

          }else{
            this.$message({
              message: '请输入正确验证码或手机号',
              type: 'warning'
            });
           }
        });
      },


      //获取手机验证码
      handleClick(){
        var that = this
        // that.codeNumber ="123456"
        console.log(this.registerForm.tel)
        // URL:"http://localhost:8084/yibole/",
        this.$axios.post(this.$store.state.URL+"getCode/"+this.registerForm.tel)
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
    }

}
</script>

<style scoped>
.loginbody {
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: hidden;
}

.login {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  font-size: 16px;
  background-position: left top;
  background-color: #242645;
  color: #fff;
  font-family: "Source Sans Pro";
  position: relative;
  /*background-image: url('/static/images/background.jpg');*/
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.mylogin {
  width: 240px;
  height: 360px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 50px 40px 40px 40px;
  box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  opacity: 1;
  background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
  );
}

.inps input {
  border: none;
  color: #fff;
  background-color: transparent;
  font-size: 12px;
}

.submitBtn {
  background-color: transparent;
  color: #39f;
  width: 200px;
}
.pasw{
  width: 100px;
}
.code-button{
  display: flex;
  flex-direction: row;
}
</style>
