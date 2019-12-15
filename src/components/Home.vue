<template>
  <div class="hero">
    <h1 class="vue-title">Welcome to FoodHub!</h1>
    <h2 style="color: antiquewhite">Share the website here!</h2>
    <social-sharing url="http://foodhub.surge.sh/#/"
                    title="Welcome to invite leon's website"
                    description="Find more foods and cooking ideas here@_@"
                    inline-template>
      <div>
        <network network="facebook">
          <i class="fa fa-facebook"></i> Facebook
        </network>
        <network network="googleplus">
          <i class="fa fa-google-plus"></i> Google +
        </network>

        <network network="linkedin">
          <i class="fa fa-linkedin"></i> LinkedIn
        </network>
        <network network="twitter">
          <i class="fa fa-twitter"></i> Twitter
        </network>
        <network network="whatsapp">
          <i class="fa fa-whatsapp"></i> Whatsapp
        </network>
      </div>
    </social-sharing>
    <img src="../assets/200.gif" style="position: fixed;right: 10px"/>
    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>Please take care of yourself~</i></b>
                      <p>You can have a best experience here~</p>
                      <p>Please login before you do everything</p>
        </td>
        <td>
                      <img src="../assets/pic.gif"/>
        </td>
      </tr>
    </table>
<!--    <p class="lead">This is the homepage of your <b>MEVN</b> Web app</p>-->
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length - 1].img" alt="">
        </li>
        <li  v-for="(item, index) in sliders" :key="index">
          <img :style="{width:imgWidth+'px'}" :src="item.img" alt="">
        </li>
        <li>
          <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt="">
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(600, 1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>
        </li>
        <li class="right" @click="move(600, -1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>
        </li>
      </ul>
      <ul class="dots">
        <li v-for="(dot, i) in sliders" :key="i"
            :class="{dotted: i === (currentIndex-1)}"
            @click = jump(i+1)
        >
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
/* eslint-disable */
    export default {
        name: 'slider',
        props: {
            initialSpeed: {
                type: Number,
                default: 30
            },
            initialInterval: {
                type: Number,
                default: 3
            }
        },
        data () {
            return {
                sliders:[
                    {
                        img:'https://i.pinimg.com/564x/af/38/7e/af387ecfbd4b3c0ca188322ec7ce795c.jpg'
                    },
                    {
                        img:'https://i.pinimg.com/564x/6c/a6/6d/6ca66ddddedf67c3a0d67030ba7b0224.jpg'
                    },
                    {
                        img:'https://i.pinimg.com/564x/82/e7/ad/82e7ad9c8e0ad6c81450c991101f075a.jpg'
                    },
                    {
                        img:'https://i.pinimg.com/564x/23/c6/32/23c632369de67f22da070954670ad9d4.jpg'
                    },
                    {
                        img:'https://i.pinimg.com/564x/9f/df/87/9fdf87ba1e91ba737c06e78e64792e7a.jpg'
                    },
                ],
                imgWidth:600,
                currentIndex:1,
                distance:-600,
                transitionEnd: true,
                speed: this.initialSpeed
            }
        },
        computed:{
            containerStyle() {
                return {
                    transform:`translate3d(${this.distance}px, 0, 0)`
                }
            },
            interval() {
                return this.initialInterval * 1000
            }
        },
        mounted() {
            this.init()
        },
        methods:{
            init() {
                this.play()
                window.onblur = function() { this.stop() }.bind(this)
                window.onfocus = function() { this.play() }.bind(this)
            },
            move(offset, direction, speed) {
                console.log(speed)
                if (!this.transitionEnd) return
                this.transitionEnd = false
                direction === -1 ? this.currentIndex += offset/600 : this.currentIndex -= offset/600
                if (this.currentIndex > 5) this.currentIndex = 1
                if (this.currentIndex < 1) this.currentIndex = 5
                const destination = this.distance + offset * direction
                this.animate(destination, direction, speed)
            },
            animate(des, direc, speed) {
                if (this.temp) {
                    window.clearInterval(this.temp);
                    this.temp = null ;
                }
                this.temp = window.setInterval(() => {
                    if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
                        this.distance += speed * direc
                    } else {
                        this.transitionEnd = true
                        window.clearInterval(this.temp)
                        this.distance = des
                        if (des < -3000) this.distance = -600
                        if (des > -600) this.distance = -3000
                    }
                }, 20)
            },
            jump(index) {
                const direction = index - this.currentIndex >= 0 ? -1 : 1;
                const offset = Math.abs(index - this.currentIndex) * 600;
                const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed ;
                this.move(offset, direction, jumpSpeed)
            },
            play() {
                if (this.timer) {
                    window.clearInterval(this.timer)
                    this.timer = null
                }
                this.timer = window.setInterval(() => {
                    this.move(600, -1, this.speed)
                }, this.interval)
            },
            stop() {
                window.clearInterval(this.timer)
                this.timer = null
            }
        }
    }
</script>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }

{
box-sizing: border-box;

}
ol,ul{
list-style: none;
}
#slider{
text-align: center;
  padding-left: 700px;
}
.window{
position:relative;
width:400px;
height:300px;
margin:0 auto;
overflow:hidden;
padding-top: 0px;
padding-right: 450px;
}
.container{
display:flex;
position:absolute;
}
.left, .right{
position:absolute;
top:50%;
transform:translateY(-50%);
width:50px;
height:50px;
background-color:rgba(0,0,0,.3);
border-radius:50%;
cursor:pointer;
}
.left{
left:3%;
padding-left:12px;
padding-top:10px;
}
.right{
right:3%;
padding-right:12px;
padding-top:10px;
}
img{
user-select: none;
}
.dots{
position:absolute;
bottom:10px;
left:50%;
transform:translateX(-50%);
}
.dots li{
display:inline-block;
width:15px;
height:15px;
margin:0 3px;
border:1px solid white;
border-radius:50%;
background-color:#333;
cursor:pointer;
}
.dots .dotted{
background-color:orange;
}
</style>
