import vue from 'vue'
import{Button,Form,FormItem,Input,Message,Container,Header,Aside,Main,HandleSelect}from 'element-ui'
const element= {
  install:function(Vue) {
    vue.use(Button)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Message)
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Main)
    Vue.user(HandleSelect)
  }
}
export default element
