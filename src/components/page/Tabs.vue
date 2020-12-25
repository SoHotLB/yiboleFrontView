<template>
    <div class='job-content'>
<!--        <el-breadcrumb separator="/" style="padding-left:10px;padding-bottom:10px;font-size:12px">-->
<!--            <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>-->
<!--            <el-breadcrumb-item :to="{ path: '/system' }">系统管理</el-breadcrumb-item>-->
<!--            <el-breadcrumb-item>职位管理</el-breadcrumb-item>-->
<!--        </el-breadcrumb>-->
        <!--搜索框-->
        <el-card class="box-card" style="padding-bottom: 10px;">
            <el-row style="padding: 20px;margin: auto;width: 80%">
                <el-col :span="10">
                 <el-input placeholder="请输入职位名称搜索" clearable v-model="pname" class="handle-input mr10"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-button style='color: white;background-color: #3cac9b;border-radius: 8px' icon="el-icon-search" @click="searchJob()">搜索</el-button>
                </el-col>
            </el-row>
        </el-card>

            <div class="" id="box">
                <el-card class="box-card" v-for="v in tableData"><!--v-for="v in tableData"-->
                    <div slot="header" class="clearfix" style='padding-bottom: 15px;font-size:20px;color:lightskyblue'>
                      <span>{{v.recruitmentPositionName}}</span>
                    </div>
                    <div style='padding-bottom: 20px'>
                        <span style='padding:6px;font-size: 18px;color: #cf9236'>{{'['+v.salaryLimit+'-'+v.salaryCeiling+'k薪]'}}</span>
                        <span style='padding: 6px;font-size: 18px;padding-top: 10px'>{{v.location}}</span>
                        <span style='padding-right: 20px'>
                          <el-button style="float: right; padding: 3px 0" type="text">
                          <el-link style='font-size: 18px;color: lightskyblue' :underline='null' @click='gotoItCompany(v.company)'>{{v.company}}</el-link>
                        </el-button>
                        </span>
                    </div>
<!--                    <div>-->
<!--                         <span style='padding: 6px;font-size: 18px'>{{v.departmentName}}</span>-->
<!--                    </div>-->
                     <div style='padding-bottom: 20px'>
                         <span style='font-size: 18px;padding-top:10px'>{{v.jobRequirements}}</span>
                     </div>
                     <div style='padding:10px'>
                       <el-popover
                           placement="right-start"
                           width="400"
                           trigger="hover">
                         <span style='padding:6px;font-size: 20px;color: #324157;text-align: center'>{{v.recruitmentPositionName}}</span>
                         <el-divider>职位信息</el-divider>
                         <span style='padding:6px;font-size: 18px;color: #cf9236'><p>{{'['+v.salaryLimit+'-'+v.salaryCeiling+'k薪]'}}</p></span>
                         <span><p>职位要求：{{v.jobRequirements}}</p></span>
                         <span><p>地址：{{v.location}}</p></span>
                         <el-divider>公司</el-divider>
                         <span><p>公司名称：{{v.company}}</p></span>
                         <span><p>法人代表：{{v.recruiterName}}</p></span>
                         <span><p>公司介绍：{{v.companyIntroduction}}</p></span>
                         <el-button slot="reference" >查看职位详情</el-button>
                       </el-popover>
                     </div>
                </el-card>
            </div>
            <!-- 分页 -->
            <el-pagination style="padding-top: 15px" @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                           :total="400">
            </el-pagination>

    </div>
</template>

