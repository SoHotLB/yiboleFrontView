<template>
<div id="mallList">
	<div id="mall">
		<i class="el-icon-message-solid"></i>积分兑换商城
	</div>
	<div >
		<img src="../../assets/img/background.jpg"   id="image"/>
	</div>
  <div id="list">
	  <el-row :gutter="20">
	    <el-col :span="6"><img class="grid-content bg-purple" src="../../assets/img/list1.png"/></el-col>
	    <el-col :span="6"><img class="grid-content bg-purple" src="../../assets/img/list2.png"/></el-col>
	    <el-col :span="6"><img class="grid-content bg-purple" src="../../assets/img/list3.png"/></el-col>
	    <el-col :span="6"><img class="grid-content bg-purple" src="../../assets/img/list4.png"/></el-col>
	  </el-row>
  </div>
  <div id="mall1">
  	<i class="el-icon-message-solid"></i>商品详情
  </div>
  <div id="mallList1" style="border: #5daf34 5px solid;margin-top: 2%">
	  <el-row :gutter="20">
	    <el-col :span="8" v-for="item in MallList" >
			 <el-card id="card" :body-style="{ padding: '0px' }" shadow="hover">
			      <img :src="item.goodsImage"  style="width: 300px;height:150px" class="image">
			      <div style="padding: 14px;">
<!--              <span>{{item.goodsDetail}}</span>-->
<!--              <div style="position: relative ;top: -180px;left: -120px;background: #FF8282;width: 100px;text-align: right;border-radius: 15px;margin-left:70px;font-family: 华文宋体 ;color: white">{{item.goodsIntegral}}积分</div>-->
			        <div class="bottom clearfix">

				   <el-button type="primary"  style="width: 210px; margin-top: 5px;" v-on:click="buyBtn(item.goodsImage)">兑换</el-button>
			        </div>
			      </div>
			    </el-card>

		</el-col>

	  </el-row>
  </div>

<!--  兑画框-->
  <el-dialog
      title="医伯乐兑换中心"
      :visible.sync="dialogVisible"
      width="50%"

      :before-close="handleClose">
    <div style="border: #8c939d 2px solid">
    <img  style="width: 100%;height:200px;" :src="formImg"/>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</div>
</template>

<script>
export default {
name: "centerMall",
data(){
	return{
    dialogVisible: false,
		//返回物品对象，包含详情，物品名，兑换所需积分
		MallList:[],
		//测试
   MallNum:16,
    formImg:""
	}

},
  created() {
  //this.MallList
  //   var that=this;
    this.getData()

  },
  methods:{
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
   async  getData(){
  await  this.$axios.post(this.$store.state.URL+"getAllGoods").then(
        (res)=>{
          this.MallList=res.data.data
          console.log(res.data.data)
        },err=>{
          console.log(err)
        }
    )
       console.log("this,mall")
       console.log(this.MallList)
  },
    //兑换
    buyBtn(res){
     console.log(res)
      this.formImg=res
      this.dialogVisible=true
    }
  }

}
</script>

<style scoped>
#mall{
	font-size: larger;
	font-weight: 300;

	font-family: "arial black";
}
#image{
	margin-top: 30px;
	width: 1000px;
	height: 300px;
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .button {
      padding: 0;
      float: right;
    }
  .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .image {
      width: 100%;
      display: block;
    }
	#card{
		margin-top: 10px;
	}
</style>
