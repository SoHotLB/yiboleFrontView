<template>
    <div>
<!--        搜索-->
        <div class="search" style="margin-right: 10%;margin-top: 15px;margin-left: 15%">
            <el-cascader
                clearable
                class='card-emloyee'
                v-model="value"
                :options="options"
                placeholder='职位类型'
                :props="{ expandTrigger: 'hover' }">
            </el-cascader>
            <el-input style='width: 70%' clearable
                      placeholder="请输入职位、公司" size='small'
                      v-model="searchInput"
                      class="input-with-select"/>
            <el-button class='button' icon="el-icon-search" @click='handleSearch'>搜索</el-button>

        </div>
        <div class='link'>
            <label style='font-size: 12px'>热门职位:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <el-link class='green' :underline="false">临床研究</el-link>&nbsp;
            <el-link class='green' :underline="false">临床协调</el-link>&nbsp;
            <el-link class='green' :underline="false">医学总监</el-link>&nbsp;
            <el-link class='green' :underline="false">医生</el-link>&nbsp;
            <el-link class='green' :underline="false">内科医生</el-link>&nbsp;
            <el-link class='green' :underline="false">中医</el-link>&nbsp;
            <el-link class='green' :underline="false">医学影像放射</el-link>&nbsp;
        </div>
<!--        轮播-->
        <div class="block" style="margin-top: 20px;margin-left:10px;margin-right:10px;">
            <el-carousel :interval="5000" trigger="click" type='card' :height="bannerHeight+'px'">
                <el-carousel-item v-for="item in carouselList" :key="item.key">
                    <img :src='item.src' class='image' alt="" @load="imgLoad" style='width: 100%' ref="bannerHeight">
                </el-carousel-item>
            </el-carousel>

        </div>
        <el-row :gutter="20" style='margin-top: 20px'>
            <el-col :span="8">
                <div class='middle-left' style='margin-left: 20px;margin-top: 20px;'>
                    <el-card>
                        <dl>
                            <dd>
                                <i class="icon-arrow-right"></i>
                                <b style='font-size: 14px'>热门职位</b>&nbsp;
                                <el-link :underline="false" href="/c101250100-p210104/">药剂师</el-link>&nbsp;
                                <el-link :underline="false" href="/c101250100-p210401/">营养师</el-link>&nbsp;
                                <el-link :underline="false" href="/c101250100-p210105/">医疗器械研发</el-link>
                            </dd>
                            <hr class="style1_hr"/>
                            <div class="menu-line"></div>
                            <div class="menu-sub">
                                <ul>
                                    <li>
                                        <b style='font-size: 14px'>门诊部</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210120/">内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210501/">外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210119/">儿科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p211001/">妇科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">眼科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">耳鼻喉科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">口腔科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">皮肤科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">中医科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">针灸推拿科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">心理咨询室</el-link>
                                        </div>
                                    </li>
                                    <hr class="style1_hr"/>
                                    <li>
                                        <b style='font-size: 14px'>住院部</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210109/">呼吸内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210111/">消化内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210303/">泌尿内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210307/">心内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210103/">血液科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210306/">内分泌科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210302/">神经内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210305/">小儿科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210304/">感染科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210114/">普外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210113/">骨科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210104/">神经外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210112/">肝胆外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">泌尿外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">烧伤科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">妇科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">产科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">血透室</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">重症监护室</el-link>
                                        </div>
                                    </li>

                                    <hr class="style2_hr"/>
                                    <li>
                                        <b style='font-size: 14px'>急诊部</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210202/">内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210201/">外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210503/">妇产科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">儿科</el-link>
                                        </div>
                                    </li>
                                    <hr class="style2_hr" />
                                    <li>
                                        <b style='font-size: 14px'>药房</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210404/">门诊药房</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210402/">急诊药房</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210403/">住院药房</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210499/">药房仓库</el-link>&nbsp;
                                        </div>
                                    </li>
                                    <hr class="style2_hr"/>
                                    <li>
                                        <b style='font-size: 14px'>收费室</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210108/">门诊收费窗口</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210117/">住院收费窗口</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210123/">急诊收费窗口</el-link>&nbsp;
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </dl>
                    </el-card>
                </div>
            </el-col>

            <el-col :span="16">
                <p style="font-size: 24px;font-weight: 500;color: #1f2f3d;margin-right: 10px;margin-left:45%;margin-top: 20px">
                    热招职位
                </p>
                <div>
                    <el-row :gutter="20">
                        <el-col :span="8" v-for="item in positionList">
                            <div class="grid-content bg-purple" style='margin-top: 10px'>

                                  <el-card shadow="hover"
                                           style='border-radius: 8px'
                                           :recruitmentPositionName='item.recruitmentPositionName'
                                           :jobRequirements='item.jobRequirements'
                                           :salaryCeiling='item.salaryCeiling'
                                           :salaryLimit='item.salaryLimit'
                                           :location='item.location'
                                           :company='item.company'
                                           :body-style="{padding: '0px'}">

                                      <div class="grid-cont-right clearfix" slot="header">
                                          <div style='display: inline'>
                                              <div class="grid-name">{{item.recruitmentPositionName}}</div>
                                              <div style='float: right;font-size: 22px;display: flex;color: orange'>
                                                  <div class='right_one'>{{item.salaryLimit}}</div>
                                                  -
                                                  <div class='right_one'>{{item.salaryCeiling}}</div>K
                                              </div>
                                          </div>
                                          <div style='margin-top: 5px;font-size:14px;float: left;color: #8c939d'>{{item.jobRequirements}}</div>

                                      </div>
                                      <div class='bottom clearfix' style='height: 40px; display: flex'>
                                          <div style='padding-left: 10px'>{{item.company}}</div>
                                          <div style='margin-left:90px;padding-right: 10px'>{{item.location}}</div>
                                      </div>
                                  </el-card>
                            </div>
                        </el-col>

                    </el-row>

                </div>

            </el-col>

        </el-row>
        <el-col :span="24">
            <p style="font-size: 24px;font-weight: 500;color: #1f2f3d; padding-left: 45%;margin-right: 10px;margin-left: 10px;margin-top: 0px;margin-bottom: 20px">
                热门企业
            </p>
            <div>
                <el-row :gutter="20">
                    <el-col :span="6"  v-for="(item,index) in companylist" v-if='index < 8'>
                        <div class="grid-company-content bg-purple" style='margin-top: 10px;'>

                            <el-card shadow="hover"
                                     class='card-company'
                                     :positionName='item.company'
                                     :jobRequirements='item.jobRequirements'
                                     :salaryCeiling='item.legalRepresentative'
                                     :salaryLimit='item.companyType'
                                     :location='item.companyLocation'
                                     :company='item.setupTime'
                                     :body-style="{padding: '0px'}">

                                <div class="grid-company-name">{{item.company}}</div>
                                <div class='owner'>{{item.legalRepresentative}}</div><br/>
                                <div class='middle' style='height: 40%;color: #8c939d'>
                                    <div>{{item.companyType}}</div><el-divider direction="vertical"></el-divider>
                                    <div>{{item.companyLocation}}</div>
                                </div>
                                <div class='time'>成立于<p style='color: #f5ce7f;text-align: center;'>{{getYMD(item.setupTime)}}</p></div>
                            </el-card>
                        </div>
                    </el-col>

                </el-row>

            </div>

        </el-col>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
