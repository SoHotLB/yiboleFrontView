<template>
  <div class="aboutus">
    <div class="title">
      <el-divider content-position="center">个人简历</el-divider>
      <p><el-tag>xxxx大学</el-tag><el-tag>本科</el-tag></p>
    </div>
    <el-card class="box-card" style="margin-bottom: 20px;">
      <div class="text item">
        <div class="grid-content bg-purple" :data='form'>
            <span style='float: left'><el-avatar shape="square" :size="50" :fit="none" :src="url"></el-avatar></span>

            <div>
            <span style='display: inline;;padding-bottom:40px;font-size: 20px;margin: auto' >{{this.employName}}</span><br>
<!--            <p style='float: right'>-->
<!--                <i @click='openEdit1' style='color: #57cff1' class='el-icon-edit'>编辑</i>-->
<!--            </p>-->
            <p style='padding-left: 30px'>{{this.employEmail}} | {{this.employTel}} | {{this.employSchool}}</p>
            <!--                      <span>{{"邮箱"}}|{{"地址"}}</span>-->

          </div>
        </div>
        <span>
              <el-divider content-position="left"><i class="el-icon-edit"></i>基本信息</el-divider>
              <div>
<!--                  border: 1px solid red;-->
                  <p>
                      <span style='width: 700px' prop='employSex'>性别：{{this.employSex}}</span>
                      <span style='position: absolute;margin-left:23%' prop='employAge'>年龄：{{this.employAge}}</span>
                  </p>
                  <p>
                      <span style='width: 700px' prop='employTel'>电话：{{this.employTel}}</span>
                      <span style='position: absolute;margin-left:185px' prop='employEmail'>邮箱：{{this.employEmail}}</span>
                  </p>
                  <p></p>
              </div>
              </span>
        <p></p>
        <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>教育经历</el-divider>
                <div>
                    <p>
                        <span prop='employSchool'>毕业院校：{{this.employSchool}}</span>
                        <span prop='employBackground' style='padding-left: 175px'>学历：{{this.employBackground}}</span>
                    </p>
                    <p>
                        <span prop='employMajor'>专业：{{this.employMajor}}</span>
                        <span prop='employIsMarried' style='padding-left: 245px'>是否婚配：{{this.employIsMarried}}</span>
                    </p>
                    <p></p>
                </div>
                </span>
        <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>实习经历</el-divider>
                <div>
                    <p class='experience'></p>
