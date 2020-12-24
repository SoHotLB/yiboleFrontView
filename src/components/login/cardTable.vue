<template>
<div >
    <el-card class="box-card">
     <div id="container">
         <div id="slide">
<slide></slide>

         </div>
         <div style="float:left;width: 1px;height: 605px; background: #409EFF;"></div>
         <div id="login">
             <router-view></router-view>
         </div>
     </div>
    </el-card>
</div>
</template>

<script>

import Slide from '@/components/login/slide';
export default {
name: "cardTable",
    components: { Slide }
}
</script>

<style scoped>
.box-card {
    margin-left: 10px;
    margin-top: 10px;
    width: 700px;
    height: 500px;
}
#container{
    display: flex;
}
#slide{
    width: 250px;
    height: 470px;
    /*border: #5daf34 3px solid;*/
}
#login{
    width: 490px;
    height: 470px;

}
</style>
