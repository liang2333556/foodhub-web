<template>
  <el-row class="tac">
    <el-col :span="30">
      <h1>FoodHub</h1>
      <el-menu
        default-active="2"
        background-color="darkslategray"
        text-color="yellow"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-tableware"></i>
            <span>Foods</span>
          </template>
            <el-menu-item class="1-1" index="1-1" @click="goTo('/ShareFood')">Share foods</el-menu-item>
            <el-menu-item class="1-2" index="1-2" @click="goTo('/Foods')">View foods</el-menu-item>
<!--           <el-menu-item index="1-3" @click="goTo('/ManageFood')">Manage Your foods</el-menu-item>-->
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-tableware"></i>
            <span>Essay</span>
          </template>
          <el-menu-item class="1-3" index="1-1"  @click="goTo('/ShareEssay')" >Share Essay</el-menu-item>
          <el-menu-item class="1-4" index="1-2" @click="goTo('/Essay')">View Essays</el-menu-item>
<!--          <el-menu-item index="1-3">Manage Your Essays</el-menu-item>-->
        </el-submenu>
        <el-menu-item  @click="goTo('/Order')">
          <i class="el-icon-s-order"></i>
          <span slot="title">Order</span>
        </el-menu-item>
        <el-menu-item index="/index" @click="goTo('/index')">
          <i class="el-icon-service"></i>
          <span slot="title">Service Center</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="darkslategray"
          text-color="yellow"
          active-text-color="olive">
          <el-menu-item index="1" @click="goTo('/')">
            <i class="el-icon-s-home"></i>
            Home</el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-goods"></i>

              Shop</template>
            <el-menu-item class="2-1" index="2-1"  @click="goTo('/Products')">Popular Products</el-menu-item>
            <el-menu-item class="2-2" index="2-2" @click="goTo('/googlemap')">Local Foods</el-menu-item>
<!--            <el-menu-item index="2-3">National Foods</el-menu-item>-->
          </el-submenu>
          <el-menu-item index="3" @click="goTo('/video')">
            <i class="el-icon-video-camera-solid" ></i>
            Video</el-menu-item>
          <el-menu-item index="4"  @click="goTo('/googlemap')">
            <i class="el-icon-fork-spoon" ></i>
            Restaurants</el-menu-item>
          <el-menu-item index="5"></el-menu-item>
          <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner">
            <i class="el-icon-user-solid">{{username}}</i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div @click="goTo('/login')"><span style="color:olive;font-size: 14px;">login</span></div>
              </el-dropdown-item>
              <button type="button"  class="btn btn-danger" @click="exit">logout</button>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu>
      </el-header>
    </el-container>
    <router-view></router-view>
  </el-row>

</template>

<script>
/* eslint-disable */
import userService from '@/services/userService'

    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                username:'',
                token:localStorage.getItem('Authorization')
            };
        },
        created () {
            console.log(this.token)
            this.loadusername(this.token)
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            goTo(path) {
                this.$router.replace(path);
            },
             exit(){
                 localStorage.removeItem('Authorization');
             },
            loadusername(token) {
                userService.ShowUser(token)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.username= response.data.username
                        console.log(this.username)
                    })
                    .catch(error => {
                        // this.errors.push(error)
                        // console.log(error)
                    })
            }
        }
    };
</script>

<style scoped>

  .el-menu-vertical-demo{
    position: fixed;
    top: 90px;
  }
  .el-menu-demo{
    padding-left: 10px;
  }
  .el-icon-s-goods{
    color:white;
  }

  .el-icon-user-solid{
    padding-right:60px;
    color: #dddddd;
    font-size: x-large;
      }
.el-icon-video-camera-solid{
  color: white;
}
.el-icon-fork-spoon{
  color:white;
}


  .el-col-12{
    width: 20%;
  }
  .el-menu {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
