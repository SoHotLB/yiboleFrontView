<template>
    <div class="header" style='height: 80px'>
        <div class="bar">
            <div class="logo">医伯乐</div>
            <div class='top_bar' style='display: flex;width: 980px'>
                <el-menu
                    class="el-menu-demo"
                    :default-active="onRoutes"
                    mode="horizontal"
                    background-color="#242f42"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    unique-opened
                    router
                >
                    <template v-for="item in items">
                        <template v-if="item.subs">
                            <el-submenu :index="item.index" :key="item.index">
                                <template slot="title">
                                    <i :class="item.icon"></i>
                                    <span slot="title">{{ item.title }}</span>
                                </template>
                                <template v-for="subItem in item.subs">
                                    <el-submenu
                                        v-if="subItem.subs"
                                        :index="subItem.index"
                                        :key="subItem.index"
                                    >
                                        <template slot="title">{{ subItem.title }}</template>
                                        <el-menu-item
                                            v-for="(threeItem,i) in subItem.subs"
                                            :key="i"
                                            :index="threeItem.index"
                                        >{{ threeItem.title }}</el-menu-item>
                                    </el-submenu>
                                    <el-menu-item
                                        v-else
                                        :index="subItem.index"
                                        :key="subItem.index"
                                    >{{ subItem.title }}</el-menu-item>
                                </template>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item :index="item.index" :key="item.index">
                                <i :class="item.icon"></i>
                                <span slot="title">{{ item.title }}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>

                <!--                登录-->
                <div class="header-right">
                    <div class="header-user-con">
                        <!-- 全屏显示 -->
<!--                        <div class="btn-fullscreen" @click="handleFullScreen">-->
<!--                            <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">-->
<!--                                <i class="el-icon-rank"></i>-->
<!--                            </el-tooltip>-->
<!--                        </div>-->
                        &nbsp;
                        <!-- 简历 -->
                        <div class="btn-message">
                            <el-tooltip
                                effect="dark"
                                :content="message?`查看简历`:`简历`"
                                placement="center"
                            >
                                <router-link to="/charts">
                                    <label style='font-size: 12px;color: #fff ;line-height: 100px'>简历</label>
                                </router-link>
                            </el-tooltip>
                            <!--                    <span class="btn-bell-badge" v-if="message">/span>-->
                        </div>
                        &nbsp;&nbsp;
                        <!-- 简历上传 -->
                        <div class="btn-message">
                            <el-tooltip
                                effect="dark"
                                :content="message?`上传简历`:`简历`"
                                placement="center"
                            >
                                <router-link to="/tabs">
                                    <label style='font-size: 12px;color: #fff;line-height: 100px'>上传</label>
                                </router-link>
                            </el-tooltip>
                            <!--                    <span class="btn-bell-badge" v-if="message">/span>-->
                        </div>
                        <!--                &lt;!&ndash; 用户头像 &ndash;&gt;-->
                        <!--                <div class="user-avator">-->
                        <!--                    <img src="../../assets/img/img.jpg" />-->
                        <!--                </div>-->
                        <!-- 用户名下拉菜单 -->
                        <el-dropdown class="user-name" trigger="click" style='color: #fff' @command="handleCommand">
                    <span class="el-dropdown-link" style='font-size: 14px;color: #fff'>
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                            <el-dropdown-menu slot="dropdown">
                                <a href="" target="_blank">
                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                </a>
                                <router-link to="/icon">
                                    <el-dropdown-item divided command="usersetting">账号设置</el-dropdown-item>
                                </router-link>
                                <el-dropdown-item command="yssetting">隐私设置</el-dropdown-item>
                                <el-dropdown-item divided command="switch">切换为招聘者</el-dropdown-item>
                                <el-dropdown-item divided command="switch">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            fullscreen: false,
            name: 'linxin',
            message: 2,
            activeIndex2: '1',
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'dashboard',
                    title: '首页'
                },
                {
                    icon: 'el-icon-lx-cascades',
                    index: 'table',
                    title: '公司'
                },
                {
                    icon: 'el-icon-lx-copy',
                    index: 'tabs',
                    title: '职位'
                },
                {
                    icon: 'el-icon-lx-calendar',
                    index: '3',
                    title: '账号设置',
                    subs: [
                        {
                            index: 'form',
                            title: '手机账号'
                        },
                        {
                            index: 'editor',
                            title: '设置密码'
                        },
                        {
                            index: 'markdown',
                            title: '绑定微信号'
                        },
                        {
                            index: 'upload',
                            title: '常用语'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-emoji',
                    index: 'icon',
                    title: '自定义图标'
                },
                {
                    icon: 'el-icon-pie-chart',
                    index: 'charts',
                    title: 'schart图表'
                },
                // {
                //     icon: 'el-icon-rank',
                //     index: '6',
                //     title: '拖拽组件',
                //     subs: [
                //         {
                //             index: 'drag',
                //             title: '拖拽列表'
                //         },
                //         {
                //             index: 'dialog',
                //             title: '拖拽弹框'
                //         }
                //     ]
                // },
                // {
                //     icon: 'el-icon-lx-global',
                //     index: 'i18n',
                //     title: '国际化功能'
                // },
                // {
                //     icon: 'el-icon-lx-warn',
                //     index: '7',
                //     title: '错误处理',
                //     subs: [
                //         {
                //             index: 'permission',
                //             title: '权限测试'
                //         },
                //         {
                //             index: '404',
                //             title: '404页面'
                //         }
                //     ]
                // }
            ]
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        },
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    methods: {
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username');
                this.$router.push('/login');
            }
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
};
</script>
<style scoped>
.el-menu-demo{
    height: 70px;
    color: #fff;
}
.header {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 20px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 150px;
    line-height: 60px;
    font-weight: 700;
    font-family: Calibri;
    color: #fff;
}
.header-right {
    float: right;
    padding-left: 10px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}

.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
