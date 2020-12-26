<template>
    <div class='job-content'>
<!--        <div class="container">-->
<!--            <p style='padding-bottom: 10px'>修改密码</p>-->
<!--            <el-input style='padding: 10px'>原密码</el-input>-->
<!--            <el-input style='padding: 10px'>新密码</el-input>-->
<!--            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>-->
<!--        </div>-->
      <el-card class="box-card">
<!--        <div v-for="o in 4" :key="o" class="text item">-->
<!--          {{'列表内容 ' + o }}-->
<!--        </div>-->
        <el-divider>个人信息</el-divider>
        <div style='padding-left: 20%'>
        <div class='text item'><p><i class='el-icon-paperclip'></i>我的昵称：{{this.employName}}{{this.recruiterName}}</p></div>
        <div class='text item'><p><i class='el-icon-paperclip'></i>账号：{{this.employAccount}}{{this.recruiterAccount}}</p></div>
        <div class='text item'><i class='el-icon-paperclip'></i>性别：{{this.employSex}}{{this.recruiterSex}}</div>
        <div class='text item'><i class='el-icon-paperclip'></i>年龄：{{this.employAge}}{{this.recruiterAge}}</div>
        <div class='text item'><i class='el-icon-paperclip'></i>是否结婚：{{this.employIsMarried}}</div>
        <div class='text item'><i class='el-icon-paperclip'></i>地址：{{this.employAddress}}</div>
        <div class='text item'><i class='el-icon-paperclip'></i>电话：{{this.employTel}}{{this.recruiterTel}}</div>
        <div class='text item'><i class='el-icon-paperclip'></i>邮箱：{{this.employEmail}}{{this.recruiterEmail}}</div>
        <div class='text item'><i class='el-icon-paperclip'></i>学校：{{this.employSchool}}</div>
        <div class='text item'><i class='el-icon-paperclip'></i>学历：{{this.employBackground}}</div>
        <div class='text item'><i class='el-icon-paperclip'></i>专业：{{this.employMajor}}</div>
        <div class='text item'><i class='el-icon-paperclip'></i>毕业时间：{{this.employGraduationTime}}</div>
          <div class='text item'><i class='el-icon-paperclip'></i>公司：{{this.company}}</div>
        </div>
      </el-card>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
      name: 'editor',
      data: function() {
        return {
          content: '',
          editorOption: {
            placeholder: 'Hello World'
          },
          //用户的数据信息
          employAddress:JSON.parse(localStorage.getItem("UserInfo")).employAddress,
          employAge:JSON.parse(localStorage.getItem("UserInfo")).employAge,
          employBackground:JSON.parse(localStorage.getItem("UserInfo")).employBackground,
          employEmail:JSON.parse(localStorage.getItem("UserInfo")).employEmail,
          employIsMarried:JSON.parse(localStorage.getItem("UserInfo")).employIsMarried,
          employMajor:JSON.parse(localStorage.getItem("UserInfo")).employMajor,
          employName:JSON.parse(localStorage.getItem("UserInfo")).employName,
          employSchool:JSON.parse(localStorage.getItem("UserInfo")).employSchool,
          employSex:JSON.parse(localStorage.getItem("UserInfo")).employSex,
          employTel:JSON.parse(localStorage.getItem("UserInfo")).employTel,
          account:JSON.parse(localStorage.getItem("UserInfo")).employAccount,
          flag:"",
          employAccount:JSON.parse(localStorage.getItem("UserInfo")).employAccount,
          company:JSON.parse(localStorage.getItem("UserInfo")).company,
          employGraduationTime:JSON.parse(localStorage.getItem("UserInfo")).employGraduationTime,
          employId:JSON.parse(localStorage.getItem("UserInfo")).employId,
          employIntegration:JSON.parse(localStorage.getItem("UserInfo")).employIntegration,
          employPassword:JSON.parse(localStorage.getItem("UserInfo")).employPassword,
          //招聘者的数据
          recruiterId:JSON.parse(localStorage.getItem("UserInfo")).recruiterId,
          recruiterName:JSON.parse(localStorage.getItem("UserInfo")).recruiterName,
          // company:JSON.parse(localStorage.getItem("UserInfo")).company,
          recruiterAccount:JSON.parse(localStorage.getItem("UserInfo")).recruiterAccount,
          recruiterPassword:JSON.parse(localStorage.getItem("UserInfo")).recruiterPassword,
          recruiterAge:JSON.parse(localStorage.getItem("UserInfo")).recruiterAge,
          recruiterSex:JSON.parse(localStorage.getItem("UserInfo")).recruiterSex,
          recruiterEmail:JSON.parse(localStorage.getItem("UserInfo")).recruiterEmail,
          recruiterTel:JSON.parse(localStorage.getItem("UserInfo")).recruiterTel,
          recruiterIntegration:JSON.parse(localStorage.getItem("UserInfo")).recruiterIntegration,
        }
      },
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
      components: {
          quillEditor
      },
      methods: {
        onEditorChange({ editor, html, text }) {
            this.content = html;
        },
        submit() {
          console.log(this.content);
          this.$message.success('提交成功！');
        },
        searchInfo(){
          console.log("searchInfo");
          console.log(this.flag);
          //应聘者
          if(this.flag=="employ"){
            console.log("employTEL"+this.account);

            this.$axios.post(this.$store.state.URL+"searchEmployByTel/"+ this.account).then((res)=>{
              console.log("应聘者+------");
              console.log(res.data.data);
              //将数据存在浏览器中
              localStorage.setItem("UserInfo", JSON.stringify(res.data.data))

              this.accountLocal=JSON.parse(localStorage.getItem("UserInfo")).employName

              this.employId=res.data.data.employId,
                  this.employName=res.data.data.employName,
                  this.employAccount=res.data.data.employAccount,
                  this.employPassword=res.data.data.employPassword,
                  this.employSex=res.data.data.employSex,
                  this.employIsMarried=res.data.data.employIsMarried,
                  this.employAge=res.data.data.employAge,
                  this.employEmail=res.data.data.employEmail,
                  this.employTel=res.data.data.employTel,
                  this.employBackground=res.data.data.employBackground
              this.employMajor=res.data.data.employMajor,
                  this.employSchool=res.data.data.employSchool,
                  this.employAddress=res.data.data.employAddress
              this.employIntegration=res.data.data.employIntegration
              this.employGraduationTime=res.data.data.employGraduationTime
            },(err)=>{
              console.log(err);
            })
          }
          //招聘者
          else if(this.flag=="boss"){

            this.$axios.post(this.$store.state.URL+"searchRecruiterByTel/"+ this.account).then((res)=>{
              console.log("招聘者+------");
              console.log(res.data.data);
              //将数据存在浏览器中
              localStorage.setItem("UserInfo", JSON.stringify(res.data.data))
              this.recruiterId=res.data.data.recruiterId,
                  this.recruiterName=res.data.data.recruiterName,
                  this.companys=res.data.data.company,
                  this.recruiterAccount=res.data.data.recruiterAccount,
                  this. recruiterPassword=res.data.data.recruiterPassword,
                  this.recruiterAge=res.data.data.recruiterAge,
                  this. recruiterSex=res.data.data.recruiterSex,
                  this.recruiterEmail=res.data.data.recruiterEmail,
                  this.recruiterTel=res.data.data.recruiterTel,
                  this.recruiterIntegration=res.data.data.recruiterIntegration

            },(err)=>{
              console.log(err);
            })
          }
        }
      }
    }
</script>
<style scoped>

.job-content{
  position:fixed;
  top:60px;
  bottom:48px;
  left:0;
  font-size:0;
  width:100%;
  overflow:auto;
}
    .editor-btn{
        margin-top: 20px;
    }
    .container{
      position:fixed;
      top:60px;
      bottom:48px;
      left:0;
      font-size:20px;
      width:100%;
    }
    .text {
      font-size: 14px;
    }

    .item {
      padding: 18px 0;
    }

    .box-card {
      width: 100%;
      position: relative;
      margin: auto;
    }
</style>
