/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Foods from '@/components/Foods'
import Header from '@/components/Header'
import Products from '@/components/Products'
import Essays from '@/components/Essays'
import login from '@/components/login'
import register from '@/components/register'
import googlemap from '@/components/googlemap'
import video from '@/components/video'
import Order from '@/components/Order'
import ShareEssay from '@/components/ShareEssay'
import ShareFood from '@/components/ShareFood'
import comment from '@/components/comment'
// import WriteComment from '@/components/WriteComment'
// import ManageFood from '@/components/ManageFood'
import axios from "axios";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/googlemap',
      name: 'googlemap',
      component: googlemap,
    },
    {
      path: '/foods',
      name: 'Foods',
      component: Foods,

    },

    {
      path: '/ShareEssay',
      name: 'ShareEssay',
      component: ShareEssay,
      meta: {
        requireAuth: true, // 判断是否需要登录
      },
    },

    // {
    //   path: '/ManageFood',
    //   name: 'ManageFood',
    //   component: ManageFood,
    //   meta: {
    //     requireAuth: true, // 判断是否需要登录
    //   },
    //   props: true
    // },
    {
      path: '/Products',
      name: 'Products',
      component: Products,
      meta: {
        requireAuth: true, // 判断是否需要登录
      },
      props: true
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header,
      props: true
    },

    {
      path: '/Essay',
      name: 'Essays',
      component: Essays,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Order',
      name: 'Order',
      meta: {
        requireAuth: true, // 判断是否需要登录
      },
      component: Order
    },
    {
      path: '/register',
      name: 'register',

  component: register
},
    {
      path: '/video',
      name: 'video',

      component: video
    },
    {
      path: '/ShareFood',
      name: 'ShareFood',
      meta: {
        requireAuth: true, // 判断是否需要登录
      },
      component: ShareFood
    },
    {
      path: '/comment',
      name: 'comment',
      meta: {
        requireAuth: true, // 判断是否需要登录
      },
      component: comment
    },
    // {
    //   path: '/WriteComment',
    //   name: 'WriteComment',
    //   meta: {
    //     requireAuth: true, // 判断是否需要登录
    //   },
    //   component: WriteComment
    // }
  ],
});