<!--                    <p><span>实习医院：{{this.employWorkExperience}}</span></p>-->
<!--                    <p><span>地址：{{this.employAddress}}</span></p>-->
<!--                    <p><span>实习评价：{{this.resumeSelfevaluation}}</span></p>-->
<!--                    <p></p>-->
                </div>
        </span> <br>
        <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>获奖荣誉</el-divider>
                <div>
                    <p>"谷医堂杯"一等奖</p>
                    <p>"校级奖学金"一等奖</p>
                    <p>"校级三好学生"</p>
                </div>
                </span>
        <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>自我评价</el-divider>
                <div>
                    <p>本人性格开朗，为人细心，做事一丝不苟，能吃苦耐劳，工作脚踏实地，有较强的职责心，具有团队合作精神，又具有较强的独立工作潜力，思维活跃。能熟练运用WindowsOfficeWord、Excel、XXX等应用软件，能根据XXX的需求，完成面XXXX工作，具备良好的XXXX意识，极强的沟通潜力与谈判潜力;</p>
                    <p>学习优秀，具有自学能力;具备团队协作精神，有职责心、人品好、思想端正;具备必须的文件管理潜力。</p>
                </div>
                </span>
      </div>
      <div class='topMask square'></div><div class='topMask circular'></div>
    </el-card>
    <el-card>
        <el-button type="text" @click="updateperson(form)">点击修改简历</el-button>



        <el-dialog
          title="修改简历"
          :visible.sync="updatePersonMessage"
          width="60%"
          :before-close="handleClose">
            <div v-model='updateForm'>
                <span>
                    <el-divider content-position="left"><i class="el-icon-edit"></i>基本信息</el-divider>
                    <div>
                        <p><span class='item text'>性别:<el-input v-model='employSex' class='sex' style='width: 70%' placeholder="请输入性别"></el-input></span></p>
                        <p> <span class='item text'>年龄：<el-input v-model='employAge' class='age' style='width: 70%' placeholder="请输入年龄"></el-input></span></p>
                        <p><span class='item text'>电话：<el-input v-model='employTel' class='tel' style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                        <p> <span class='item text'>邮箱：<el-input v-model='employEmail' class='email' style='width: 70%' placeholder="请输入邮箱"></el-input></span></p>
                    </div>
                </span>
                <span>
                    <el-divider content-position="left"><i class="el-icon-edit"></i>教育经历</el-divider>
                    <div>
                        <p><span class='item text'>毕业院校：<el-input v-model='employSchool' class='school' style='width: 60%' placeholder="请输入毕业院校"></el-input></span></p>
                        <p> <span class='item text'>学历：<el-input v-model='employBackground' class='study' style='width: 70%' placeholder="请输入学历"></el-input></span></p>
                        <p><span class='item text'>专业：<el-input v-model='employMajor' class='major' style='width: 70%' placeholder="请输入专业"></el-input></span></p>
                        <p>  <span class='item text'>是否结婚：<el-input v-model='employIsMarried' class='marry' style='width: 60%' placeholder="请输入婚姻状况"></el-input></span></p>
                        <p></p>
                    </div>
                </span>
            </div>
        <p></p>
        <span slot="footer" class="dialog-footer">
              <el-button @click="updatePersonMessage = false">取 消</el-button>
              <el-button type="primary" @click="onUpdateCommit">确 定</el-button>
            </span>
      </el-dialog>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'AboutUs',
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage();
    }
    //flag用于判断是招聘者还是应聘者
    console.log(this.flag);

    // this.searchInfo();
    //打印存在浏览器中的值
    console.log("打印存在浏览器中的值");
    console.log(JSON.parse(localStorage.getItem("UserInfo")).employName);
    this.flag=this.$route.query.flag
    this.searchInfo();
    // console.log(this.employName);
    // console.log(employName);
    // console.log(this.employSchool);
    console.log("this.Info");
    console.log(this.Info);
  },
  created() {
    this.account=this.$route.query.account;
    this.flag=this.$route.query.flag
    this.searchInfo();
    // console.log(this.employName);
    // console.log(employName);
    // console.log(this.employSchool);
    console.log("this.Info");
    // console.log(this.Info);
    this.userinfo=JSON.parse(localStorage.getItem("UserInfo")).employName;
  },
  //  mounted() {
  //  //    this.getData()
  //  // },
  //  if (document.body.clientWidth < 1500) {
  //    this.collapseChage();
  //  }
  //  //flag用于判断是招聘者还是应聘者
  //  console.log(this.flag);
  //
  //  // this.searchInfo();
  //  //打印存在浏览器中的值
  //  console.log("打印存在浏览器中的值");
  //  console.log(JSON.parse(localStorage.getItem("UserInfo")).employName);
  // },
  // created() {
  //  this.account=this.$route.query.account;
  //  this.flag=this.$route.query.flag
  //  this.searchInfo();
  //  console.log("this.Info");
  //  console.log(this.Info);
  // },
  data () {
    return{
        url: 'http://y2.ifengimg.com/a/2014_39/30bf500f445be4e.jpg',
        updatePersonMessage: false,
        tableData:[],
        // test:JSON.parse(localStorage.getItem("UserInfo")).employName,
        // test1:JSON.parse(localStorage.getItem("UserInfo")).employEmail,
        flag:'',
        userinfo:'',
    //简历信息
        employName:JSON.parse(localStorage.getItem("UserInfo")).employName,
        employSex:JSON.parse(localStorage.getItem("UserInfo")).employSex,
        employIsMarried:JSON.parse(localStorage.getItem("UserInfo")).employIsMarried,
        employAge:JSON.parse(localStorage.getItem("UserInfo")).employAge,
        employEmail:JSON.parse(localStorage.getItem("UserInfo")).employEmail,
        employTel:JSON.parse(localStorage.getItem("UserInfo")).employTel,
        resumeImage:JSON.parse(localStorage.getItem("UserInfo")).resumeImage,
        employMajor:JSON.parse(localStorage.getItem("UserInfo")).employMajor,
        employSchool:JSON.parse(localStorage.getItem("UserInfo")).employSchool,
        employBackground:JSON.parse(localStorage.getItem("UserInfo")).employBackground,
        employAddress:JSON.parse(localStorage.getItem("UserInfo")).employAddress,
        employNowAddress:JSON.parse(localStorage.getItem("UserInfo")).employNowAddress,
        employPoliticalStatus:JSON.parse(localStorage.getItem("UserInfo")).employPoliticalStatus,
        employWorkExperience:JSON.parse(localStorage.getItem("UserInfo")).employWorkExperience,
        resumeSelfevaluation:JSON.parse(localStorage.getItem("UserInfo")).resumeSelfevaluation,
        employNation:JSON.parse(localStorage.getItem("UserInfo")).employNation,
        employId:JSON.parse(localStorage.getItem("UserInfo")).employId,
        // 用户的数据信息
        form: {
            employId:this.employId,
            employSex:this.employSex,
            employAge:this.employAge,
            employTel:this.employTel,
            employEmail:this.employEmail,
            employSchool:this.employSchool,
            employBackground:this.employSchool,
            employMajor:this.employMajor,
            employIsMarried:this.employIsMarried
        },
        updateForm: {
            employId:'',
            employSex:'',
            employAge:0,
            employTel:'',
            employEmail:'',
            employSchool:'',
            employBackground:'',
            employMajor:'',
            employIsMarried:''
        },
        // employAddress:"",
        // employAge:"",
        // employBackground:"",
        // employEmail:"",
        // employIsMarried:"",
        // employMajor:"",
        // employName:"",
        // employSchool:"",
        // employSex:"",
        // employTel:"",
        // account:"",
        // flag:"",
        // employAccount:"",
        // company:"",
        // employGraduationTime:"",
        // employId:"",
        // employIntegration:"",
        // employPassword:"",
        // test:JSON.parse(localStorage.getItem("UserInfo")).employName
      }
    },
    computed: {
    // username() {
    //     let username = localStorage.getItem('ms_username');
    //     return username ? username : this.name;
    // },
    onRoutes() {
      return this.$route.path.replace('/', '');
    }
  },
    methods: {
      // getData()
      // {
      //   var that = this
      //   this.$axios.get('http://115.29.204.107:8084/yibole/searchResumeByName/'+this.employName)
      //       .then(function(response) {
      //         that.tableData = response.data.data
      //       }).catch(function(error) {
      //   })
      // },
      //   openEdit1(){
      //       this.$prompt('邮箱','提示',{
      //           confirmButtonText: 'Sure',
      //           cancelButtonText: 'Cancel',
      //           inpu
      //       })
      //   },
      handleClose(done) {
        this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
      },
      updateperson(person){
          console.log("-----------------");
          console.log(person);
          console.log("-----------------");

          // console.log(updat);
          this.updateForm.employId = person.employId
          this.updateForm.employSex = person.employSex
          this.updateForm.employAge = person.employAge
          this.updateForm.employTel = person.employTel
          this.updateForm.employEmail = person.employEmail
          this.updateForm.employSchool = person.employSchool
          this.updateForm.employBackground = person.employBackground
          this.updateForm.employMajor = person.employMajor
          this.updateForm.employIsMarried = person.employIsMarried

          this.updatePersonMessage = true
      },
      onUpdateCommit() {
        var that = this
          console.log("----------------");
          console.log(this.form.employId);
          console.log("----------------");

          this.$axios.post(this.$store.state.URL+"updateEmploy2", {
            employId: this.employId,
            employSex: this.updateForm.employSex,
            employAge: this.updateForm.employAge,
            employTel: this.updateForm.employTel,
            employEmail: this.updateForm.employEmail,
            employSchool: this.updateForm.employSchool,
            employBackground: this.updateForm.employBackground,
            employMajor: this.updateForm.employMajor,
            employIsMarried: this.updateForm.employIsMarried,
        }).then((response)=> {
              console.log(response)
              if (response.data.code == 0) {
                that.$message({
                  message: response.data.msg,
                  type: 'success'
                })
                this.updatePersonMessage = false
                that.searchInfo()
              } else {
                that.$message.error(response.data.msg);
              }
            }).catch(function(error) {
          that.$message.error(error.message);
        })
      },
      searchInfo(){
        console.log("searchInfo");
        console.log(this.flag);
        //应聘者
        if(this.flag=="employ"){
          this.$axios.post(this.$store.state.URL+"searchResumeByName/"+ this.employName).then((res)=>{
            console.log("应聘者+------");
          console.log(res.data.data);
          this.employNation=data.data.employNation,
          this.employName=res.data.data.employName,
          this.employNowAddress=res.data.data.employNowAddress,
          this.resumeSelfevaluation=res.data.data.resumeSelfevaluation,
          this.employSex=res.data.data.employSex,
          // this.updateForm.employSex=res.data.data.employSex,
          this.employIsMarried=res.data.data.employIsMarried,
          this.employAge=res.data.data.employAge,
          // this.updateForm.employAge=res.data.data.employAge,
          this.employEmail=res.data.data.employEmail,
          // this.updateForm.employEmail=res.data.data.employEmail,
          this.employTel=res.data.data.employTel,
          // this.updateForm.employTel=res.data.data.employTel,
          this.employBackground=res.data.data.employBackground,
          // this.updateForm.employBackground=res.data.data.employBackground,
          this.employMajor=res.data.data.employMajor,
          // this.updateForm.employMajor=res.data.data.employMajor,
          this.employSchool=res.data.data.employSchool,
          // this.updateForm.employSc/hool=res.data.data.employSchool,
          this.employAddress=res.data.data.employAddress,
          this.employWorkExperience=res.data.data.employWorkExperience,
          this.employPoliticalStatus=res.data.data.employPoliticalStatus,
          this.resumeImage=res.data.data.resumeImage,
          console.log("================="+this.employName);
          },(err)=>{
          console.log(err);
          })
  }
    //招聘者
  else if(this.flag=="boss"){
  this.$axios.post(this.$store.state.URL+"searchResumeByName/"+ this.employName).then((res)=>{
  console.log("招聘者+------");
  console.log(res.data.data);

  this.recruiterId=res.data.data.recruiterId,
  this.recruiterName=res.data.data.recruiterName,
  this.companys=res.data.data.company,
  this.recruiterAccount=res.data.data.recruiterAccount,
  this.recruiterPassword=res.data.data.recruiterPassword,
  this.recruiterAge=res.data.data.recruiterAge,
  this.recruiterSex=res.data.data.recruiterSex,
  this.recruiterEmail=res.data.data.recruiterEmail,
  this.recruiterTel=res.data.data.recruiterTel,
  this.recruiterIntegration=res.data.data.recruiterIntegration
  },(err)=>{
  console.log(err);
  })
  }
  },
  }
  }


