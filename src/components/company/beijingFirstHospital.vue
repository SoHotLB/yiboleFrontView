<template>
    <div>
        <div>
            <div class="job-item">
                <div class='companyHeader'>
                    <div>
                        <el-image
                            style="width: 100px; height: 100px;
                        border-radius:20px;float: left;margin-left: 50px"
                            :src="url"
                            :fit="scale-down"></el-image>
                    </div>
                    <span class="title">北京大学第一医院</span>
                    <span class="price">在招职位：6</span>
                </div>
                <div style='display: inline'>

                    <div class="jianli">
                        <i style='color: #5bb6aa' class="el-icon-upload"></i>&nbsp;
                        <el-link style='font-weight: 300 ;color: #5bb6aa;font-size: 17px' :underline="false">新增附件简历</el-link>&nbsp;
                    </div>
                    <div class="jianli">
                        <i style='color: #5bb6aa' class="el-icon-document-copy"></i>
                        <el-link style='font-weight: 300 ;color: #5bb6aa;font-size: 17px' :underline="false">完善在线简历</el-link>
                    </div>

                </div>
                <div class='link-to'>
                    <el-link class='el-link1' style='color: #3cac9b;border-bottom: 4px solid #3cac9b;margin-left: 50px;width: 100px' :underline="false">公司简介</el-link>
                    <el-link @click='gotoBjPosition' class='el-link1' style='color: #FFFFFF;width: 150px' :underline="false">招聘职位</el-link>
                </div>
            </div>
        </div>
<!--        <div>-->
<!--            <div class="position-hot">-->
        <el-col :span="24" style='margin-top: 200px;'>
            <p style="font-size: 20px;color: #1f2f3d; padding-left: 50px;margin-right: 10px;margin-left: 10px;margin-top: 20px">
                <b>热门企业</b>
            </p>
            <el-row :gutter="20">
                <el-col :span="8"  v-for="(item,index) in positions" v-if='index < 4 && item.company=="北京大学第一医院"'>
                    <div class="grid-company-content bg-purple" style='margin-top: 10px'>

                        <el-card :positionName='item.positionName'
                                 :jobRequirements='item.jobRequirements'
                                 :location='item.location'
                                 :body-style="{padding: '10px'}">
                            <div class="grid-cont-right clearfix" slot="header" style='display: flex'>
                                <div class="grid-company-name">{{item.positionName}}</div><br>
                            </div>
                            <div class='bottom clearfix' style='height: 40%;'>
                                <div>{{item.jobRequirements}}</div>·&nbsp;
                                <div>{{item.location}}</div>
                            </div>
                        </el-card>
                    </div>
                </el-col>
            </el-row>
        </el-col>
<!--            </div>-->

<!--        </div>-->
    </div>

</template>

<script>
export default {
    name: 'beijingFirstHospital',
    data() {
        return {
            positions:[],
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'bjMessage',
                    title: '公司简介'
                },
                {
                    icon: 'el-icon-s-goods',
                    index: 'bjPosition',
                    title: '招聘职位'
                },

            ],
            companies: [],
            url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2227126611,2600594640&fm=26&gp=0.jpg'
        }
    },
    computed: {
        // onRoutes() {
        //     return this.$route.path.replace('/', '');
        // }
    },
    mounted() {
        this.getPosition();
        console.log("-----****" + this.$route.params.com);
        console.log("******"+ this.$route.params.name);
        // this.searchCompanyByRouteParams()
    },
    methods: {
        getPosition() {
          var that = this
            this.$axios.post('http://115.29.204.107:8084/yibole/getAllPositions')
                .then(function(response) {
                    console.log(response.data.data)
                    that.tableData = response.data.data
                    that.positions = response.data.data
                    console.log("++++++"+that.positions);
                    // that.cinput.value = ''
                }).catch(function(error) {
                // that.$message.error(error.message);
            });
        },
        gotoBjPosition() {
            // let name = this.title.value
            this.$router.push({name:'bjPosition',params: {name: "北京大学第一医院"}})
        },
        searchCompanyByRouteParams() {
            var that = this
            // let c = this.$route.params.com
            this.$axios.post('http://115.29.204.107:8084/yibole/searchCompanyByName/' + this.$route.params.com)
                .then(function(response) {
                    console.log(response.data.data)
                    that.tableData = response.data.data
                    that.companies = response.data.data
                    console.log(that.companies);

                    // that.cinput.value = ''
                }).catch(function(error) {
                // that.$message.error(error.message);
            });
        }
    }

};
</script>

<style scoped>
.grid-company-name{
    font-size: 17px;
}
.grid-company-content:hover .grid-company-name{
    color: #3cac9b;
}
.grid-company-content{
    /*margin-top: 500px;*/
    height: 100px;
}
.bottom{
    font-size: 14px;
    display: flex;
    align-items: center;
    height: 50%;
    width: 280px;
}
.el-link1{
    height: 52px;
    /*width: 150px;*/
    font-size: 20px
}

.link-to{
    height: 50px;
    /*width: 100%;*/
    /*border: 1px solid white;*/
    margin-top: 68px;
}
.el-menu-demo{
    height: 70px;
    color: #fff;
}
.title{
    margin-left: 20px;
    color: white;
    font-size:36px;
}
.companyHeader{
    margin-top: 15px;
    padding:6px;
}
.price{
    color: #ffffff;
    font-size:16px;
    float:right;
}
.jianli{
    margin-left: 10px;
    font-size:24px;
    float:right;
    /*padding-top: 70px;*/
    padding-right: 30px;
}
/*.clear{*/
/*    clear:both;*/
/*}*/
/*.content-middle{*/
/*    margin:10px 0;*/
/*    font-size:14px;*/
/*    color:rgba(7,17,27,0.7);*/
/*    !*font-weight: 700;*!*/
/*}*/

/*.content-detail{*/
/*    margin-bottom:10px;*/
/*}*/
.content-detail span{
    font-size:10px;
    margin-right:10px;
}
.job-item{
    position:fixed;
    background-color: #424f5e;
    top:60px;
    bottom:48px;
    height: 200px;
    left:0;
    font-size:0;
    width:100%;
    overflow:auto;
}

/*.company-body{*/
/*    font-size:0;*/
/*    background-color: #1f2f3d;*/
/*    padding-top:15px;*/
/*    padding-bottom: 15px;*/
/*    padding-right: 40px;*/
/*    padding-left: 40px;*/
/*    max-height:300px;*/
/*    overflow:auto;*/
/*}*/
/*.company-wrapper{*/
/*    width: 100%;*/
/*    background-color:white;*/
/*    z-index:100;*/
/*}*/
/*.choseBody{*/
/*    margin-bottom:20px;*/
/*}*/
/*.choseBody:last-child{*/
/*    margin-bottom:0 ! important;*/
/*}*/
</style>