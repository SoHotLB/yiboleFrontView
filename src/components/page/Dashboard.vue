<template>
    <div class="search" style="margin-top: 15px;">
        <el-cascader v-model="value"
                     size='medium'
                     style='width: 20%' :options="options"
                     placeholder="职位类型"
                     :props="{ expandTrigger: 'hover' }">
        </el-cascader>
        <el-input style='width: 80%' placeholder="请输入内容" size='medium' v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" type='primary'>搜索</el-button>
        </el-input>
    </div>

    <!--        <el-row :gutter="20">-->
    <!--            <el-col :span="8">-->


    <!--            </el-col>-->
    <!--            <el-col :span="16">-->
    <!--                <el-row :gutter="20" class="mgb20">-->
    <!--                    <el-col :span="8">-->
    <!--&lt;!&ndash;                        <el-card shadow="hover" :body-style="{padding: '0px'}">&ndash;&gt;-->
    <!--&lt;!&ndash;                            <div class="grid-content grid-con-1">&ndash;&gt;-->
    <!--&lt;!&ndash;                                <i class="el-icon-lx-people grid-con-icon"></i>&ndash;&gt;-->
    <!--&lt;!&ndash;                                <div class="grid-cont-right">&ndash;&gt;-->
    <!--&lt;!&ndash;                                    <div class="grid-num">1234</div>&ndash;&gt;-->
    <!--&lt;!&ndash;                                    <div>用户访问量</div>&ndash;&gt;-->
    <!--&lt;!&ndash;                                </div>&ndash;&gt;-->
    <!--&lt;!&ndash;                            </div>&ndash;&gt;-->
    <!--&lt;!&ndash;                        </el-card>&ndash;&gt;-->
    <!--                    </el-col>-->
    <!--                    <el-col :span="8">-->
    <!--&lt;!&ndash;                        <el-card shadow="hover" :body-style="{padding: '0px'}">&ndash;&gt;-->
    <!--&lt;!&ndash;                            <div class="grid-content grid-con-2">&ndash;&gt;-->
    <!--&lt;!&ndash;                                <i class="el-icon-lx-notice grid-con-icon"></i>&ndash;&gt;-->
    <!--&lt;!&ndash;                                <div class="grid-cont-right">&ndash;&gt;-->
    <!--&lt;!&ndash;                                    <div class="grid-num">321</div>&ndash;&gt;-->
    <!--&lt;!&ndash;                                    <div>系统消息</div>&ndash;&gt;-->
    <!--&lt;!&ndash;                                </div>&ndash;&gt;-->
    <!--&lt;!&ndash;                            </div>&ndash;&gt;-->
    <!--&lt;!&ndash;                        </el-card>&ndash;&gt;-->
    <!--                    </el-col>-->
    <!--                    <el-col :span="8">-->
    <!--                        <el-card shadow="hover" :body-style="{padding: '0px'}">-->
    <!--&lt;!&ndash;                            <div class="grid-content grid-con-3">&ndash;&gt;-->
    <!--&lt;!&ndash;                                <i class="el-icon-lx-goods grid-con-icon"></i>&ndash;&gt;-->
    <!--&lt;!&ndash;                                <div class="grid-cont-right">&ndash;&gt;-->
    <!--&lt;!&ndash;                                    <div class="grid-num">5000</div>&ndash;&gt;-->
    <!--&lt;!&ndash;                                    <div>数量</div>&ndash;&gt;-->
    <!--&lt;!&ndash;                                </div>&ndash;&gt;-->
    <!--&lt;!&ndash;                            </div>&ndash;&gt;-->
    <!--                        </el-card>-->
    <!--                    </el-col>-->
    <!--                </el-row>-->
    <!--&lt;!&ndash;                <el-card shadow="hover" style="height:403px;">&ndash;&gt;-->
    <!--&lt;!&ndash;                    <div slot="header" class="clearfix">&ndash;&gt;-->
    <!--&lt;!&ndash;                        <span>待办事项</span>&ndash;&gt;-->
    <!--&lt;!&ndash;                        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>&ndash;&gt;-->
    <!--&lt;!&ndash;                    </div>&ndash;&gt;-->
    <!--&lt;!&ndash;                    <el-table :show-header="false" :data="todoList" style="width:100%;">&ndash;&gt;-->
    <!--&lt;!&ndash;                        <el-table-column width="40">&ndash;&gt;-->
    <!--&lt;!&ndash;                            <template slot-scope="scope">&ndash;&gt;-->
    <!--&lt;!&ndash;                                <el-checkbox v-model="scope.row.status"></el-checkbox>&ndash;&gt;-->
    <!--&lt;!&ndash;                            </template>&ndash;&gt;-->
    <!--&lt;!&ndash;                        </el-table-column>&ndash;&gt;-->
    <!--&lt;!&ndash;                        <el-table-column>&ndash;&gt;-->
    <!--&lt;!&ndash;                            <template slot-scope="scope">&ndash;&gt;-->
    <!--&lt;!&ndash;                                <div&ndash;&gt;-->
    <!--&lt;!&ndash;                                    class="todo-item"&ndash;&gt;-->
    <!--&lt;!&ndash;                                    :class="{'todo-item-del': scope.row.status}"&ndash;&gt;-->
    <!--&lt;!&ndash;                                >{{scope.row.title}}</div>&ndash;&gt;-->
    <!--&lt;!&ndash;                            </template>&ndash;&gt;-->
    <!--&lt;!&ndash;                        </el-table-column>&ndash;&gt;-->
    <!--&lt;!&ndash;                        <el-table-column width="60">&ndash;&gt;-->
    <!--&lt;!&ndash;                            <template>&ndash;&gt;-->
    <!--&lt;!&ndash;                                <i class="el-icon-edit"></i>&ndash;&gt;-->
    <!--&lt;!&ndash;                                <i class="el-icon-delete"></i>&ndash;&gt;-->
    <!--&lt;!&ndash;                            </template>&ndash;&gt;-->
    <!--&lt;!&ndash;                        </el-table-column>&ndash;&gt;-->
    <!--&lt;!&ndash;                    </el-table>&ndash;&gt;-->
    <!--&lt;!&ndash;                </el-card>&ndash;&gt;-->
    <!--            </el-col>-->
    <!--        </el-row>-->
    <!--        <el-row :gutter="20">-->
    <!--            <el-col :span="12">-->
    <!--                <el-card shadow="hover">-->
    <!--                    <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>-->
    <!--                </el-card>-->
    <!--            </el-col>-->
    <!--            <el-col :span="12">-->
    <!--                <el-card shadow="hover">-->
    <!--                    <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>-->
    <!--                </el-card>-->
    <!--            </el-col>-->
    <!--        </el-row>-->

