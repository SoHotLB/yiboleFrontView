<template>
    <div>
        <div class="search" style="margin-right: 10%;margin-top: 15px;margin-left: 10%">
            <el-cascader
                clearable
                class='card-emloyee'
                v-model="value"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange">
            </el-cascader>
            <el-input style='width: 70%' clearable
                      placeholder="请输入职位、公司" size='small'
                      v-model="input3"
                      class="input-with-select"/>
            <el-button class='button' icon="el-icon-search">搜索</el-button>

        </div>
        <div class='link'>
            <label style='font-size: 12px'>热门职位:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <el-link class='green' :underline="false">临床研究</el-link>&nbsp;
            <el-link class='green' :underline="false">临床协调</el-link>&nbsp;
            <el-link class='green' :underline="false">医学总监</el-link>&nbsp;
            <el-link class='green' :underline="false">医生</el-link>&nbsp;
            <el-link class='green' :underline="false">内科医生</el-link>&nbsp;
            <el-link class='green' :underline="false">中医</el-link>&nbsp;
            <el-link class='green' :underline="false">医学影像放射</el-link>&nbsp;
        </div>

        <el-row :gutter="20" style='margin-top: 20px'>
            <el-col :span="8">
                <div class='middle-left' style='margin-left: 20px;margin-top: 20px;'>
                    <el-card>
                        <dl>
                            <dd>
                                <i class="icon-arrow-right"></i>
                                <b style='font-size: 14px'>热门职位</b>&nbsp;
                                <el-link :underline="false" href="/c101250100-p210104/">药剂师</el-link>&nbsp;
                                <el-link :underline="false" href="/c101250100-p210401/">营养师</el-link>&nbsp;
                                <el-link :underline="false" href="/c101250100-p210105/">医疗器械研发</el-link>
                            </dd>
                            <hr class="style1_hr"/>
                            <div class="menu-line"></div>
                            <div class="menu-sub">
                                <ul>
                                    <li>
                                        <b style='font-size: 14px'>门诊部</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210120/">内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210501/">外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210119/">儿科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p211001/">妇科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">眼科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">耳鼻喉科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">口腔科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">皮肤科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">中医科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">针灸推拿科</el-link>
                                            <el-link :underline="false" href="/c101250100-p210118/">心理咨询室</el-link>
                                        </div>
                                    </li>
                                    <hr class="style1_hr"/>
                                    <li>
                                        <b style='font-size: 14px'>住院部</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210109/">呼吸内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210111/">消化内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210303/">泌尿内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210307/">心内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210103/">血液科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210306/">内分泌科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210302/">神经内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210305/">小儿科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210304/">感染科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210114/">普外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210113/">骨科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210104/">神经外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210112/">肝胆外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">泌尿外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">烧伤科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">妇科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">产科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">血透室</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">重症监护室</el-link>
                                        </div>
                                    </li>
                                    <hr class="style1_hr"/>
                                    <li>
                                        <b style='font-size: 14px'>急诊部</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210202/">内科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210201/">外科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210503/">妇产科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">儿科</el-link>
                                        </div>
                                    </li>
                                    <hr class="style1_hr"/>
                                    <li>
                                        <b style='font-size: 14px'>药房</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210404/">门诊药房</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210402/">急诊药房</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210403/">住院药房</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210499/">药房仓库</el-link>&nbsp;
                                        </div>
                                    </li>
                                    <hr class="style1_hr"/>
                                    <li>
                                        <b style='font-size: 14px'>收费室</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210108/">门诊收费窗口</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210117/">住院收费窗口</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210123/">急诊收费窗口</el-link>&nbsp;
                                        </div>
                                    </li>
                                    <hr class="style1_hr"/>
                                    <li>
                                        <b style='font-size: 14px'>化验室</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210121/">生化室</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210105/">检验室</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210122/">病理室</el-link>
                                        </div>
                                    </li>
                                    <hr class="style1_hr"/>
                                    <li>
                                        <b style='font-size: 14px'>放射科</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210803/">拍片室</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210802/">CT室</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210801/">透视室</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">磁共振室</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">ECT室</el-link>
                                        </div>
                                    </li>
                                    <hr class="style1_hr"/>
                                    <li>
                                        <b style='font-size: 14px'>其他医疗健康职位</b>
                                        <div class="text">
                                            <el-link :underline="false" href="/c101250100-p210701/">手术室</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">B超室</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">宣传科</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">防保人员</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">医保办</el-link>&nbsp;
                                            <el-link :underline="false" href="/c101250100-p210118/">人事科</el-link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </dl>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="block" style="margin-top: 20px;margin-left:10px;margin-right:10px;">
                    <el-carousel trigger="click" height="400px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3 class="medium">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <el-card shadow="hover" style="height:403px;">

                    <el-table :show-header="false" :data="todoList" style="width:100%;">
                        <el-table-column width="40">
                            <template slot-scope="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <div
                                    class="todo-item"
                                    :class="{'todo-item-del': scope.row.status}"
                                >{{scope.row.title}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column width="60">
                            <template>
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>



    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
export default {
    name: 'dashboard',
    data() {
        return {
            input3: '',
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

.style1_hr{
    margin-top: 15px;
    margin-bottom: 15px;
    border-top: 1px dashed #8c8b8b;
    border-bottom: 1px dashed #fff;
}

.button{
    border-radius: 6px;
    cursor: pointer;
    height: 33px;
    font-size: 14px;
    line-height: 12px;
    background: #3cac9b;
    color: #ffffff;
    -webkit-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    transition: all .3s ease-in;
}

.green{
    color: #3cac9b;
}

.link{
    margin-left: 30%;
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

.text>>>el-link{
    margin-top: 5px;
    /*margin-left: 5px;*/
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
.search>>el-input{
    border: 0;
    margin: 0;
}
.schart {
    width: 100%;
    height: 300px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;

    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

ul,li{
    list-style: none;
}


.card-emloyee{
    width: 20%;
    height: 40px;
}
</style>
