<template>
  <div class="container">

    <div class="box" >
      <div class="steps">
      <el-steps :active="active" simple>
        <el-step title="步骤 1" icon="el-icon-edit"></el-step>
        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
      </el-steps>
      </div>
<!--第一步的表单-->
      <div class="formOne" v-if="isShow" label-position="top" >
        <el-form :model="ruleFormOne" status-icon :rules="rulesOne" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="公司名" prop="company">
            <el-input type="text" v-model="ruleFormOne.company" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input type="text" v-model="ruleFormOne.name" autocomplete="off"></el-input>
          </el-form-item>
            <el-form-item label="账号" prop="account">
                <el-input type="text" v-model="ruleFormOne.account" autocomplete="off"></el-input>
            </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input type="email" v-model="ruleFormOne.email" autocomplete="off"></el-input>
          </el-form-item>
            <el-form-item label="手机号" prop="tel">
                <el-input type="email" v-model="ruleFormOne.tel" autocomplete="off"></el-input>
            </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleFormOne.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleFormOne.checkPass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="性别" prop="sex">
            <el-select v-model="ruleFormOne.sex" placeholder="请选择性别" style="width: 790px">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="年龄" prop="age" >
              <el-select v-model="ruleFormOne.age" placeholder="请选择年龄"  style="width: 790px">
              <el-option label="20" value="20"></el-option>
              <el-option label="21" value="21"></el-option>
                  <el-option label="22" value="22"></el-option>
                  <el-option label="23" value="23"></el-option>
                  <el-option label="24" value="24"></el-option>
                  <el-option label="25" value="25"></el-option>
                  <el-option label="26" value="26"></el-option>
                  <el-option label="27" value="27"></el-option>
                  <el-option label="28" value="28"></el-option>
                  <el-option label="29" value="29"></el-option>
                  <el-option label="30" value="30"></el-option>
                  <el-option label="31" value="31"></el-option>
                  <el-option label="32" value="32"></el-option>
                  <el-option label="33" value="33"></el-option>
                  <el-option label="34" value="34"></el-option>
                  <el-option label="35" value="35"></el-option>
                  <el-option label="36" value="36"></el-option>
                  <el-option label="37" value="37"></el-option>
                  <el-option label="38" value="38"></el-option>
                  <el-option label="39" value="39"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitFormOne('ruleForm')">下一步</el-button>
<!--            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->
          </el-form-item>
        </el-form>
      </div>
<!--      第二部的表单-->
      <div class="formTwo" v-else>
        <el-form :model="ruleFormTow" :rules="rulesTwo" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="医院名:" prop="name">
            <el-input v-model="ruleFormTow.hostipalName"></el-input>
          </el-form-item>

          <el-form-item label="法定代表人:" prop="lawName">
            <el-input v-model="ruleFormTow.lawName"></el-input>
          </el-form-item>

          <el-form-item label="注册资金:" prop="lawName">
            <el-input v-model="ruleFormTow.money"></el-input>
          </el-form-item>
          <el-form-item label="注册时间"   prop="date">
            <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleFormTow.date" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>

            <el-form-item label="经营状态:" prop="operatingState">
                <el-input v-model="ruleFormTow.operatingState"></el-input>
            </el-form-item>
          <el-form-item label="医院类型" prop="resource" style="width: 700px;margin-left: 30px">
            <el-radio-group v-model="ruleFormTow.resource">
              <el-radio label="私有医院"></el-radio>
              <el-radio label="公有医院"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="医院位置:" prop="location">
            <el-input v-model="ruleFormTow.location"></el-input>
          </el-form-item>


            <el-upload class="upload-demo"
                       :on-success=handlesuccess drag limit="1"
                       action="http://115.29.204.107:8084/yibole/fileupload" multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>

          <el-button type="primary" @click="submitFormTow('ruleForm')">提交</el-button>
          <el-button style="margin-top: 12px;" @click="pre">上一步</el-button>
        </el-form>

      </div>


    </div>

  </div>

</template>

