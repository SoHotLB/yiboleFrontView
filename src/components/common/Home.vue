<!--todo 首页-->
<template>
    <div class="wrapper">
        <v-head></v-head>
<!--        <el-col :span="4" style='border: 10px solid red'>-->
<!--&lt;!&ndash;            <h5>默认颜色</h5>&ndash;&gt;-->
<!--            <el-menu-->
<!--                default-active="onRoutes"-->
<!--                class="el-sidebar"-->
<!--                background-color="#324157"-->
<!--                text-color="#bfcbd9"-->
<!--                active-text-color="#20a0ff"-->
<!--                unique-opened-->
<!--                router-->
<!--                >-->
<!--                <template v-for="item in items">-->
<!--                    <el-menu-item :index="item.index" :key="item.index">-->
<!--                        <template slot="title">-->
<!--                            <i :class="item.icon"></i>-->
<!--                            <span>{{ item.title }}</span>-->
<!--                        </template>-->
<!--                    </el-menu-item>-->
<!--                </template>-->

<!--            </el-menu>-->
<!--        </el-col>-->
        <div class='content-box' >
            <div class="content">
                <transition name="move" mode="out-in" >
                    <router-view ></router-view>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>

        </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
// import vSide from './Sidebar.vue';
// import vTags from './Tags.vue';
import bus from './bus';
export default {
    data() {
        return {
            collapse: false,
            activeIndex2: '1',
            items: [
                {
                    icon: 'el-icon-user-solid',
                    index: 'interview',
                    title: '面试'
                },
                {
                    icon: 'el-icon-edit',
                    index: 'written',
                    title: '笔试'
                },],
            tagsList: []
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    components: {
        vHead,
        // vSide,
        // vTags
    },
    created() {
        // bus.$on('collapse-content', msg => {
        //     this.collapse = msg;
        // });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
<style scoped>
.el-sidebar {
    /*float: left;*/
    position: absolute;
    /*margin-top: 60px;*/
    left: 0;
    top: 60px;
    bottom: 0;
    overflow-y: scroll;
}
/*.sidebar::-webkit-scrollbar {*/
/*    width: 0;*/
/*}*/
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 80px;
}
.sidebar > ul {
    height: 100%;
}
</style>