export default {
    name: 'dashboard',
    data() {
        return {
            searchInput:'',
            input3: '',
            positionList:[],
            companylist:[],
            bannerHeight:"",
            carouselList:[{
                key: 'img1',
                src:require("../../assets/img/1.jpg")
            },{
                key: 'img2',
                src:require("../../assets/img/2.jpg")
            },{
                key: 'img3',
                src:require("../../assets/img/3.jpg")
            },{
                key: 'img4',
                src:require("../../assets/img/4.jpg")
            }],
            value: [],
            options: [{
                value: '内科',
                label: '内科',
                children: [{
                    value: '内科',
                    label: '内科医生'
                }, {
                    value: '呼吸',
                    label: '呼吸科医生'
                },{
                    value: '内',
                    label: '内分泌科医生'
                },{
                    value: 'lcxmjl',
                    label: '临床项目经理'
                },{
                    value: 'yixuezongjie',
                    label: '医学总结'
                }]
            }, {
                value: '门诊部',
                label: '门诊部',
                children: [{
                    value: 'yisheng',
                    label: '医生'
                }, {
                    value: 'yishnegzhuli',
                    label: '医生助理'
                }, {
                    value: '内科',
                    label: '内科医生'
                }, {
                    value: '全科',
                    label: '全科医生'
                }, {
                    value: 'B超',
                    label: 'B超医生'
                }, {
                    value: '中医',
                    label: '中医'
                },{
                    value: '心理',
                    label: '心理医生'
                },{
                    value: '口腔科',
                    label: '口腔医生'
                },{
                    value: '牙科',
                    label: '牙科医生'
                },{
                    value: 'kangfuzhiliaoshi',
                    label: '康复治疗师'
                },{
                    value: '骨科',
                    label: '骨科医生'
                },{
                    value: 'jianyankeyishi',
                    label: '检验科医师'
                },{
                    value: 'qita',
                    label: '其他医生职位'
                }]
            }]
        }
    },
    methods: {
        imgLoad(){
            this.$nextTick(()=>{
                this.bannerHeight=this.$refs.bannerHeight[0].height;
                console.log(this.$refs.bannerHeight[0].height);
            })
        },
        searchJob() {
            var that = this

            this.$axios.post('http://115.29.204.107:8084/yibole/searchTopPosition').then(function(response) {
                console.log(response.data.data)
                that.tableData = response.data.data
                that.positionList = response.data.data
                console.log(that.positionList)
            }).catch(function(error) {
                that.$message.error(error.message);
            })
        },
        searchCompany() {
            var that = this
            this.$axios.post('http://115.29.204.107:8084/yibole/getAllCompanies').then(function(response) {
                console.log(response.data.data)
                that.tableData = response.data.data
                that.companylist = response.data.data
                console.log(that.positionList)
            }).catch(function(error) {
                that.$message.error(error.message);
            })
        },
        //根据职位或者医院来实现模糊查询
        handleSearch() {
            console.log("---------------");
            console.log(this.value[1]);
            console.log(this.value.length);
            console.log(this.searchInput);
            console.log("---------------");
            var that = this
            this.$router.push({name:'tabs',params:{value1:this.value[1],value2:this.searchInput}})
        },
        getYMD (timestamp) {
            let time = new Date(timestamp)
            let year = time.getFullYear()
            let month = time.getMonth() + 1
            let date = time.getDate()

            if (month < 10) { month = '0' + month }
            if (date < 10) { date = '0' + date }
            return year + '-' + month + '-' + date + ' '
        }
    },
    mounted() {
        // this.$router.go(0)
        this.searchJob();
        this.imgLoad();
        this.searchCompany();
    }
};
</script>


