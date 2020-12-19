<template>
    <section class="main">
      <!--
      <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-global"></i> {{$t('i18n.breadcrumb')}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <span>{{$t('i18n.tips')}}</span>
            <el-button type="primary" @click="$i18n.locale = $i18n.locale === 'zh'?'en':'zh';">{{$t('i18n.btn')}}</el-button>
            <div class="list">
            <h2>{{$t('i18n.title1')}}</h2>
                <p>{{$t('i18n.p1')}}</p>
                <p>{{$t('i18n.p2')}}</p>
                <p>{{$t('i18n.p3')}}</p>
            </div>
            <h2>{{$t('i18n.title2')}}</h2>
            <div>
                <i18n path="i18n.info" tag="p">
                    <a place="action" href="https://element.eleme.cn/2.0/#/zh-CN/component/i18n">{{ $t('i18n.value') }}</a>
                </i18n>
            </div>
        </div>-->
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
