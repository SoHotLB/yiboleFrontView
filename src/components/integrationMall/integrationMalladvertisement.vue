<template>
<div id="advister" >
	<el-carousel indicator-position="outside">
	    <el-carousel-item  >
        <img :src="pic"/>
	    </el-carousel-item>
	  </el-carousel>
</div>
</template>

<script>
export default {
  name: "integrationMalladvertisement",
  data(){
    return{
        pic:require("../../assets/img/storebackground.jpg")

    }
  }
}
</script>

<style scoped>
	#advister{


	}
.el-carousel__item image {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }


</style>
