<template>
<div >
	<div id="helpmain">
		<div id="help">
			<i class="el-icon-warning"></i>积分兑换帮助
		</div>
		
		<div id="invest">
			<el-button type="success" id="investbtn">积分充值</el-button>
		</div>
		<div id="info">
		<ul id="ul">
			<li v-on:click="test">
				<i class="el-icon-warning"></i>完善个人信息
			</li>
			<li>
				<i class="el-icon-warning"></i>积分兑换帮助
			</li>
			<li>
				<i class="el-icon-warning"></i>运营活动推广
			</li>
			<li>
				<i class="el-icon-warning"></i>&nbsp;邀请新用户
			</li>
		</ul>
			
			
		</div>
	</div>

</div>
</template>

<script>
export default {
  name: "helpMall",
  methods:{
	  test(){
		  this.$alert('等待开发过程中', '标题名称', {
		            confirmButtonText: '确定',
		            callback: action => {
		              this.$message({
		                type: 'info',
		                message: `action: ${ action }`
		              });
		            }
		          });
	  }
  }
}
</script>

<style scoped>
	
#helpmain{

	height: 500px;
	width: auto;
	
}
#help{
	
	font-weight: 300;
	font-size: large;
	font-family: "arial black";
}
#invest{
	
}
#investbtn{
	margin-top: 30px;
	width: 350px;
}
#info{
font-size: 20px;
padding: 10px;	
color: #1E90FF;
    cursor: pointer;
	position: relative;
}
#ul{
	float: left;
}
li{
	margin-top: 70px;
}
</style>
