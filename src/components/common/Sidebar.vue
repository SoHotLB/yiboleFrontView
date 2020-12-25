<!-- todo 边框级联菜单、路由跳转、嵌套路由-->
<template>
    <div class="sidebar" style='border: 1px solid red'>
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                    </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
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
                }]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
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
