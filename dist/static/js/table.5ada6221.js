(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["table"],{1116:function(t,e,o){"use strict";o("5e28")},"3e92":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{ref:"contentId",staticClass:"job-content"},[o("div",{staticClass:"company-wrapper"},[o("div",{staticClass:"company-body"},[o("div",{staticClass:"conpany-content"},[o("div",{staticClass:"choseBody"},[o("h5",[t._v("公司类型")]),o("div",{staticClass:"chose"},[o("span",{class:t.getClass(t.option1.check),on:{click:function(e){return t.choseAll(t.option1)}}},[t._v(t._s(t.option1.optionName))]),t._l(t.options.option1,(function(e){return o("span",{class:t.getClass(e.check),on:{click:function(o){return t.selectedOption(e)}}},[t._v("\n                                "+t._s(e.optionName)+"\n                            ")])}))],2)]),o("div",{staticClass:"choseBody"},[o("h5",[t._v("公司地点")]),o("div",{staticClass:"chose"},[o("span",{class:t.getClass(t.option3.check),on:{click:function(e){return t.choseAll(t.option3)}}},[t._v(t._s(t.option3.optionName))]),t._l(t.options.option3,(function(e){return o("span",{class:t.getClass(e.check),on:{click:function(o){return t.selectedOption(e)}}},[t._v("\n                                "+t._s(e.optionName)+"\n                            ")])}))],2)])])])]),o("div",{staticClass:"search",staticStyle:{"background-color":"white","padding-right":"10%","padding-left":"20%","padding-bottom":"10px"}},[o("el-input",{staticClass:"input-with-select",staticStyle:{width:"70%"},attrs:{clearable:"",placeholder:"请输入公司",size:"small"},model:{value:t.cinput,callback:function(e){t.cinput=e},expression:"cinput"}}),o("el-button",{staticClass:"button",attrs:{icon:"el-icon-search"},on:{click:t.searchCompanyByName}},[t._v("搜索")])],1),o("div",[o("ul",{staticClass:"job-items"},t._l(t.companies,(function(e){return o("li",{staticClass:"job-item",on:{click:function(o){return t.GoToCompany(e.company)}}},[o("p",{staticClass:"title-wrapper"},[o("span",{staticClass:"title"},[t._v(t._s(e.company))]),o("span",{staticClass:"price"},[t._v(t._s(e.companyLocation))])]),o("div",{staticClass:"clear"}),o("div",{staticClass:"content-wrapper"},[o("p",{staticClass:"content-middle"},[t._v("\n                            招聘专员 "+t._s(e.legalRepresentative)+"   "+t._s(e.companyType)+"\n                        ")]),o("p",{staticClass:"content-detail"},[o("i",{staticClass:"icon-location2"}),o("span",[t._v("\n                                成立时间  "+t._s(t._f("dateParse")(e.setupTime))+"\n                            ")])])])])})),0)])])])},n=[],i=(o("7f7f"),o("ac6a"),o("a481"),o("bc3a")),s=o.n(i),c=s.a.create({timeout:5e3});c.interceptors.request.use((function(t){return t}),(function(t){return console.log(t),Promise.reject()})),c.interceptors.response.use((function(t){if(200===t.status)return t.data;Promise.reject()}),(function(t){return console.log(t),Promise.reject()}));var p=c,l=function(t){return p({url:"./table.json",method:"get",params:t})},h={option1:[{optionName:"私立医院",check:!1,type:0},{optionName:"公立医院",check:!1,type:0}],option2:[,{optionName:"A轮",check:!1,type:0},{optionName:"B轮",check:!1,type:0},{optionName:"C轮",check:!1,type:0},{optionName:"D轮及以上",check:!1,type:0},{optionName:"已上市",check:!1,type:0},{optionName:"不需要融资",check:!1,type:0},{optionName:"0-20人",check:!1,type:1},{optionName:"20-99人",check:!1,type:1},{optionName:"100-499人",check:!1,type:1},{optionName:"500-999人",check:!1,type:1},{optionName:"1000-9999人",check:!1,type:1},{optionName:"10000人以上",check:!1,type:1}],option3:[{optionName:"北京",check:!1,type:2},{optionName:"上海",check:!1,type:2},{optionName:"淮南",check:!1,type:2},{optionName:"郑州",check:!1,type:2},{optionName:"合肥",check:!1,type:2},{optionName:"武汉",check:!1,type:2},{optionName:"长沙",check:!1,type:2},{optionName:"成都",check:!1,type:2}]},r={name:"basetable",data:function(){return{cinput:"",companies:[],option1:{optionName:"全部",check:!0,type:0},option2:{optionName:"全部",check:!0,type:1},option3:{optionName:"全部",check:!0,type:2},options:h,activeNames:["1"],query:{address:"",name:"",pageIndex:1,pageSize:10},tableData:[],multipleSelection:[],delList:[],editVisible:!1,pageTotal:0,form:{},idx:-1,id:-1}},created:function(){this.getData()},computed:{getChose:function(){var t=this.options.option1.filter((function(t){return!0===t.check})).length,e=(this.options.option2.filter((function(t){return!0===t.check})).length,this.options.option3.filter((function(t){return!0===t.check})).length);return t+e}},mounted:function(){var t=this.$route.params.value;this.getAllCompanies(),null!=t&&this.getRouterVal()},methods:{geyCompany:function(t){var e=this;"私立医院"==t&&this.$axios.post("http://115.29.204.107:8084/yibole/getAllCompanies").then((function(t){console.log(t.data),e.tableData=t.data.data,"私立医院"==e.tableData.companyType&&(e.companies=e.tableData,console.log(e.companies))})).catch((function(t){e.$message.error(t.message)})),this.$axios.post("http://115.29.204.107:8084/yibole/getAllCompanies").then((function(t){console.log(t.data),e.tableData=t.data.data,e.companies=t.data.data,console.log(e.positionList)})).catch((function(t){e.$message.error(t.message)}))},GoToCompany:function(t){"长沙好医院"==t?this.$router.push({name:"goodHospital",params:{com:t}}):"北京大学第一医院"==t?this.$router.push({name:"beijingFirstHospital",params:{com:t}}):"上海交通大学医学院附属瑞金医院"==t?this.$router.push({name:"shanghaiRuijinHospital",params:{com:t}}):"长沙皮肤医院"==t?this.$router.push({name:"changshaSkinHospital",params:{com:t}}):"湘雅医院"==t&&this.$router.push({name:"xiangYaHospital",params:{com:t}})},getAllCompanies:function(){var t=this;this.$axios.post("http://115.29.204.107:8084/yibole/getAllCompanies").then((function(e){console.log(e.data),t.tableData=e.data.data,t.companies=e.data.data,console.log(t.positionList)})).catch((function(e){t.$message.error(e.message)}))},getRouterVal:function(){var t=this,e=this.$route.params.value;this.$axios.post("http://115.29.204.107:8084/yibole/searchCompanyByName/"+e).then((function(e){console.log(e.data.data),t.tableData=e.data.data,t.companies=e.data.data,t.cinput.value=""})).catch((function(t){}))},searchCompanyByName:function(){var t=this;0==this.cinput.length?this.getAllCompanies():this.$axios.post("http://115.29.204.107:8084/yibole/searchCompanyByName/"+this.cinput.replace(/\s*/g,"")).then((function(e){console.log(e.data.data),t.tableData=e.data.data,t.companies=e.data.data,t.cinput.value=""})).catch((function(t){}))},resetChose:function(){this.option1.check=!0,this.option2.check=!0,this.option3.check=!0,this.options.option1.forEach((function(t){t.check=!1})),this.options.option2.forEach((function(t){t.check=!1})),this.options.option3.forEach((function(t){t.check=!1}))},getClass:function(t){if(t)return"checkClass"},choseAll:function(t){t.check=!0,0===t.type?this.options.option1.forEach((function(t){t.check=!1})):1===t.type?this.options.option2.forEach((function(t){t.check=!1})):2===t.type&&this.options.option3.forEach((function(t){t.check=!1}))},selectedOption:function(t){t.check=!t.check,t.check&&(0===t.type?this.option1.check=!1:this.option3.check=!1),"私立医院"==t.optionName&&this.$axios.post("http://115.29.204.107:8084/yibole/getAllCompanies").then((function(t){console.log(t.data),that.tableData=t.data.data,"私立医院"==that.tableData.companyType&&(that.companies=that.tableData,console.log(that.companies))})).catch((function(t){that.$message.error(t.message)}))},getData:function(){var t=this;l(this.query).then((function(e){console.log(e),t.tableData=e.list,t.pageTotal=e.pageTotal||50}))},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},handleDelete:function(t,e){var o=this;this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){o.$message.success("删除成功"),o.tableData.splice(t,1)})).catch((function(){}))},handleSelectionChange:function(t){this.multipleSelection=t},delAllSelection:function(){var t=this.multipleSelection.length,e="";this.delList=this.delList.concat(this.multipleSelection);for(var o=0;o<t;o++)e+=this.multipleSelection[o].name+" ";this.$message.error("删除了".concat(e)),this.multipleSelection=[]},handleEdit:function(t,e){this.idx=t,this.form=e,this.editVisible=!0},saveEdit:function(){this.editVisible=!1,this.$message.success("修改第 ".concat(this.idx+1," 行成功")),this.$set(this.tableData,this.idx,this.form)},handlePageChange:function(t){this.$set(this.query,"pageIndex",t),this.getData()}}},u=r,m=(o("1116"),o("2877")),d=Object(m["a"])(u,a,n,!1,null,"4178ea73",null);e["default"]=d.exports},"5e28":function(t,e,o){}}]);