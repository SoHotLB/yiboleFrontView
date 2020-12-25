<template>

  <el-container style="margin-top: 3px">
    <el-header>
      <div id="mall">
      <i class="el-icon-message-solid"></i>积分兑换商城
      </div>
    </el-header>
<!--    <div >-->
<!--      <img src="../../assets/img/background.jpg"   id="image"/>-->
<!--    </div>-->
    <el-main>
      <div id="mallList">


        <div id="list">
          <el-row :gutter="20">

            <el-col :span="6"><img class="grid-content bg-purple" src="../../assets/img/list1.png"/></el-col>
            <el-col :span="6"><img class="grid-content bg-purple" src="../../assets/img/list2.png"/></el-col>
            <el-col :span="6"><img class="grid-content bg-purple" src="../../assets/img/list3.png"/></el-col>
            <el-col :span="6"><img class="grid-content bg-purple" src="../../assets/img/list4.png"/></el-col>
          </el-row>
        </div>
        <div id="mall1" style="margin-top: 30px">
          <i class="el-icon-message-solid"></i>商品详情
        </div>
        <div id="mallList1" style="margin-top: 2%">
          <el-row :gutter="20">
            <el-col :span="8" v-for="item in MallList" >
              <el-card id="card" :body-style="{ padding: '0px' }" shadow="hover">
<!--                <img :src="item.goodsImage"  style="width: 300px;height:150px" class="image">-->
                  <el-image :src="item.goodsImage" style="width: 300px;height:200px;margin-left: 70px;margin-top: 15px" class="image" ></el-image>
                <div style="padding: 14px;">

                                <span style="text-align: center ; margin-left:140px;height:30px;line-height:30px;">{{item.goodsName}}</span>
                                <div style="position: relative ;top: -230px;left: -15px;background: #ff8282;width: 60px;text-align: right;border-radius: 15px;margin-left:70px;font-family: 华文宋体 ;color: white">{{item.goodsIntegral}}积分</div>
                  <div class="bottom clearfix">

                    <el-button type="primary"  style="width: 210px;height: 50px;  margin-left: 90px" v-on:click="buyBtn(item.goodsImage,item.goodsDetail,item.goodsIntegral,item.goodsId)">兑换</el-button>
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
          <div  >
              <el-image :src="formImg"  style="width: 80%;height:400px;margin-left: 50px" ></el-image>
<!--            <img  style="width: 100%;height:250px;margin-left: 50px" :src="formImg"/>-->
          </div>
          <div style="margin-top: 2%">
            <div style="font-size: larger;font-weight: 300;font-family: 'arial black' ;font-weight: bold">商品详情</div>
            {{formDetai}}
          </div>
          <div style="float: right">
            <div style="font-size: larger;font-weight: 300;font-family: 'arial black' ;font-weight: bold;color: #dd6161">{{goodsIntegral}}积分</div>
<!--            {{formDetai}}-->
          </div>
          <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="checkGood(goodsId)">确 定</el-button>
  </span>
        </el-dialog>
      </div>
    </el-main>
  </el-container>

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
    formImg:"",
    formDetai:"",
    goodsIntegral:"",
        goodsId:""
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
    buyBtn(res,detail,goodsIntegral,goodId){
     console.log("res--"+res)
      console.log("detail---"+detail)
        console.log("GoodsId---"+goodId);
      this.formImg=res
      this.formDetai=detail
      this.goodsIntegral=goodsIntegral
        this.goodsId=goodId
      this.dialogVisible=true
    },
      checkGood(goodsId){
          console.log("goodsIntegral-----checkGood-----"+goodsId);
          console.log("accountUser"+goodsId);
          console.log(JSON.parse(localStorage.getItem("UserInfo")).employAccount);
          this.$axios.post(this.$store.state.URL+"exchangeGoods",{
              goodsId:goodsId,
              userAcccount:JSON.parse(localStorage.getItem("UserInfo")).employAccount

          }).then((res)=>{
              console.log(res.data.msg);
              console.log()
              if(res.data.msg=="兑换成功"){
                  this.$message({
                      message: '恭喜你，成功兑换'+"共消耗"+this.goodsIntegral,
                      type: 'success'
                  });
              }else  if(res.data.msg=="缺货中，请选择其他商品！"){
                  this.$message({
                      message: '缺货中，请选择其他商品！',
                      type: 'warning'
                  });
              }else if(res.data.msg=="用户积分不足！"){
                  this.$message({
                      message: '用户积分不足！！兑换失败',
                      type: 'warning'
                  });
              }
              console.log(res);
          },(err)=>{
              console.log(err);
          })
          this.dialogVisible=false
      }
  }

}
</script>

<style scoped>
#mallList{

  width: 100%;
  /*border: 10px salmon solid;*/
}
#mall{
  width: 100%;
	font-size: larger;
	font-weight: 300;

	font-family: "arial black";
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
