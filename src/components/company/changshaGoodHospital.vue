<template>
    <div>
        <div class="job-content" ref="contentId">
            <div class="company-wrapper">
                <div class="company-body">
                    <h3>北京大学第一医院</h3>
                    <div>

                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'changshaGoodHospital',
    mounted() {
        console.log("-----****"+ this.$route.params.com);
    }
};
</script>

<style scoped>
.job-content{
    position:fixed;
    top:60px;
    bottom:48px;
    left:0;
    font-size:0;
    width:100%;
    overflow:auto;
}
.company-body{
    font-size:0;
    padding-top:15px;
    padding-bottom: 15px;
    padding-right: 40px;
    padding-left: 40px;
    max-height:300px;
    overflow:auto;
}
.company-wrapper{
    width: 100%;
    background-color:white;
    z-index:100;
}
.choseBody{
    margin-bottom:20px;
}
.choseBody:last-child{
    margin-bottom:0 ! important;
}
</style>