
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
  <section class="main">
  <div>
    <el-card>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <div v-for="item in 6" :key="item">
      <el-card >
        <h1>{{'文章题目'+item}}</h1>
        <p>{{'详细信息'}}</p>
      </el-card>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
    }
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

