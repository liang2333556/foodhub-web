/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import * as VueGoogleMaps from 'vue2-google-maps'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import axios from 'axios'
import store from './store'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import QuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);
Vue.use(QuillEditor)
Vue.use(VueSweetalert2)
Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.config.debug = true
Vue.use(ElementUI, {locale})
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAlgQN14RWGqIWHea-iJlWwVtEMfpFNp14',//申请的谷歌地图的key
    libraries: 'places,drawing,visualization', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
});

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})

//异步请求前在header里加入token
axios.interceptors.request.use(
  config => {
    if(config.url==='http://localhost:3000/api/user/accesstoken'||config.url==='http://localhost:3000/api/signup'){  //如果是登录和注册操作，则不需要携带header里面的token
    }else{
      if (localStorage.getItem('Authorization')) {
        config.headers.Authorizatior = localStorage.getItem('Authorization');
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });
//异步请求后，判断token是否过期
axios.interceptors.response.use(
  response =>{
    return response;
  },
  error => {
    if(error.response){
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('Authorization');
          this.$router.push('/login');
      }
    }
  }
)
//异步请求前判断请求的连接是否需要token
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    console.log("我是浏览器本地缓存的token: "+token);

    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
