<template>
    <div class="header" style='height: 80px;width: 100%'>
        <div class="bar">
            <div class="logo">医伯乐</div>
            <div class='top_bar' style='display: flex;'>
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
                                        :key="subItem.index">
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

<!--                        已经登录-->
                        <div id="right" style="display: flex;margin-left: 15px" v-if="this.account!=''" >
                            <!-- 用户头像 -->
                            <div  class="login" style="display: flex;" >
                                <div class="user-avator">
                                    <img src="../../assets/img/img.png" />
                                </div>
                                <!-- 用户名下拉菜单 -->
                                <el-dropdown class="user-name"  style="margin-top: 10px" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
<!--                        {{this.account}}-->
                        {{this.employAccount}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                                    <el-dropdown-menu slot="dropdown" style="margin-bottom: 5px">
                                        <a href="https://gitee.com/hnucm/dashboard/programs/140463/projects/hnucm/medicine-recruit-wechat/" target="_blank">
                                            <el-dropdown-item>个人中心</el-dropdown-item>
                                        </a>
                                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>

                        </div>
                        <!--  //未登录状态-->
                        <div style="margin-left: 100px;margin-top: 1px" v-else >
                            <el-button type="info" icon="el-icon-message" circle></el-button>
                            <el-button type="text"  id="login" v-on:click="loginBtn">登录</el-button>
<!--                            <el-button type="text"  id="register" v-on:click="registerBtn">注册</el-button>-->
                        </div>
                    </div>

                </div>
                </div>
            </div>

        </div>


</template>
<script>
import bus from '../common/bus';
import employForm from '@/components/login/employForm';
export default {
    data() {
        return {
          // 用户的数据信息

            employAccount:"",
            company:"",
            employAddress:"",
            employAge:"",
            employBackground:"",
            employEmail:"",
            employGraduationTime:"",
            employId:"",
            employIntegration:"",
            employIsMarried:"",
            employMajor:"",
            employName:"",
            employPassword:"",
            employSchool:"",
            employSex:"",
            employTel:"",

         //

            //招聘者的数据
            recruiterId:"",
            recruiterName:"",
            companys:"",
            recruiterAccount:"",
            recruiterPassword:"",
            recruiterAge:"",
            recruiterSex:"",
            recruiterEmail:"",
            recruiterTel:"",
            recruiterIntegration:"",

            flag:"",
            account:"",
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
                    icon: 'el-icon-s-goods',
                    index: 'market',
                    title: '周边商城'
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
                // {
                //     icon: 'el-icon-lx-calendar',
                //     index: '3',
                //     title: '账号设置',
                //     subs: [
                //         {
                //             index: 'form',
                //             title: '手机账号'
                //         },
                //         {
                //             index: 'editor',
                //             title: '设置密码'
                //         },
                //         {
                //             index: 'markdown',
                //             title: '绑定微信号'
                //         },
                //         {
                //             index: 'upload',
                //             title: '常用语'
                //         }
                //     ]
                // },
                {
                    icon: 'el-icon-lx-emoji',
                    index: 'icon',
                    title: '咨讯'
                },
                {
                    icon: 'el-icon-pie-chart',
                    index: 'charts',
                    title: '个人简历'
                },
                {
                icon: 'el-icon-lx-calendar',
                index: 'editor',
                title: '个人中心'
                },

            ]
        };
    },
    computed: {
        // username() {
        //     let username = localStorage.getItem('ms_username');
        //     return username ? username : this.name;
        // },
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    methods: {
        //注册
        registerBtn(){

        },
        //进入登录界面
        loginBtn(){
            this.$router.push({path:'/login'})
            console.log("login")
        },
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                this.flag="",
                    this.account=""
                this.$message({
                    message: '恭喜你，退出成功',
                    type: 'success'
                });
                // localStorage.removeItem('ms_username');
                // this.$router.push('/login');
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
        },
        //根据登录穿过来的用户值进行查询
        searchInfo(){
            console.log("searchInfo");
            console.log(this.flag);
            //应聘者
            if(this.flag=="employ"){

                this.$axios.post(this.$store.state.URL+"searchEmployByTel/"+ this.account).then((res)=>{
                    console.log("应聘者+------");
                    console.log(res.data.data);
                    //将数据存在浏览器中
                    localStorage.setItem("UserInfo", JSON.stringify(res.data.data))
                    this.employId=res.data.data.employId,
                        this.employName=res.data.data.employName,
                        this.employAccount=res.data.data.employAccount,
                        this.employPassword=res.data.data.employPassword,
                        this.employSex=res.data.data.employSex,
                        this.employIsMarried=res.data.data.employIsMarried,
                        this.employAge=res.data.data.employAge,
                        this.employEmail=res.data.data.employEmail,
                        this.employTel=res.data.data.employTel,
                        this.employBackground=res.data.data.employBackground
                        this.employMajor=res.data.data.employMajor,
                            this.employSchool=res.data.data.employSchool,
                            this.employAddress=res.data.data.employAddress
                    this.employIntegration=res.data.data.employIntegration
                    this.employGraduationTime=res.data.data.employGraduationTime
                },(err)=>{
                    console.log(err);
                })
            }
            //招聘者
            else if(this.flag=="boss"){

                this.$axios.post(this.$store.state.URL+"searchRecruiterByTel/"+ this.account).then((res)=>{
                    console.log("招聘者+------");
                    console.log(res.data.data);
                    //将数据存在浏览器中
                    localStorage.setItem("UserInfo", JSON.stringify(res.data.data))
                    this.recruiterId=res.data.data.recruiterId,
                        this.recruiterName=res.data.data.recruiterName,
                        this.companys=res.data.data.company,
                        this.recruiterAccount=res.data.data.recruiterAccount,
                        this. recruiterPassword=res.data.data.recruiterPassword,
                        this.recruiterAge=res.data.data.recruiterAge,
                        this. recruiterSex=res.data.data.recruiterSex,
                        this.recruiterEmail=res.data.data.recruiterEmail,
                        this.recruiterTel=res.data.data.recruiterTel,
                        this.recruiterIntegration=res.data.data.recruiterIntegration

                },(err)=>{
                    console.log(err);
                })
            }
    },
    },

    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
        //flag用于判断是招聘者还是应聘者
        console.log(this.flag);

        // this.searchInfo();
        //打印存在浏览器中的值
        console.log("打印存在浏览器中的值");
        console.log(JSON.parse(localStorage.getItem("UserInfo")));
    },
    created() {
        this.account=this.$route.query.account;
        this.flag=this.$route.query.flag
        this.searchInfo();
        console.log("this.Info");
        console.log(this.Info);

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