<script>
export default {
    name: 'Position',
    mounted() {
        this.getData()

        // console.log("======================");
        // console.log(this.$route.params.value1);
        // console.log(this.$route.params.value2.length);
        //
        // console.log("======================");
        // console.log(this.$route.params.value1=="undefined");
        // console.log(this.$route.params.value2.length==0);
        // if((this.$route.params.value1!='undefined' && this.$route.params.value2.length>0)) {//两者都无值   success
        //     console.log("else这一步" + "3");
        //     console.log(this.$route.params.value1 != "undefined");
        //     console.log(this.$route.params.value2.length > 0);
        //     this.pname = this.$route.params.value1 + this.$route.params.value2
        //     console.log("-------****" + this.pname);
        //     this.searchJob()
        //
        //     }else if(!(this.$route.params.value1=='undefined' && this.$route.params.value2.length > 0)) {//1无  2有
        //         console.log("else这一步" + "1");
        //         console.log(this.$route.params.value1 != "undefined");
        //         console.log(this.$route.params.value2.length > 0);
        //         this.pname = this.$route.params.value2
        //         console.log("-------****" + this.pname);
        //         this.searchJob()
        //     }else if((this.$route.params.value1 != 'undefined' && this.$route.params.value2.length == 0)) {//1有  2无
        //         console.log("else这一步" + "2");
        //         console.log(this.$route.params.value1 != "undefined");
        //         console.log(this.$route.params.value2.length > 0);
        //         this.pname = this.$route.params.value1
        //         console.log("-------****" + this.pname);
        //         this.searchJob()
        //     }
        //     // else if((this.$route.params.value1 != 'undefined' && this.$route.params.value2.length > 0)) {//两者都有值    success
        //     //     console.log("else这一步" + "3");
        //     //     console.log(this.$route.params.value1 != "undefined");
        //     //     console.log(this.$route.params.value2.length > 0);
        //     //     this.pname = this.$route.params.value1 + this.$route.params.value2
        //     //     console.log("-------****" + this.pname);
        //     //     this.searchJob()
        //     // }
        //
        // else {
        //     console.log("if这一步");
        //     this.getData()
        // }

    },
    data () {
      return {
        pname: '',
        tableData: [],
        // positionId:'',
        // positionName:'',
        // jobRequirements:'',
        // location:'',
        // departmentName:'',
        // company:''
        value1: true,
        currentPage4: 4, // 分页
      }
    },
    created() {
        // this.pname = this.$route.params.value1 + this.$route.params.value2
        if((this.$route.params.value1!='undefined' && this.$route.params.value2.length>0)) {//两者都无值   success
            console.log("else这一步" + "3");
            console.log(this.$route.params.value1 != "undefined");
            console.log(this.$route.params.value2.length > 0);
            this.pname = this.$route.params.value1 + this.$route.params.value2
            console.log("-------****" + this.pname);
            this.searchJob()

        }else if(!(this.$route.params.value1=='undefined' && this.$route.params.value2.length > 0)) {//1无  2有
            console.log("else这一步" + "1");
            console.log(this.$route.params.value1 != "undefined");
            console.log(this.$route.params.value2.length > 0);
            this.pname = this.$route.params.value2
            console.log("-------****" + this.pname);
            this.searchJob()
        }else if((this.$route.params.value1 != 'undefined' && this.$route.params.value2.length == 0)) {//1有  2无
            console.log("else这一步" + "2");
            console.log(this.$route.params.value1 != "undefined");
            console.log(this.$route.params.value2.length > 0);
            this.pname = this.$route.params.value1
            console.log("-------****" + this.pname);
            this.searchJob()
        }
            // else if((this.$route.params.value1 != 'undefined' && this.$route.params.value2.length > 0)) {//两者都有值    success
            //     console.log("else这一步" + "3");
            //     console.log(this.$route.params.value1 != "undefined");
            //     console.log(this.$route.params.value2.length > 0);
            //     this.pname = this.$route.params.value1 + this.$route.params.value2
            //     console.log("-------****" + this.pname);
            //     this.searchJob()
        // }

        else {
            console.log("if这一步");
            this.getData()
        }
    },
    methods: {
        gotoItCompany(com) {
            if(com=="北京大学第一医院"){
                this.$router.push({name: 'beijingFirstHospital',params:{com: com}})

            }else if(com=="湘雅医院"){
                this.$router.push({name: 'xiangYaHospital',params:{com: com}})

            }
        },
        getData() {
            var that = this
            this.$axios.get('http://115.29.204.107:8084/yibole/getAllRecruitmentInformations')
                .then(function(response) {
                    that.tableData = response.data.data
                }).catch(function(error) {
            })
        },

        searchJob() {
        var that = this
        this.$axios.post('http://115.29.204.107:8084/yibole/searchCompanyByPositionName/' + this.pname)
            .then(function(response) {
                console.log("************searchJob*******************");
                console.log(response.data.data)
                console.log("********************************");
                that.tableData = response.data.data
        }).catch(function(error) {
          that.$message.error(error.message);
        })
      },
      // selecetForm() {
      //   console.log(this.formInline)
      //   this.formInline = {}
      // },
      resetForm(formInline) {
        console.log(this.formInline)
        if (this.$refs[formInline] !== undefined) {
          this.$refs[formInline].resetFields()
        }
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },

      // 添加职位
      // postJob() {
      // 	this.dialogFormVisible = true;
      // },
      // savePostJob() {
      // 	this.dialogFormVisible = false;
      // 	console.log(this.form);
      // 	this.form = {}
      // },
      // // 修改职位
      // upJob(index, row) {
      // 	this.dialogFormVisible2 = true;
      // 	this.handleEdit(index, row);
      // 	this.formInline = row;
      // },
      // updateJob() {
      //   this.dialogFormVisible2 = false
      //   console.log(this.formInline)
      //   this.formInline = {}
      // },
      // changeSwitch(row) {
      //   console.log(row)
      // }
    }
}
</script>

<style>
#box ul{
    display: flex;
    flex-wrap: wrap;
}
#box li{
    padding: 3px;
    width:100%;
    margin: auto;
    list-style: none;
    border: 1px solid #eee;
}
.job-content{
  position:fixed;
  top:60px;
  bottom:48px;
  left:0;
  font-size:0;
  width:100%;
  overflow:auto;
}
</style>
