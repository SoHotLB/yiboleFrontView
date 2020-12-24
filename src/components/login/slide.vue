<template>
    <div  style="width: 500px;">
        <!-- 1 -->
        <el-row>
            <el-col :span="24">
                <router-link to="/bossLoginForm">
                    <div class="grid-content bg-purple-dark" >

                        <div style="display: flex; margin-left: 30px;">
                            <img src="../../assets/doctor.png" style="width: 80px ;height: 90px;"/>
                            <div style="display: flex; flex-direction: column;">
                                <div style="margin-left: 10px;">

                                    <h2 style="color: #1E90FF;font-family: Helvetica Neue;Aria:sans-serif" >招聘者</h2>
                                    <p style="color: #B0B4C1;">我要和老板谈</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </router-link>
            </el-col>
        </el-row>
        <!-- 2 -->
        <el-row style="margin-top: 70px">
            <el-col :span="24">
                <router-link to="/employLoginForm">
                    <div class="grid-content bg-purple-dark"  >

                        <div style="display: flex; margin-left: 30px;">
                            <img src="../../assets/postion.png" style="width: 80px ;height: 90px;"/>
                            <div style="display: flex; flex-direction: column;">
                                <div style="margin-left: 10px;">

                                    <h2 style="color: #1E90FF;font-family: Helvetica Neue;Arial:sans-serif">应聘者</h2>
                                    <p style="color: #B0B4C1;">我要和老板谈</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </router-link>
            </el-col>
        </el-row >
        <!-- 3 -->
        <el-row style="margin-top: 70px">
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">

                    <div style="display: flex; margin-left: 30px;">
                        <img src="../../assets/connect.png" style="width: 80px ;height: 90px;"/>
                        <div style="display: flex; flex-direction: column;">
                            <div style="margin-left: 10px;">

                                <h2 style="color: #1E90FF;font-family: 'Helvetica Neue;Arialsans-serif' ">找工作</h2>
                                <p style="color: #B0B4C1;">我要和老板谈</p>
                            </div>

                        </div>
                    </div>

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default{
    name: "slide",
    methods:{


    },
    data(){
        return{

        }
    }
}

</script>

<style>
</style>
