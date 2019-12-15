<template>
  <div class="food">
    <div id="app1">
      <el-form ref="form" :model="form"  size="large">
        <el-form-item label="Tell me the food you want to buy in this website~" id="type">
          <el-input  v-model="form.type"></el-input>
        </el-form-item>
<!--        <el-form-item label="Content" :id="content" style="margin-top:-450px" >-->
<!--          <el-input   type="textarea" v-model="form.content" ></el-input>-->
<!--        </el-form-item>-->
        <el-form-item  style="position: fixed;top:200px; left:800px" >
          <el-button type="primary" @click="onSubmit" >Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
    import FoodService from '@/services/FoodService'
import userService from '@/services/userService'

    export default {
        data() {
            return {
                form: {
                    type:'',
                    likes:0,
                },
                token:localStorage.getItem('Authorization'),
                username:'',            }
        },
        created () {
            this.loadusername(this.token)
        },
        methods: {
            onSubmit() {
                let food = {
                    type:this.form.type,
                    likes:this.form.likes,
                    author:this.username,
                }
                FoodService.postFood(food)
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
  #app1 {
    width: 30%;
    margin: 0 auto;
  }
  .essay{
    padding-left: 50px;
    -moz-text-size-adjust: inherit;
  }


</style>
