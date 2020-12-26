<template>
    <div>
        <div class="job-content" ref="contentId">
            <div class="company-wrapper">
                <div class="company-body">
                    <div class="conpany-content">
                        <div class="choseBody">
                            <h5>公司类型</h5>
                            <div class="chose">
                                <span :class="getClass(option1.check)" @click="choseAll(option1)">{{option1.optionName}}</span>
                                <span v-for ='option in options.option1'
                                      @click=selectedOption(option)
                                      :class="getClass(option.check)">
                                    {{option.optionName}}
                                </span>
                            </div>
                        </div>
                        <div class="choseBody">
                            <h5>公司地点</h5>
                            <div class="chose">
                                <span :class="getClass(option3.check)" @click="choseAll(option3)">{{option3.optionName}}</span>
                                <span v-for ='option in options.option3'
                                      @click=selectedOption(option)
                                      :class="getClass(option.check)">
                                    {{option.optionName}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search" style="background-color: white;padding-right: 10%;padding-left: 20%;padding-bottom: 10px">
                <el-input style='width: 70%' clearable
                          placeholder="请输入公司" size='small'
                          v-model="cinput"
                          class="input-with-select"/>
                <el-button class='button' icon="el-icon-search" @click='searchCompanyByName'>搜索</el-button>
            </div>
            <div>
                <ul class="job-items">
                    <li v-for="company in companies" class="job-item" @click="GoToCompany(company.company)">
                        <p class="title-wrapper" >
                            <span class="title">{{company.company}}</span>
                            <span class="price">{{company.companyLocation}}</span>
                        </p>
                        <div class="clear"></div>
                        <div class="content-wrapper">
                            <p class="content-middle">
                                招聘专员&nbsp;{{company.legalRepresentative}}&nbsp;&nbsp; {{company.companyType}}
                            </p>
                            <p class="content-detail">
                                <i class="icon-location2">
                                </i>
                                <span>
                                    成立时间&nbsp;&nbsp;{{company.setupTime | dateParse}}
                                </span>
                            </p>

                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import { fetchData } from '../../api/index';
import {jobData} from '../../components/common/jobData';
export default {
    name: 'basetable',
    data() {
        return {
            cinput: '',
            companies:[],
            option1:{
                optionName:"全部",
                check:true,
                type:0,
            },
            option2:{
                optionName:"全部",
                check:true,
                type:1,
            },
            option3:{
                optionName:"全部",
                check:true,
                type:2,
            },
            options:jobData,
            activeNames: ['1'],
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1
        };
    },
    created() {
        this.getData();
    },
    computed:{
        getChose(){
            let p1L = this.options.option1.filter((item)=>{
                return item.check === true;
            }).length;
            let p2L = this.options.option2.filter((item)=>{
                return item.check === true;
            }).length;
            let p3L = this.options.option3.filter((item)=>{
                return item.check === true;
            }).length;
            return p1L+p3L;
        }
    },
    mounted() {
        let val = this.$route.params.value
        this.getAllCompanies()
        if(val!=null){
            this.getRouterVal()
        }
    },
    methods: {
        geyCompany(o){
            var that = this
            if(o=="私立医院"){
                this.$axios.post('http://115.29.204.107:8084/yibole/getAllCompanies').then(function(response) {
                    console.log(response.data)
                    that.tableData = response.data.data
                    if(that.tableData.companyType=="私立医院"){
                        that.companies = that.tableData
                        console.log(that.companies)
                    }

                }).catch(function(error) {
                    that.$message.error(error.message);
                })
            }
            this.$axios.post('http://115.29.204.107:8084/yibole/getAllCompanies').then(function(response) {
                console.log(response.data)
                that.tableData = response.data.data
                that.companies = response.data.data
                console.log(that.positionList)
            }).catch(function(error) {
                that.$message.error(error.message);
            })
        },
        GoToCompany(com){
            var that = this
            if (com=="长沙好医院") {
                // window.open("../src/components/company/changshaGoodHospital.vue")
                // this.$refs.target.setAttribute('href',window.location.origin + '../components/company/changshaGoodHospital.vue')
                this.$router.push({name: 'goodHospital',params: {com: com}})
            }else if(com=="北京大学第一医院"){
                this.$router.push({name: 'beijingFirstHospital',params: {com: com}})
            }else if(com=="上海交通大学医学院附属瑞金医院"){
                this.$router.push({name: 'shanghaiRuijinHospital',params: {com: com}})
            }else if(com=="长沙皮肤医院"){
                this.$router.push({name: 'changshaSkinHospital',params: {com: com}})
            }else if(com=="湘雅医院"){
                this.$router.push({name: 'xiangYaHospital',params: {com: com}})
            }

        },
        getAllCompanies() {
            var that = this
            this.$axios.post('http://115.29.204.107:8084/yibole/getAllCompanies').then(function(response) {
                console.log(response.data)
                that.tableData = response.data.data
                that.companies = response.data.data
                console.log(that.positionList)
            }).catch(function(error) {
                that.$message.error(error.message);
            })
        },
        getRouterVal(){
            var that = this
            let val = this.$route.params.value
            this.$axios.post('http://115.29.204.107:8084/yibole/searchCompanyByName/' + val).then(function(response) {
                console.log(response.data.data)
                that.tableData = response.data.data
                that.companies = response.data.data
                that.cinput.value = ''
            }).catch(function(error) {
                // that.$message.error(error.message);
            })
        },
        searchCompanyByName() {
            var that = this
            // let select = get
            // let val = this.cinput
            if(this.cinput.length==0){
                this.getAllCompanies()
            }else{
                this.$axios.post('http://115.29.204.107:8084/yibole/searchCompanyByName/' + this.cinput.replace(/\s*/g,'')).then(function(response) {
                    console.log(response.data.data)
                    that.tableData = response.data.data
                    that.companies = response.data.data
                    that.cinput.value = ''
                }).catch(function(error) {
                    // that.$message.error(error.message);
                })
            }
        },
        resetChose(){
            this.option1.check = true;
            this.option2.check = true;
            this.option3.check = true;
            this.options.option1.forEach((item)=>{
                item.check = false;
            })
            this.options.option2.forEach((item)=>{
                item.check = false;
            })
            this.options.option3.forEach((item)=>{
                item.check = false;
            })
        },
        getClass(check){
            if(check){
                return 'checkClass';
            }
        },
        choseAll(option){
            option.check = true;
            if(option.type===0){
                this.options.option1.forEach((item)=>{
                    item.check = false;
                })
            }else if(option.type ===1){
                this.options.option2.forEach((item)=>{
                    item.check = false;
                })
            }else if(option.type ===2){
                this.options.option3.forEach((item)=>{
                    item.check = false;
                })
            }
        },
        selectedOption(option){
            option.check = !option.check;
            if(option.check){
                if(option.type ===0){
                    this.option1.check = false;
                }else{
                    this.option3.check = false;
                }
            }
            if(option.optionName=="私立医院"){
                this.$axios.post('http://115.29.204.107:8084/yibole/getAllCompanies').then(function(response) {
                    console.log(response.data)
                    that.tableData = response.data.data
                    if(that.tableData.companyType=="私立医院"){
                        that.companies = that.tableData
                        console.log(that.companies)
                    }

                }).catch(function(error) {
                    that.$message.error(error.message);
                })
            }
        },

        // 获取 easy-mock 的模拟数据
        getData() {
            fetchData(this.query).then(res => {
                console.log(res);
                this.tableData = res.list;
                this.pageTotal = res.pageTotal || 50;
            });
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        saveEdit() {
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            this.$set(this.tableData, this.idx, this.form);
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>

<style scoped>
.company-wrapper{
    width: 100%;
    background-color:white;
    z-index:100;
}
.company-body{
    font-size:0;
    padding-top:15px;
    padding-bottom: 15px;
    padding-right: 40px;
    padding-left: 40px;
    max-height:300px;
    overflow:auto;
}
h5{
    font-size:14px;
    margin-bottom:10px;
    color:rgba(7,17,27,0.7);
}
.chose span{
    display:inline-block;
    margin:0 5px 5px 0;
    font-size:12px;
    line-height:20px;
    border:1px solid #eee;
    padding:3px 5px;
    border-radius:4px;
    color:rgba(7,17,27,0.8);
}
.bottom{
    line-height:36px;
    height:36px;
    /*border:1px solid #eee;*/
    font-size:16px;
    display:flex;
}
.bottom span{
    flex:1;
    text-align:center;
}
.reset{
    border-top:1px solid #eee;
}
.sure{
    background-color: #6ADBCF;
    color:#fff;
}
.sure:active{
    background-color: #5bb6aa;
}
.choseBody{
    margin-bottom:20px;
}
.choseBody:last-child{
    margin-bottom:0 ! important;
}
.checkClass{
    background-color:#6ADBCF;
    color:#fff ! important;
}
.reset:active{
    background-color: #b4b4b4;
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
.job-items{
    /*margin-top: 10px;*/
    padding:6px;
    background-color:#eee;
}
.job-item:hover .title{
    color: #3cac9b;
}
.job-item:hover{
    /*-webkit-transform: translateY(-3px);*/
    /*-ms-transform: translateY(-3px);*/
    /*transform: translateY(-3px);*/
    -webkit-box-shadow: 0 0 6px #999;
    box-shadow: 0 0 6px #999;
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
}
.job-item{
    background-color:white;
    padding: 10px;
    margin-bottom:6px;
}
.title{
    font-size:16px;
}
.price{
    color: #ffaa00;
    font-size:16px;
    float:right;
}
.content-middle{
    margin:10px 0;
    font-size:14px;
    color:rgba(7,17,27,0.7);
    /*font-weight: 700;*/
}

.content-detail{
    margin-bottom:10px;
}
.content-detail span{
    font-size:10px;
    margin-right:10px;
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
.content-footer{
    border-top:1px solid #eee;
    padding-top:10px;
}
.hr-img{
    width:24px;
    height:24px;
    border-radius:50%;
    margin-right:10px;
    vertical-align:middle;
}
.footer-text{
    vertical-align:middle;
    color:#6ADBCF;
    font-size:14px;
}
.clear{
    clear:both;
}
.chose-text{
    font-size:10px;
    margin-bottom:10px;
    color:rgba(7,17,27,0.6);
}
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.card-emloyee{
    width: 15%;
    height: 40px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