<script>
export default {
name: "bossRegister",
  data(){
    var checkAge = (rule, value, callback) => {

      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(Number(value))) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleFormOne.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleFormOne.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
    };
    var validateCompany= (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入公司名'));
          } else {
            callback();
          }
    };
   var validateAccount= (rule, value, callback) => {
     if (value === '') {
       callback(new Error('请输入注册用户姓名'));
     } else {
       callback();
     }
   };

    //第二部
    var validatehostipalName= (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入公司名'));
      } else {
        callback();
      }
    };
    var validatelawName= (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入法定代表人'));
      } else {
        callback();
      }
    };
    var validatemoney=(rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入注册资金'));
      } else {
        callback();
      }
    };
var validatecheckSex=(rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入性别'));
  } else {
    callback();
  }
};

      var   validatename=(rule, value, callback) => {
          if (!value) {
              callback(new Error('请输入用户名'));
          } else {
              callback();
          }
      };
      var validatetel=(rule, value, callback) => {
          if (!value) {
              callback(new Error('请输入手机号'));
          }else if(value.length<11){
              callback(new Error('请输入11位手机号'));
          }
          else {
              callback();
          }
      };
      var validateoperatingState=(rule, value, callback) => {
          if (!value) {
              callback(new Error('请输入输入经营状态'));
          }
          else {
              callback();
          }
      };
  return{
      count:"",
      imgurl:"",
   // fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
    dialogOfUpload: true,
    fileList: [],
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    //表单数据
    data:{
          name:"",
        tel:"",
      account:"",
      pass:"",
      company:"",
      age:"",
      sex:"",
      email:'',
      hostipalName:"",
      lawName:"",
      money:'',
      date:'',
      resource:'',
      location:"",
        operatingState:"",
    },
    dialogImageUrl: '',
    dialogVisible: false,
    disabled: false,
    isShow:true,
    active: 0, //步骤条参数
    //第一个表单的校验数据
    ruleFormOne: {
          name:"",
        tel:"",
      account:"",
      pass: '',
      checkPass: '',
      age: '',
      company:"",
      sex:"",
      email:""
    },
    //第一步规则
    rulesOne: {
        operatingState:[
            { validator: validateoperatingState, trigger: 'blur' }
        ],
          name:[
              { validator: validatename, trigger: 'blur' }
          ],
        tel:[
            { validator: validatetel, trigger: 'blur' }
        ],
      pass: [
        { validator: validatePass, trigger: 'blur' }
      ],
      checkPass: [
        { validator: validatePass2, trigger: 'blur' }
      ],
      age: [
        { validator: checkAge, trigger: 'blur' }
      ],
      sex:[
        { validator: validatecheckSex, trigger: 'blur' }
      ],
      company:[
        { validator: validateCompany, trigger: 'blur' }
      ],
      email:[
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
      ],
      account:[
        { validator: validateAccount, trigger: 'blur' }
      ]
    },
    //第二部
    rulesTwo:{
      hostipalName: [
        { validator: validatehostipalName, trigger: 'blur' }
      ],
      lawName:[
        { validator: validatelawName, trigger: 'blur' }
      ],
      money:[
        { validator: validatemoney, trigger: 'blur' }
      ],
      resource: [
        { required: true, message: '请选择活动资源', trigger: 'change' }
      ],
      location: [
        { required: true, message: '请输入地理位置', trigger: 'change' }
      ],
    },
    //第二部
    ruleFormTow:{
      hostipalName:"",
      lawName:"",
      money:"",
      date:"",
      resource:"",
      location:""
    }
  }
  },
  methods: {

      //文件上传
      handlesuccess(response, file, fileList) {
          console.log("success")
          console.log(response)
          //将图片路径赋值
          this.imgurl = response.data.data


      },
//上一步
    pre(){
      this.active==0;
      this.isShow=true
    },
  //点击下一步的操作
    next() {

      this.active++;
      if (this.active > 2) this.active = 0;
      if(this.active===1){
        this.isShow=true
      }else{
        this.isShow=false
      }
      this.ruleFormTow.hostipalName=this.ruleFormOne.company

    },
    //第一步提交
    submitFormOne(formName) {

      this.$refs[formName].validate((valid) => {
        if (valid) {
          //将表单一的数据存在data里面
          this.data.age=this.ruleFormOne.age
          this.data.company=this.ruleFormOne.company
          this.data.pass=this.ruleFormOne.pass
          this.data.email=this.ruleFormOne.email
          this.data.sex=this.ruleFormOne.sex
          this.data.account=this.ruleFormOne.account
            this.data.name=this.ruleFormOne.name
            this.data.tel=this.ruleFormOne.tel
          console.log( this.data.age+"---"+ this.data.company+"--"+ this.data.email+"----"+this.data.sex+"---"+this.data.account+"---"+ this.data.pass+"--"+ this.data.name+"--"+ this.data.tel)
          this.next()
        } else {
          this.$message.error('请按照正确格式输入');
          return false;
        }
      });
    },
    //第二部提交
    submitFormTow(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.data.hostipalName=this.ruleFormTow.hostipalName
          this.data.lawName=this.ruleFormTow.lawName
          this.data.money=this.ruleFormTow.money
          this.data.date=this.ruleFormTow.date
          this.data.resource=this.ruleFormTow.resource
          this.data.location=this.ruleFormTow.location
            this.data.operatingState=this.ruleFormTow.operatingState
          console.log(this.data.hostipalName+"---"+ this.data.lawName+"---"+ this.data.money+"--"+ this.data.date+"----"+this.data.resource+"---"+this.data.location)
          //将data的数据（包括用户注册和公司执照相关的东西放入数据库）


//First
            //用户的招聘者的信息
            this.$axios.post(this.$store.state.URL+"resgisRecruiter",{
                // console.log( this.data.age+"---"+ this.data.company+"" +
                //     "--"+ this.data.email+"----"+this.data.sex+"---"+this.data.account+"---"+ this.data.pass)
                recruiterName:this.data.account,
                recruiterPassword:this.data.pass,
                recruiterSex:this.data.sex,
                recruiterAge:this.data.age,
                recruiterEmail:this.data.email,
                company:this.data.company,
                recruiterAccount:this.data.name,
                recruiterTel:this.data.tel

            }).then((res)=> {
                console.log("第一步注册");
                console.log(res.data)
                if(res.data.code==500){
                    this.$message.error(res.data.msg);
                }else{
                     console.log("----------regisCompany--------");
                    console.log(this.data.hostipalName+"---"+ this.data.lawName+"---"+ this.data.money+"--"+ this.data.date+"----"+this.data.resource+"---"+this.data.location)
                    //医院的信息
                    this.$axios.post(this.$store.state.URL+"regisCompany",{
                        // console.log(this.data.hostipalName+"---"+ this.data.lawName+"---"+
                        //     this.data.money+"--"+ this.data.date+"----"+this.data.resource+"---"+this.data.location)
                        businessLicenseImg: this.imgurl,
                        company:this.data.hostipalName,
                        companyLocation:this.data.location,
                        legalRepresentative:this.data.lawName,
                        RegisMoney:this.data.money,
                        companyType:this.data.resource,
                        operatingState:this.data.operatingState,
                        setupTime:this.data.date
                    }).then((res)=> {
                        console.log("第二步注册");
                        console.log(res.data)
                        if(res.data.code=="500"){
                            this.$message.error(res.data.msg);
                        }else{
                            this.$message.error("注册你注册成功，5秒钟后自动跳转到登录界面");
                            const TIME_COUNT = 5;
                            if(!this.timer){
                                this.count = TIME_COUNT;
                                this.$message.error(this.count+"秒钟后自动跳转到登录界面");
                                this.timer = setInterval(()=>{
                                    if(this.count > 0 && this.count <= TIME_COUNT){
                                        this.count--;
                                    }else{
                                        clearInterval(this.timer);
                                        this.timer = null;
                                        //跳转的页面写在此处
                                        this.$router.push({
                                            path: '/login'
                                        });
                                    }
                                },1000)
                            }

                        }

                    },(err)=> {
                        this.$message.error('错了哦，这是一条错误消息'+err);
                    })

                 }
                console.log(res)
            },(err)=>{
                console.log(err)
            })


        }


        else {
          this.$message.error('请按照正确格式输入');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.container{

  width: 100%;
  height: 100%;
}
.header{
  margin-top: 30px;
  font-size: large;
  color: #242222;
  font-family: "Source Sans Pro";
}
.box{

  height: 70%;
  width: 60%;
  position:absolute;
  top: -20%;left:0;right:0;bottom:0;
  margin: auto;
border-radius: 30px;

}
.steps{

}
.formOne{
  border: #3a8ee6 5px solid;
  margin-top: 35px;
}
.formTwo{
  border: #3a8ee6 5px solid;
  margin-top: 35px;
}


</style>
