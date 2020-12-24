<template>
    <div class="aboutus">
        <div class="title">
            <el-divider content-position="center">个人简历</el-divider>
            <p><el-tag>xxxx大学</el-tag><el-tag>本科</el-tag></p>
        </div>
        <el-card class="box-card" style="margin-bottom: 20px;">
            <div class="text item">
                <i class="el-icon-edit"></i>
                <span style="font-size: 20px;">基本信息</span>
                <el-divider></el-divider>
                <div class="grid-content bg-purple">
                    <div>
                    <span><el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar></span>
                    <span style='padding-left: 20px;font-size: 40px;padding-bottom: 10px'>{{"姓名"}}</span>
                    <el-col>
                        <span><label>名字</label><el-input style='width: 60%'></el-input></span>
                        <span><label>邮箱</label><el-input></el-input></span>
                    </el-col>
                  </div>
                  <div>
                    <span>于2005.07月毕业于某喵喵喵大学，本科学历。在校专业为xxxxxxx，主修课程为xxxx、xxxx、xx和xxxx等课程。在校期间主要技能为java和php语言,和实验室小伙伴一起完成过内部管理平台(成员在线时长记录、周计划制定和组长评价)、纳新面试系统等。</span>
                  </div>
                </div>
            </div>
<!--            <div class="text item">-->
<!--                <i class="el-icon-edit"></i>-->
<!--                <span style="font-size: 20px;">{{'name'}}</span>-->
<!--                <el-divider></el-divider>-->
<!--                <div class="grid-content bg-purple">-->
<!--                    于2005.07月毕业于<span class="large">某喵喵喵大学</span>，本科学历。在校专业为xxxxxxx，主修课程为xxxx、xxxx、xx和xxxx等课程。在校期间主要技能为java和php语言,和实验室小伙伴一起完成过内部管理平台(成员在线时长记录、周计划制定和组长评价)、纳新面试系统等。-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="text item">-->
<!--                <i class="el-icon-edit"></i>-->
<!--                <span style="font-size: 20px;">{{'name'}}</span>-->
<!--                <el-divider></el-divider>-->
<!--                <div class="grid-content bg-purple">-->
<!--                    于2005.07月毕业于<span class="large">某喵喵喵大学</span>，本科学历。在校专业为xxxxxxx，主修课程为xxxx、xxxx、xx和xxxx等课程。在校期间主要技能为java和php语言,和实验室小伙伴一起完成过内部管理平台(成员在线时长记录、周计划制定和组长评价)、纳新面试系统等。-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="text item">-->
<!--                <i class="el-icon-edit"></i>-->
<!--                <span style="font-size: 20px;">{{'name'}}</span>-->
<!--                <el-divider></el-divider>-->
<!--                <div class="grid-content bg-purple">-->
<!--                    于2005.07月毕业于<span class="large">某喵喵喵大学</span>，本科学历。在校专业为xxxxxxx，主修课程为xxxx、xxxx、xx和xxxx等课程。在校期间主要技能为java和php语言,和实验室小伙伴一起完成过内部管理平台(成员在线时长记录、周计划制定和组长评价)、纳新面试系统等。-->
<!--                </div>-->
<!--            </div>-->
            <div class='topMask square'></div><div class='topMask circular'></div>
        </el-card>
    </div>
</template>
<script>
export default {
    name: 'AboutUs',
    mounted() {
      this.getData()
    },
    data () {
      return{
        tableData:[],
      }
    },
    methods: {
      getData()
      {
        var that = this
        this.$axios.get('http://115.29.204.107:8084/yibole//searchResumeById/ac64c245-a11b-477f-adbf-e5c2a85a5655')
            .then(function(response) {
              that.tableData = response.data.data
            }).catch(function(error) {
        })
      }
    }
}


</script>
<style>
.aboutus .grid-content.line{
    border-right: 1px solid #ddd;
    height: 150px;
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
</style>
<style scoped>
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
}
.box-card{
    position: relative;
}
.item {
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
