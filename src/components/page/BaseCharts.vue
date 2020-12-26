<template>
  <div class="aboutus">
    <div class="title">
      <el-divider content-position="center">个人简历</el-divider>
      <p><el-tag>xxxx大学</el-tag><el-tag>本科</el-tag></p>
    </div>
    <el-card class="box-card" style="margin-bottom: 20px;">
      <div class="text item">
        <div class="grid-content bg-purple">
          <div>
            <span><el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar></span>
            <span style='padding-left:30%;padding-bottom:50px;font-size: 40px;margin: auto' >{{this.employName}}</span>
            <p style='padding-left: 30%' >{{this.employEmail}} | {{this.employTel}} | {{this.employSchool}}</p>
            <!--                      <span>{{"邮箱"}}|{{"地址"}}</span>-->
          </div>
        </div>
        <span>
              <el-divider content-position="left"><i class="el-icon-edit"></i>基本信息</el-divider>
              <div>
                <p><span>性别：{{this.employSex}}</span><span style='padding-left: 36%'>年龄：{{this.employAge}}</span></p>
                <p><span>电话：{{this.employTel}}</span><span style='padding-left: 30%'>邮箱：{{this.employEmail}}</span></p>
                <p><span>政治面貌：{{this.employPoliticalStatus}}</span><span style='padding-left: 32.5%'>民族：{{this.employNation}}</span></p>
                <p><span>当前地址：{{this.employNowAddress}}</span><span style='padding-left: 32.5%'>是否结婚：{{this.employIsMarried}}</span></p>
                <p></p>
              </div>
              </span>
        <p></p>
        <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>教育经历</el-divider>
                <div>
                    <p><span>毕业院校：{{this.employSchool}}</span><span style='padding-left: 30%'>学历：{{this.employBackground}}</span></p>
                    <p><span>专业：{{this.employMajor}}</span></p>
                    <p></p>
                </div>
                </span>
        <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>实习经历</el-divider>
                <div>
                    <p><span>实习医院：{{this.employWorkExperience}}</span></p>
                    <p><span>地址：{{this.employAddress}}</span></p>
                    <p><span>实习评价：{{this.resumeSelfevaluation}}</span></p>
                    <p></p>
                </div>
                </span>
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
      <el-button type="text" @click="dialogVisible = true">点击修改简历</el-button>

      <el-dialog
          title="修改简历"
          :visible.sync="dialogVisible"
          width="60%"
          :before-close="handleClose">
            <span>
               <el-divider content-position="left"><i class="el-icon-edit"></i>基本信息</el-divider>
              <div>
                <p><span>性别:<el-input style='width: 70%' placeholder="请输入性别">{{this.employSex}}</el-input></span></p>
                <p></p>
                <p> <span>年龄：<el-input style='width: 70%' placeholder="请输入年龄">{{this.employSex}}</el-input></span></p>
                <p><span>电话：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                <p> <span>邮箱：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                <p><span>政治面貌：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                <p> <span>民族：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                <p><span>当前地址：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                <p></p>
              </div>
              </span>
        <p></p>
        <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>教育经历</el-divider>
                <div>
                  <p><span>毕业院校：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                    <p> <span>学历：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                    <p><span>专业：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                    <p>  <span>是否结婚：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                    <p></p>
                </div>
                </span>
        <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>实习经历</el-divider>
                <div>
                    <p><span>实习医院：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                    <p><span>地址：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                    <p><span>实习评价：<el-input style='width: 70%' placeholder="请输入电话"></el-input></span></p>
                    <p></p>
                </div>
            </span>

        <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
    console.log(this.Info);
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
      dialogVisible: false,
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
        // 用户的数据信息
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
      handleClose(done) {
        this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
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
  this.employIsMarried=res.data.data.employIsMarried,
  this.employAge=res.data.data.employAge,
  this.employEmail=res.data.data.employEmail,
  this.employTel=res.data.data.employTel,
  this.employBackground=res.data.data.employBackground,
  this.employMajor=res.data.data.employMajor,
  this.employSchool=res.data.data.employSchool,
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
</style>
