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
                <span class="title">湘雅医院</span>
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
            <el-col :span="24" style='margin-top: 10px'>
                <el-row :gutter="20">
                    <el-col :span="24"  v-for="item in allPosition" v-if='item.company=="湘雅医院"' >
                        <div class="grid-company-content bg-purple" style=';'>

                            <el-card :positionName='item.positionName'
                                     :jobRequirements='item.jobRequirements'
                                     :location='item.location'
                                     :salaryCeiling='item.salaryCeiling'
                                     :salaryLimit='item.salaryLimit'
                                     :body-style="{padding: '15px'}">
                                <div class="grid-cont-right clearfix"  >
                                    <div class="grid-company-name" style='font-size: 20px;color: #3cac9b;margin-bottom: 5px'>{{item.positionName}} [长沙]</div>
                                    <div style='float: right;padding-right: 15px;'>刘波 | 招聘者</div>
                                    <img style='float: right;margin-right: 15px;border-radius: 30px;' src="https://img.bosszhipin.com/beijin/mcs/useravatar/20180228/e40f3b201b4348235b422e9d8459a7e6b4e81f15463d4d379c76f9dd3f73b71d_s.jpg?x-oss-process=image/resize,w_40,limit_0?x-oss-process=image/resize,w_40,limit_0">
                                    <div style='display: inline;color: orange'>{{item.salaryLimit}}-{{item.salaryCeiling}}K</div> &nbsp;<div style='display: inline'>{{item.jobRequirements}}</div>·<div style='display: inline'>{{item.location}}</div>
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
    name: 'xiangyaPosition',
    data() {
        return{
            url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=558304197,1490888614&fm=26&gp=0.jpg',
            allPosition: [],
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
            this.$router.push({name:'xiangYaHospital',params: { name: "湘雅医院" }})
        },
    },
};
</script>

<style scoped>
.list-position{
    /*position: absolute;*/
    /*border: 10px solid red;*/
    /*top:200px;*/
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
    padding-right: 25px;
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
    position:relative;
    background-color: #424f5e;
    top:0px;
    bottom:48px;
    height: 205px;
    left:0;
    font-size:0;
    width:100%;
    overflow:auto;
}
</style>