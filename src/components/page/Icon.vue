
<!--<template>-->
<!--  <el-row class="tac">-->
<!--    <el-col :span="6">-->
<!--      <h5></h5>-->
<!--      <el-menu-->
<!--          default-active="2"-->
<!--          class="el-menu-vertical-demo"-->
<!--          @open="handleOpen"-->
<!--          @close="handleClose">-->
<!--        <el-menu-item index="1">-->
<!--          <i class="el-icon-location"></i>-->
<!--          <span slot="title">账号设置</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="2">-->
<!--          <i class="el-icon-menu"></i>-->
<!--          <span slot="title">设置密码</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="3">-->
<!--          <i class="el-icon-document"></i>-->
<!--          <span slot="title">隐私设置</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="4">-->
<!--          <i class="el-icon-setting"></i>-->
<!--          <span slot="title">常用语</span>-->
<!--        </el-menu-item>-->
<!--      </el-menu>-->
<!--    </el-col>-->
<!--    <el-col :span="18">-->
<!--      <h5></h5>-->
<!--      <el-menu-->
<!--          default-active="2"-->
<!--          class="el-menu-vertical-demo"-->
<!--          @open="handleOpen"-->
<!--          @close="handleClose"-->
<!--          background-color="#545c64"-->
<!--          text-color="#fff"-->
<!--          active-text-color="#ffd04b">-->
<!--        <el-card class="box-card">-->
<!--          <div slot="header" class="clearfix">-->
<!--            <span>卡片名称</span>-->
<!--            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
<!--          </div>-->
<!--          <div v-for="o in 4" :key="o" class="text item">-->
<!--            {{'列表内容 ' + o }}-->
<!--          </div>-->
<!--        </el-card>-->
<!--      </el-menu>-->
<!--    </el-col>-->
<!--  </el-row>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--  methods: {-->
<!--    handleOpen (key, keyPath) {-->
<!--      console.log(key, keyPath)-->
<!--    },-->
<!--    handleClose (key, keyPath) {-->
<!--      console.log(key, keyPath)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.el-col{-->
<!--  padding-left: 0.625rem;-->
<!--  padding-right: 1.25rem;-->
<!--  padding-top: 1.25rem;-->
<!--}-->
<!--.text {-->
<!--  font-size: 25px;-->
<!--}-->

<!--.item {-->
<!--  margin-bottom:18px;-->
<!--}-->

<!--.clearfix:before,-->
<!--.clearfix:after {-->
<!--  display: table;-->
<!--  content: "";-->
<!--}-->
<!--.clearfix:after {-->
<!--  clear: both-->
<!--}-->

<!--.box-card {-->
<!--  width: 100%;-->
<!--}-->
<!--</style>-->

<template>
  <div>
      <div class="block"style="margin-top: 20px;margin-left:10px;margin-right:10px;">
        <el-carousel :interval="5000" trigger="click" type='card' :height="bannerHeight+'px'">
          <el-carousel-item v-for="item in carouselList" :key="item.key">
            <img :src='item.src' class='image' alt="" @load="imgLoad" style='width: 100%' ref="bannerHeight">
          </el-carousel-item>
        </el-carousel>
      </div>
<!--     <el-card> -->
<!--      <el-carousel :interval="4000" type="card" height="200px">-->
<!--        <el-carousel-item v-for="item in carouselList" :key="item">-->
<!--          <h3 class="medium">{{ item }}</h3>-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
<!--    </el-card>-->

    <div style='width:80%;margin: auto;padding: 10px'>
      <el-card>
          <h1 style='padding-bottom: 20px;color: #324157'><router-link to="/zixun1" style='padding-right:5px'>面试黑话：</router-link>面试官向你传达的不能说的秘密</h1>
        <p>在面试中，除了注意自己一言一行，我们还能关注面试官的回应，既可以提前大概判断自己的面试结
          果，也能从他们的话语中获取有用的信息。尤其对于久居海外的留学生们，回国求职一定有很多你不懂的面试官黑话，向你传达</p>
      </el-card>
      <el-card >
          <h1 style='padding-bottom: 20px;color: #324157'><router-link to="/zixun2" style='padding-right:5px'>远程面试：</router-link>远程面试前做哪些准备工作才能顺利拿到Offer</h1>
        <p>疫情当下，目前有招聘需求的公司几乎都选择了“无接触式招聘”——所有招聘流程都在线上完成。而远程面试——视频/电话面试是其中最重要的环节。对很多还没有回国留学生来讲，大批公司采用远程面试是一个比较好的机</p>
      </el-card>
      <el-card >
          <h1 style='padding-bottom: 20px;color: #324157'><router-link to="/zixun3" style='padding-right:5px'>求职必读</router-link>面试官故意刁难？解析压力面试的判断依据及应对策略</h1>
        <p>面试经验丰富的同学应该都遇到过下列类似问题：“说说你的缺点吧？”，“你认为你比别的应聘者优秀在哪里？”，“你之前面了几个公司？为什么别人不要你呢？”，“你如何评价自己的今天面试表现？”……当遇到这样的</p>
      </el-card>
      <el-card >
          <h1 style='padding-bottom: 20px;color: #324157'><router-link to="/zixun4" style='padding-right:5px'>求职必读</router-link>
          外企面试技巧与8大高频问题解题思路</h1>
        <p>外企可以说是留学生们最感兴趣的企业类型之一了，每年有大量的留学生进入或者尝试进入外企工作。选择去外企工作的主要原因，除了期待外企的工作环境、氛围，还有就是能发挥留学的语言优势。虽然很多留学生英语都讲的</p>
      </el-card>
      <el-card >
          <h1 style='padding-bottom: 20px;color: #324157'><router-link to="/zixun5" style='padding-right:5px'>个人简历怎么写？</router-link>用好Bullet Points，简历才能一击入魂</h1>
        <p>如何用好Bullet Points写一份要点分明的简历，让你的简历对招聘者“一击入魂”？名企的热门岗位有大量求职者参与竞争，100：1的录用比例已经屡见不鲜。激烈的竞争意味着招聘者或HR花费在一份简历</p>
      </el-card>
    </div>
    <div>

    </div>
    <div>
      <el-drawer
          title="我嵌套了表格!"
          :visible.sync="table"
          direction="rtl"
          size="50%">
        <el-table :data="gridData">
          <el-table-column property="date" label="日期" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      outerVisible: false,
      innerVisible: false,
      carouselList:[{
        key: 'img1',
        src:require("../../assets/img/zixun1.png")
      },{
        key: 'img2',
        src:require("../../assets/img/zhixun2.jpg")
      },{
        key: 'img3',
        src:require("../../assets/img/zhixun4.jpg")
      },{
        key: 'img4',
        src:require("../../assets/img/zhixun5.jpg")
      },{
        key: 'img5',
        src:require("../../assets/img/zhixun6.jpg")
      }],
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.list{
  padding: 30px 0;
}
.list p{
  margin-bottom: 20px;
}
a{
  color: #409eff;
}
</style>

