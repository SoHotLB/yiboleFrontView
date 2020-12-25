<template>
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
                    <el-link style='font-weight: 300 ;color: #5bb6aa;font-size: 17px'>新增附件简历</el-link>&nbsp;
                </div>
                <div class="jianli">
                    <i style='color: #5bb6aa' class="el-icon-document-copy"></i>
                    <el-link style='font-weight: 300 ;color: #5bb6aa;font-size: 17px'>完善在线简历</el-link>
                </div>

            </div>
            <div class='link-to'>
                <el-link @click='gotoBjMessage' class='el-link1' style='color: #FFFFFF;margin-left: 50px;width: 100px' :underline="false">公司简介</el-link>
                <el-link class='el-link1' style='color: #3cac9b;border-bottom: 4px solid #3cac9b;width: 150px' :underline="false">招聘职位</el-link>
            </div>

        </div>
        <template class='list-position' >
            <el-col :span="24" style='margin-top: 200px;
            border: 5px solid #333333'>
                <el-row :gutter="20">
                    <el-col :span="18"  v-for="item in allPosition" v-if='item.company=="北京大学第一医院"' >
                        <div class="grid-company-content bg-purple" style='padding: 10px'>

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
        </template>



    </div>
</template>

<script>
export default {
    name: 'beijingHospitalPosition',
    data() {
        return{
            allPosition: [],
            url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2227126611,2600594640&fm=26&gp=0.jpg'

        }
    },
    mounted() {
        console.log("******------"+ this.$route.params.name);
        this.getPosition();
        // this.searchCompanyByRouteParams()
    },
    methods: {
        getPosition() {
            var that = this
            this.$axios.post('http://115.29.204.107:8084/yibole/getAllPositions')
                .then(function(response) {
                    console.log(response.data.data)
                    that.tableData = response.data.data
                    that.allPosition = response.data.data
                    console.log("++++++"+that.allPosition);
                    // that.cinput.value = ''
                }).catch(function(error) {
                // that.$message.error(error.message);
            });
        },
        gotoBjMessage() {
            // let name = this.title.value
            this.$router.push({name:'beijingFirstHospital',params: { name: "北京大学第一医院" }})
        },
    },
};
</script>

<style scoped>
.list-position{
    position: absolute;
    /*border: 10px solid red;*/
    top:200px;
}
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
</style>