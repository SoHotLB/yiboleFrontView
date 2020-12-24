<template>
    <div class='job-content'>
<!--        <div class="container">-->
<!--            <p style='padding-bottom: 10px'>修改密码</p>-->
<!--            <el-input style='padding: 10px'>原密码</el-input>-->
<!--            <el-input style='padding: 10px'>新密码</el-input>-->
<!--            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>-->
<!--        </div>-->
      <el-card class="box-card">
<!--        <div v-for="o in 4" :key="o" class="text item">-->
<!--          {{'列表内容 ' + o }}-->
<!--        </div>-->
        <el-divider>个人信息</el-divider>
        <div style='padding-left: 20%'>
        <div class='text item'><i class='el-icon-paperclip'></i>我的昵称：</div>
        <div class='text item'><i class='el-icon-paperclip'></i>账号：</div>
        <div class='text item'><i class='el-icon-paperclip'></i>性别：</div>
        <div class='text item'><i class='el-icon-paperclip'></i>年龄：</div>
        <div class='text item'><i class='el-icon-paperclip'></i>是否结婚：</div>
        <div class='text item'><i class='el-icon-paperclip'></i>地址：</div>
        <div class='text item'><i class='el-icon-paperclip'></i>电话：</div>
        <div class='text item'><i class='el-icon-paperclip'></i>邮箱：</div>
        <div class='text item'><i class='el-icon-paperclip'></i>学校：</div>
        <div class='text item'><i class='el-icon-paperclip'></i>学历：</div>
        <div class='text item'><i class='el-icon-paperclip'></i>专业：</div>
        <div class='text item'><i class='el-icon-paperclip'></i>毕业时间：</div>
        </div>
      </el-card>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
      name: 'editor',
      data: function() {
        return {
          content: '',
          editorOption: {
            placeholder: 'Hello World'
          }
        }
      },
      components: {
          quillEditor
      },
      methods: {
        onEditorChange({ editor, html, text }) {
            this.content = html;
        },
        submit() {
          console.log(this.content);
          this.$message.success('提交成功！');
        }
      }
    }
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
    .editor-btn{
        margin-top: 20px;
    }
    .container{
      position:fixed;
      top:60px;
      bottom:48px;
      left:0;
      font-size:20px;
      width:100%;
    }
    .text {
      font-size: 14px;
    }

    .item {
      padding: 18px 0;
    }

    .box-card {
      width: 100%;
      position: relative;
      margin: auto;
    }
</style>
