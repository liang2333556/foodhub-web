<template>
  <div id="app1">
  <div class="index-board-list">
    <img src="../assets/200.gif"  style="position: fixed; left:1200px"/>
    <div
      class="index-board-item"
      v-for="item in Essays"  :key="item.id"
    >
      <div class="index-board-item-inner" :data="Essays">
<!--        <h2 class="text1">author:     {{ item.author}}</h2>-->
        <h2 class="text2">title:      {{ item.title}}</h2>
        <h2 class="text2">author:      {{ item.author}}</h2>
        <h2>content:</h2><h2 class="text3" v-html="item.content">     {{ item.content}}</h2>
        <h2 class="text3">date:     {{ item.date}}</h2>
<!--        <div v-for="comment in item.comment" :key="comment.id">-->
<!--          <h2>{{comment.author}} say {{comment.content}}</h2>-->
<!--        </div>-->
        <h2 class="fa fa-heart" @click="upvote(item._id)" >likes:  {{ item.likes}}</h2>
        <h2><el-button  class="button" type="primary" @click="Comment(item._id),goTo('comment')">view more comment here>>></el-button></h2>
<!--        <h2 @click="Comment(item._id),goTo('comment')">view more comment here>>></h2>-->
<!--        <h2><el-button  type="primary" @click="goTo('WriteComment')">Write Your comment here>>></el-button></h2>-->

      </div>
    </div>
  </div>
  </div>
</template>
<script>
/* eslint-disable */
    import EssayService from '@/services/EssayService'
import comment from "./comment";

    export default {
        name: 'Essays',
        data() {
            return {
                errors: [],
                Essays: [],
                comment:[],
                id:'',
                author:'',
                content:'',

            }
        },
        created () {
            this.loadEssays()
        },

        methods: {
            goTo(path) {
                this.$router.replace(path);
            },
            loadEssays :function(){
                EssayService.fetchEssays()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.Essays = response.data
                        console.log(this.Essays)
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },

            upvote: function (id) {
                EssayService.upvoteEssay(id)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.loadEssays()
                        console.log(response)
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            Comment: function (id) {
                this.$router.params = id
                this.$router.push({component:"comment"})
            },


        }
    }
</script>

<style>
  #app1 {
    width: 90%;
    margin: 0 auto;
  }
  .text1{
    padding-left: 80%;
  }
  .index-board-item{
    padding: 5%;

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
    padding-left: 230px;
    padding-right: 80px;
  }
  .index-board-item {
    float: left;
    text-align: left;
    width: 9000%;
    background:silver;
    box-shadow: #ddd;
    padding:5%;
    margin: 0 auto;
    margin-left:0px;
    margin-bottom: 50px;
    border-radius: 20px 20px 20px 20px;
  }
  .index-board-item-inner {
    width:8000%;
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

</style>