<style scoped>
.card-company{
    border-radius: 8px;
    height: 100%;
}
.el-select .el-input {
    width: 130px;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 150px;
    width: 280px;
}
.grid-company-content{
    height: 200px;
}
.bottom{
    display: flex;
    align-items: center;
    height: 50%;
    width: 280px;
}

.grid-cont-right {
    height: 60%;
}

.grid-name {
    font-size: 17px;
    width: 50%;
    /*float: left;*/
}
.middle{
    font-size: 14px;
    padding-left: 30%;
    /*padding-right: 20%;*/
    display: flex;
}
.owner{
    text-align: center;
    margin-top: 20px;
}
.time{
    width: 100%;
    float: left;
    font-size: 14px;
    text-align: center;
    margin-top: 10px
}
.grid-company-name{
    padding-left:5px;
    padding-right: 5px;
    padding-top: 20px;
    font-size: 20px;
    text-align: center;
    font-weight: 700;
}
.grid-company-content:hover .grid-company-name{
    color: #3cac9b;
}
.grid-content:hover .grid-name{
    color: #3cac9b;
}

.style1_hr{
    margin-top: 15px;
    margin-bottom: 15px;
    border-top: 1px dashed #8c8b8b;
    border-bottom: 1px dashed #fff;
}
.style2_hr{
    margin-top: 15px;
    margin-bottom: 15px;
    border-top: 1px dashed #8c8b8b;
    border-bottom: 1px dashed #fff;
}

.button{
    border-radius: 6px;
    cursor: pointer;
    height: 33px;
    font-size: 14px;
    line-height: 12px;
    background: #3cac9b;
    color: #ffffff;
    -webkit-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    transition: all .3s ease-in;
}

.green{
    color: #3cac9b;
}

.link{
    margin-left: 30%;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.text>>>el-link{
    margin-top: 5px;
    /*margin-left: 5px;*/
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}
.hide_li{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-left: 10px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}
.search>>el-input{
    border: 0;
    margin: 0;
}


.schart {
    width: 100%;
    height: 300px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;

    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

ul,li{
    list-style: none;
}

.card-emloyee{
    width: 15%;
    height: 40px;
}

</style>