</script>
<style>
.aboutus .grid-content.line{
  border-right: 1px solid #ddd;
  height: 150px;
  width: 100%;
}
.aboutus .el-card__header{
  background: #545c64;
}
.aboutus .el-card__body{
  padding: 50px 20px;
}
.aboutus .el-timeline-item__wrapper{
  top: -8px;
}
.aboutus .title p .el-tag{
  margin: 0px 5px;
  cursor: pointer;
}
.aboutus{
  font-size: 14px;
  text-align: left;
  padding: 0px 100px;
}
.intro{
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.text {
  font-size: 14px;
  text-align: left;
  line-height: 30px;
  text-indent: 2em;
  padding: 18px 0;
}
.box-card{
  position: relative;
}
.item {
  padding: 18px 0;
  display: inline-block;
  margin: 30px 50px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.clearfix span{
  color: #fff;
  font-weight: bold;
}
.title p{
  color: #8c8888;
  font-size: 15px;
  margin-bottom: 80px;
  text-align: center;
}
.grid-content .large{
  font-size: 16px;
  color: #409EFF;
  font-weight: bold;
}
.topMask{
  width: 100px;
  height: 100px;
  background-color: rgba(68,138,255,0.2);
  transform: rotate(45deg);
  position: absolute;
}
.square{
  border-radius: 5px;
  top: 0px;
}
.circular{
  border-radius: 50%;
  top:80px;
  left: 80%;
  background-color: rgba(255, 208, 75,0.2);
}
.text {
  font-size: 14px;
}

.item {
  padding: 5px;
}
</style>
