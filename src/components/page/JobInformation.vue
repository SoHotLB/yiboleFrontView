<template>
	<div>
		<el-breadcrumb separator="/" style="padding-left:10px;padding-bottom:10px;font-size:12px">
			<el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/system' }">系统管理</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/position' }">职位</el-breadcrumb-item>
			<el-breadcrumb-item>职位详情</el-breadcrumb-item>
		</el-breadcrumb>
		<div>
		<el-header style="padding-left:5px;padding-bottom:1px;font-size:12px;height: 300px;">
			<div style="padding-left:30px;padding-top: 1.25rem;font-size:30px">
				<span>{{'职位'}}</span>
				<span style="color: aliceblue;padding-left: 20px;">{{'薪资'}}</span>
			</div>
			<div style="padding-left:40px;padding-top: 1.25rem;font-size:20px">
				<span>{{'地点'}}.{{'学历'}}.{{'要求。。。'}}</span>
			</div>
			<div style="padding-left:40px;padding-top: 1.25rem;font-size:20px" >
				<span>{{'福利'}}</span>
			</div>
		</el-header>
		</div>
		<p></p>
		<div style="padding-left:5px;padding-right:5px;padding-bottom:1px;font-size:12px">
			<el-card shadow="hover" class="box-card">
			  <div slot="header" class="clearfix">
			    <span>职位描述</span>
			  </div>
			  <div class="text item">
			    {{'职位详情'}}
			  </div>
			</el-card>
			<el-card class="box-card" shadow="hover" >
			  <div slot="header" class="clearfix">
			    <span>公司介绍</span>
			  </div>
			  <div class="text item">
			    {{'公司介绍 '}}
			  </div>
			</el-card>
			<el-card class="box-card" shadow="hover" >
			  <div slot="header" class="clearfix">
			    <span>工商信息</span>
			  </div>
			  <div class="text item">
			    {{'列表内容 '  }}
			  </div>
			</el-card>
			<el-card class="box-card" shadow="hover" >
			  <div slot="header" class="clearfix">
			    <span>工作地址</span>
			  </div>
			  <div class="text item">
			    {{'列表内容 ' }}
			  </div>
			</el-card>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1']
    }
  },
  created() {
    // console.log(this.query.company);
  },
  methods: {
    getpanyData(){

    },
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style>
	.el-header {
		width: 100%;
		height: 400px;
		background-color: #A9A9A9;
	}
	.text {
	    font-size: 14px;
	  }

	  .item {
	    margin-bottom: 18px;
	  }

	  .clearfix:before,
	  .clearfix:after {
	    display: table;
	    content: "";
	  }
	  .clearfix:after {
	    clear: both
	  }

	  .box-card {
	    width: 100%;
		margin: auto;
		padding-bottom:10px;
	  }
</style>
