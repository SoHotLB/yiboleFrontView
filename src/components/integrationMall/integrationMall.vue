<template>




  <el-container>
    <el-header>
        <integration-malladvertisement  style="width: 100%">

        </integration-malladvertisement>

    </el-header>
    <el-main>
      <div style="display: flex;flex-direction: row;width: 100%" >

        <el-card class="box-card" style="margin-left: 30px;margin-top: 250px ">
              <center-mall id="centermall" ></center-mall>
        </el-card>
      </div>
    </el-main>




  </el-container>

</template>

<script>
import Header from '@/components/common/Header';
import integrationMalladvertisement from '@/components/integrationMall/integrationMalladvertisement';
import centerMall from '@/components/integrationMall/centerMall';
import helpMall from '@/components/integrationMall/helpMall';

export default {
name: "integrationMall",
  components:{
    integrationMalladvertisement,centerMall,helpMall,Header
  },


}
</script>

<style scoped>
#centermall{
margin-top: 30%;

}

</style>
