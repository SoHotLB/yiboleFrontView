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
                <span class="price">在招职位：7</span>
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
                <el-link @click='gotoXyPosition' class='el-link1' style='color: #FFFFFF;width: 150px' :underline="false">招聘职位</el-link>
            </div>
        </div>
        <div style='height: 50px'>
            <p style="font-size: 20px;color: #1f2f3d;margin-right: 10px;margin-left: 10px;margin-top: 15px;float: left">
                <b>热门企业</b>
            </p>
            <router-link to='/xyPosition' style='color: darkgrey;margin-right: 10px;margin-left: 10px;padding-top: 15px;float: right'>查看所有招聘职位>></router-link>

        </div>
        <!--        <div>-->
        <!--            <div class="position-hot">-->
        <el-col :span="24" style=' '>

            <el-row :gutter="20">
                <el-col :span="8"  v-for="(item,index) in positions" v-if='index < 8 && item.company=="湘雅医院"'>
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
            </el-row><br>
            <b style='font-size: 20px;color: #1f2f3d;margin-right: 10px;margin-left: 10px;margin-top: 10px'>湘雅医院介绍</b>
            <div style='margin-top: 20px;background-color: white'>
                <p style='margin-top: 5px;padding-top: 10px;margin-left: 15px;margin-right: 30px'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    中南大学湘雅医院（Xiangya Hospital of Central South University）始建于1906年，坐落在人文荟萃的楚汉名城长沙，是国家卫生健康委员会直管的三级甲等综合医院，是教育部直属高校中南大学的附属医院，是我国重要的临床诊疗、医学教育与科技创新中心，以精湛的诊疗技术、卓越的科教实力、深厚的文化底蕴享誉海内外。
                </p>
                <p style='margin-top: 5px;padding-left: 15px;padding-right: 30px;padding-bottom: 10px'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    湘雅医院始终坚持公立医院公益性，率先构建“合作办院、协作指导、远程指导、专科联盟、航空医疗联盟、区域医联体”六位一体的医联体“湘雅模式”，率先在国内开办皮肤病互联网医院，优质医疗资源可及性不断提高，引领区域医疗水平提升的能力日益增强。
                </p>
            </div><br>
            <b style='font-size: 20px;color: #1f2f3d;margin-right: 10px;margin-left: 10px;margin-top: 10px'>{{this.com}}</b>

            <el-card class="box-card">

                <div style="color: #8c8b8b">
                    <img style="width: 20px;height: 20px" src="http://webapi.amap.com/theme/v1.3/markers/b/mark_bs.png">
                    <span style="font-size: larger">湖南省长沙市开福区湘雅路87号</span></div>
                <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:500px;" @click="getClickInfo" :scroll-wheel-zoom='true'>
                </baidu-map>
            </el-card>

        </el-col>

        <!--            </div>-->

        <!--        </div>-->
    </div>
</template>

<script>
export default {
    name: 'xiangYaHospital',
    data() {
        return {
            markerIcon:"http://webapi.amap.com/theme/v1.3/markers/b/mark_bs.png",
            center: {lng: 112.991041, lat: 28.217917},
            zoom: 20,
            com:this.$route.params.com+"地址",
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
            url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=558304197,1490888614&fm=26&gp=0.jpg'
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
        getClickInfo(e) {
            console.log(e.point.lng)
            console.log(e.point.lat)
            this.center.lng = e.point.lng
            this.center.lat = e.point.lat
            this.$message({
                message: '湘雅医院经度'+e.point.lng+"纬度："+e.point.lat,
                type: 'success'
            });
        },
        handler({ BMap, map }) {
            var point = new BMap.Point(112.991041, 28.217917)
            map.centerAndZoom(point, 18)
            var marker = new BMap.Marker(point) // 创建标注
            map.addOverlay(marker) // 将标注添加到地图中
            var circle = new BMap.Circle(point, 6, {
                strokeColor: 'Red',
                strokeWeight: 6,
                strokeOpacity: 1,
                Color: 'Red',
                fillColor: '#f03'
            })
            map.addOverlay(circle)
        },
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
        gotoXyPosition() {
            // let name = this.title.value
            this.$router.push({name:'xyPosition',params: {name: "湘雅医院"}})
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
    padding-right: 25px;
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
    position:relative;
    background-color: #424f5e;
    margin: 0;
    top:0px;
    bottom:48px;
    height:205px;
    /*width: 100%;*/
    /*left:0;*/
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
