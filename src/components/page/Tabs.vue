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
                 <el-input placeholder="请输入职位名称搜索" v-model="pname" class="handle-input mr10"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" icon="el-icon-search" @click="searchJob()">搜索</el-button>
                </el-col>
            </el-row>
        </el-card>
        <p></p>
        <!-- 职位卡片 -->
<!--        <el-card class="box-card" style="padding-bottom: 10px;">-->
<!--            <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline" style="margin: auto;width: 80%">-->
<!--                <el-form-item label="职位选择" label-width="70px">-->
<!--                    <el-select clearable v-model="formInline.post" placeholder="请选择职位">-->
<!--                        <el-option v-for="item in posts" :key="item.value" :label="item.label" :value="item.value">-->
<!--                        </el-option>-->
<!--                    </el-select>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="城市" label-width="70px">-->
<!--                    <el-select clearable v-model="formInline.city" placeholder="请选择职位所在城市">-->
<!--                        <el-option v-for="item in citys" :key="item.value" :label="item.label" :value="item.value">-->
<!--                        </el-option>-->
<!--                    </el-select>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="学历" label-width="70px">-->
<!--                    <el-select clearable v-model="formInline.education" placeholder="请选择职位学历要求">-->
<!--                        <el-option v-for="item in educations" :key="item.value" :label="item.label" :value="item.value">-->
<!--                        </el-option>-->
<!--                    </el-select>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="性别" label-width="70px">-->
<!--                    <el-radio-group v-model="formInline.radio" label-width="70px">-->
<!--                        <el-radio :label="1">男</el-radio>-->
<!--                        <el-radio :label="2">女</el-radio>-->
<!--                    </el-radio-group>-->
<!--                </el-form-item>-->
<!--                <el-form-item label-width="100px">-->
<!--                    <el-button type="primary" @click="selecetForm">搜索</el-button>-->
<!--                </el-form-item>-->
<!--            </el-form>-->
            <!-- 表格显示区域 -->
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
                          <router-link style='font-size: 18px;color: lightskyblue' to ="/jobinformation" >{{v.company}}</router-link>
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
<!--      -->
<!--        <el-dialog title="职位信息" :visible.sync="dialogFormVisible">-->
<!--            <el-form :model="form">-->
<!--                <el-form ref="form" :model="form" label-width="80px">-->
<!--                    <el-form-item label="职位名称">-->
<!--                        <el-input v-model="form.name"></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="职位地区">-->
<!--                        <el-select v-model="form.region" placeholder="请选择职位地区">-->
<!--                            <el-option label="重庆" value="重庆"></el-option>-->
<!--                            <el-option label="成都" value="成都"></el-option>-->
<!--                        </el-select>-->
<!--                    </el-form-item>-->
<!--                </el-form>-->
<!--            </el-form>-->
<!--            <div slot="footer" class="dialog-footer">-->
<!--                <el-button @click="dialogFormVisible = false">取 消</el-button>-->
<!--                <el-button type="primary" @click="savePostJob">添加职位信息</el-button>-->
<!--            </div>-->
<!--        </el-dialog>-->

        <!-- 修改职位信息的弹出框 -->
<!--        <el-dialog title="职位信息" :visible.sync="dialogFormVisible2">-->
<!--            <el-form :model="formInline">-->
<!--                <el-form ref="form" :model="formInline" label-width="80px">-->
<!--                    <el-form-item label="职位名称">-->
<!--                        <el-input v-model="formInline.post"></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="职位区域">-->
<!--                        <el-select v-model="formInline.city" placeholder="请选择职位地区">-->
<!--                            <el-option label="重庆" value="重庆"></el-option>-->
<!--                            <el-option label="成都" value="成都"></el-option>-->
<!--                        </el-select>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="学历要求">-->
<!--                        <el-select clearable v-model="formInline.education" placeholder="请选择职位学历要求">-->
<!--                            <el-option v-for="item in educations" :key="item.value" :label="item.label" :value="item.value">-->
<!--                            </el-option>-->
<!--                        </el-select>-->
<!--                    </el-form-item>-->
<!--                </el-form>-->
<!--            </el-form>-->
<!--            <div slot="footer" class="dialog-footer">-->
<!--                <el-button @click="dialogFormVisible2 = false">取 消</el-button>-->
<!--                <el-button type="primary" @click="updateJob">修改职位信息</el-button>-->
<!--            </div>-->
<!--        </el-dialog>-->
    </div>
</template>

<script>
export default {
    name: 'Position',
    mounted() {
       this.getData()
        this.getRouterData()
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
    //         formInline: {
    //             positionId: '',
    //             post: '', // 职位
    //             city: '', // 城市
    //             education: '', // 学历
    //             radio: 2 // 性别
    //
    //         },
    //         posts: [{
    //             value: 'post1',
    //             label: '开发'
    //         }, {
    //             value: 'post2',
    //             label: '测试'
    //         }],
    //         citys: [{
    //             value: 'city1',
    //             label: '重庆'
    //         }, {
    //             value: 'city2',
    //             label: '成都'
    //         }],
    //         educations: [{
    //             value: '大专',
    //             label: '大专'
    //         }, {
    //             value: '本科',
    //             label: '本科'
    //         }, {
    //             value: '研究生',
    //             label: '研究生'
    //         }],
    //         // 添加职位信息的弹出框
    //         dialogFormVisible: false,
    //         // 修改职位信息的弹出框
    //         dialogFormVisible2: false,
    //         form: {
    //             name: '',
    //             region: '',
    //             delivery: false,
    //             type: [],
    //             resource: '',
    //             desc: ''
    //         }
    //     }
    // },
    methods: {
        getData() {
            var that = this
            this.$axios.get('http://115.29.204.107:8084/yibole/getAllRecruitmentInformations')
                .then(function(response) {
                    that.tableData = response.data.data
                }).catch(function(error) {
            })
        },
        getRouterData() {
            var that = this
            let value = this.$route.params.val3
            var res = 0
            if (value.length!=0){//传参不为0则搜索
                this.pname = value
                let val = value.replace(/\s*/g,'')
                this.$axios.post('http://115.29.204.107:8084/yibole/searchPositionByName/' + val).then(function(response) {
                    console.log(response.data.data)
                    let dat = response.data.data
                    if(dat!=null){
                        that.tableData = dat
                    }else{
                        this.$router.push({name:'table',params:{value:value}})
                    }
                }).catch(function(error) {
                    that.$message.error(error.message);
                })
            }
        },

        searchJob() {
        var that = this
        this.$axios.post('http://115.29.204.107:8084/yibole/searchCompanyByPositionName/' + this.pname).then(function(response) {
          console.log(response.data)
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
