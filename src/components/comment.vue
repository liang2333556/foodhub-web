<template>
  <div class="comment">
    <div id="app2" class="input" >
      <el-form ref="form" :model="form"  size="large" >
        <el-form-item  id="content" >
          <el-input  class="comment" type="textarea" v-model="form.content" ></el-input>
        </el-form-item>
        <el-form-item >
          <el-button class="submit" type="primary" @click="onSubmit" >Submit your comment</el-button>
        </el-form-item>
      </el-form>
    </div>
        <div class="index-board-list">
          <div class="index-board-item-inner" :data="Essay">
            <div  v-for="comment in Essay.comment" :key="comment.id">
              <h2>{{comment.author}} say {{comment.content}}</h2>
            </div>
          </div>
        </div>
  </div>
</template>
<script>
/* eslint-disable */
    import EssayService from '@/services/EssayService'
    import commentService from '@/services/commentService'
    import userService from '@/services/userService'
    export default {
        data() {
            return {
                form: {
                    content:'',
                },
                token:localStorage.getItem('Authorization'),
                username:'',
                essay_id:'',
                Essay:[],
                comment:[],
                author:'',
                content:'',

            }
        },
        created () {
            this.loadusername(this.token);
            this.loadEssay();

        },

        methods: {
            onSubmit() {
                let comment = {
                    essay_id: this.$router.params,
                    content: this.form.content,
                    author:this.username,
                }
                commentService.postComment(comment)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })

                alert('submit!');
            },
            goTo(path) {
                this.$router.replace(path);
            },
            loadEssay :function(){
                EssayService.fetchEssay(this.$router.params)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.temp = response.data
                        this.Essay = this.temp[0]
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
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
            },

        }
    }
</script>
<style>
  #app2 {
    width: 30%;
    position: fixed;
   right: 90px;
    top: 90px;

  }
  .index-board-item-inner{
    font-size: x-small;
    padding:0 0 0px 50px;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
    padding-top: 3px;
    left: 800px;
    padding-right: 80px;
  }
  .index-board-item {
    float: left;
    text-align: left;
    text-emphasis-position: left;
    width: 100%;
    background:silver;
    box-shadow: #ddd;
    padding:5%;
    margin-right: 20%;
    margin-bottom: 30px;
    border-radius: 20px 20px 20px 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
    line-height: 1.6;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }

  .VueCarousel-slide img {
    width: 100%;
  }
  .comment{
    padding-left: 50px;
    -moz-text-size-adjust: inherit;
  }
  .index-board-item-inner{
    float: left;
    text-align: left;
    width: 100%;
    background:silver;
    box-shadow: #ddd;
    padding:5%;
    margin-right: 20%;
    margin-bottom: 30px;
    border-radius: 20px 20px 20px 20px;
  }
  .index-board-item{
    padding: 5%;

  }
  .index-board-list {
    overflow: hidden;
    padding-top: 3px;
    padding-left: 230px;
    padding-right: 80px;
  }
</style>