</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
export default {
    name: 'dashboard',
    data() {
        return {
            input3: '',
            select: '',
            value: [],
            options: [{
                value: 'linchuangshiyan',
                label: '临床试验',
                children: [{
                    value: 'linchuangyanjiu',
                    label: '临床研究'
                }, {
                    value: 'linchuangzhuli',
                    label: '临床助理'
                },{
                    value: 'linchuangshujufenxi',
                    label: '临床数据分析'
                },{
                    value: 'linchuangxiangmujingli',
                    label: '临床项目经理'
                },{
                    value: 'yixuezongjie',
                    label: '医学总结'
                }]
            }, {
                value: 'yisheng/yiji',
                label: '医生/医技',
                children: [{
                    value: 'yisheng',
                    label: '医生'
                }, {
                    value: 'yishnegzhuli',
                    label: '医生助理'
                }, {
                    value: 'neikeyisheng',
                    label: '内科医生'
                }, {
                    value: 'quankeyisheng',
                    label: '全科医生'
                }, {
                    value: 'Bchaoyisheng',
                    label: 'B超医生'
                }, {
                    value: 'zhongyi',
                    label: '中医'
                },{
                    value: 'xinliyisheng',
                    label: '心理医生'
                },{
                    value: 'yaojishi',
                    label: '药剂师'
                },{
                    value: 'yakeyisheng',
                    label: '牙科医生'
                },{
                    value: 'kangfuzhiliaoshi',
                    label: '康复治疗师'
                },{
                    value: 'yanguangshi',
                    label: '验光师'
                },{
                    value: 'jianyankeyishi',
                    label: '检验科医师'
                },{
                    value: 'qita',
                    label: '其他医生职位'
                }]
            }, {
                value: 'ziyuan',
                label: '资源'
            }]
        }
    },
    // created() {
    //     this.handleListener();
    //     this.changeDate();
    // },
    // activated() {
    //     this.handleListener();
    // },
    // deactivated() {
    //     window.removeEventListener('resize', this.renderChart);
    //     bus.$off('collapse', this.handleBus);
    // },
    methods: {

    }
};
</script>


<style scoped>
.el-select .el-input {
    width: 130px;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}
.search>>>.el-input{
    border: 0;
}
.schart {
    width: 100%;
    height: 300px;
}
</style>
