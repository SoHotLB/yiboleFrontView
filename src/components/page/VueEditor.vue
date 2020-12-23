<template>
    <div>
        <div class="container">
            <p style='padding-bottom: 10px'>修改密码</p>
            <el-input style='padding: 10px'>原密码</el-input>
            <el-input style='padding: 10px'>新密码</el-input>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
        </div>
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
</style>
