<template>
<div class="essay">
  <div id="app2">
  <el-form ref="form" :model="form"  size="large">
    <el-form-item label="Title" id="title"  >
      <el-input  v-model="form.title"></el-input>
    </el-form-item>
<!--  <el-form-item label="Content" id="content"  >-->
    <quill-editor  type="textarea" v-model="form.content" ></quill-editor>
<!--    <el-input   type="textarea" v-model="form.content" ></el-input>-->
<!--  </el-form-item>-->
  <el-form-item >
    <el-button type="primary" @click="onSubmit" >Submit</el-button>
  </el-form-item>
</el-form>
  </div>
  </div>
</template>
<script>
/* eslint-disable */
    import EssayService from '@/services/EssayService'
import userService from '@/services/userService'

    export default {
        data() {
            return {
                form: {
                        title:this.title,
                        content:this.content,
                        likes:0,
                },
                token:localStorage.getItem('Authorization'),
                username:'',
            }
        },
        created () {
            this.loadusername(this.token)
        },
        methods: {
            onSubmit() {
                let essay = {
                    title: this.form.title,
                    content: this.form.content,
                    likes:this.form.likes,
                    author:this.username,
                }
                EssayService.postEssay(essay)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })

                alert('submit!');
            },
            loadusername(token) {
                userService.ShowUser(token)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.username= response.data.username
                        console.log(this.username)
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            }
        }
    }
</script>
<style>
  #app2 {
    width: 60%;
    margin: 0 auto;

    }
  .essay{
    padding-left: 50px;
    -moz-text-size-adjust: inherit;
  }


</style>
