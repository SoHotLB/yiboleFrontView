<template>
    <div class="aboutus">
        <div class="title">
            <el-divider content-position="center">个人简历</el-divider>
            <p><el-tag>xxxx大学</el-tag><el-tag>本科</el-tag></p>
        </div>
        <el-card class="box-card" style="margin-bottom: 20px;">
            <div class="text item">
                <div class="grid-content bg-purple">
                    <div>
                    <span><el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar></span>
                    <span style='padding-left:30%;padding-bottom:50px;font-size: 40px;margin: auto' v-model='getData'>{{employName}}</span>
                      <p style='padding-left: 38%'>{{"邮箱"}}|{{"地址"}}|{{"学历"}}</p>
<!--                      <span>{{"邮箱"}}|{{"地址"}}</span>-->
                  </div>
                </div>
              <span>
              <el-divider content-position="left"><i class="el-icon-edit"></i>基本信息</el-divider>
              <div>
                <p><span>性别：{{"男"}}</span><span style='padding-left: 30%'>年龄：{{"employA"}}</span></p>
                <p><span>电话：{{"employTel"}}</span><span style='padding-left: 30%'>邮箱：{{"employEmail"}}</span></p>
                <p><span>政治面貌：{{"employTel"}}</span><span style='padding-left: 30%'>民族：{{"employNation"}}</span></p>
                <p><span>当前地址：{{"employTel"}}</span></p>
                <p></p>
              </div>
              </span>
              <p></p>
              <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>教育经历</el-divider>
                <div>
                    <p><span>毕业院校：{{"中南大学"}}</span><span style='padding-left: 30%'>学历：{{"博士"}}</span></p>
                    <p><span>专业：{{"临床医学"}}</span><span style='padding-left: 30%'>学历：{{"博士"}}</span></p>
                    <p></p>
                </div>
                </span>
              <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>实习经历</el-divider>
                <div>
                    <p><span>实习医院：{{"中南大学"}}</span></p>
                    <p><span>地址：{{"临床医学"}}</span></p>
                    <p><span>实习评价：{{"临床医学"}}</span></p>
                    <p></p>
                </div>
                </span>
              <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>获奖荣誉</el-divider>
                <div>
                    <p>"谷医堂杯"一等奖</p>
                    <p>"校级奖学金"一等奖</p>
                    <p>"校级三好学生"</p>
                </div>
                </span>
              <span>
                <el-divider content-position="left"><i class="el-icon-edit"></i>自我评价</el-divider>
                <div>
                  <p>本人性格开朗，为人细心，做事一丝不苟，能吃苦耐劳，工作脚踏实地，有较强的职责心，具有团队合作精神，又具有较强的独立工作潜力，思维活跃。能熟练运用WindowsOfficeWord、Excel、XXX等应用软件，能根据XXX的需求，完成面XXXX工作，具备良好的XXXX意识，极强的沟通潜力与谈判潜力;</p>
                  <p>学习优秀，具有自学能力;具备团队协作精神，有职责心、人品好、思想端正;具备必须的文件管理潜力。</p>
                </div>
                </span>
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
    width: 100%;
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
