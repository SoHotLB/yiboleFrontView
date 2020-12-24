<template>
    <div style=" width: 100% ;height: 100% ">
<!--    :style="{backgroundImage:'url(' +require('@/assets/backgroundLogin.jpeg') + ')'}-->


<div style="margin-top: 100px">
    <card-table id="form"></card-table>

</div>

    </div>
</template>

<script>

import cardTable from '@/components/login/cardTable';
export default {
    name: 'loginMain',
    components:{
        cardTable

    }
}


</script>

<style>
#form{


    height: 520px;
    width: 720px;
    border-radius: 30px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

</style>
