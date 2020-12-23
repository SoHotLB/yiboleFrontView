<template>
<div>
<!--  <integration-mall-header></integration-mall-header>-->
  <Header></Header>
<!--  <integration-malladvertisement></integration-malladvertisement>-->
  <div style="display: flex; flex-direction: row;">
	  <center-mall id="centermall"></center-mall>
	  <help-mall id="helpmall"></help-mall>
  </div>

</div>
</template>

<script>
import Header from '@/components/common/Header';
import integrationMallHeader from "@/components/integrationMall/integrationMallHeader";
// import integrationMalladvertisement from "@/components/integrationMall/integrationMalladvertisement";
import integrationMalladvertisement from '@/components/integrationMall/integrationMalladvertisement';
import centerMall from '@/components/integrationMall/centerMall';
import helpMall from '@/components/integrationMall/helpMall';

export default {
name: "integrationMall",
  components:{
    integrationMallHeader,integrationMalladvertisement,centerMall,helpMall,Header
  }
}
</script>

<style scoped>
#centermall{
	width: 1000px;
	margin-left: 100px;
	height: 1000px;
	border: #1E90FF 1px solid;
}
#helpmall{
	width: 373px;
	margin-left: 20px;
	border: #1E90FF 1px solid;
	height: 579px;
}
</style>
