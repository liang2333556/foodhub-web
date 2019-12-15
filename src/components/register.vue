<template>
  <div id="login" align="center">
    <el-row :gutter="20">
      <el-col :span="7" :offset="8">
        <div class="grid-content bg-purple">
          <h1 align="center">Sign in</h1><br>
        </div>
      </el-col>
      <el-col :span="6" :offset="8">
        <div class="grid-content bg-purple">

          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px"
                   class="demo-ruleForm">
            <el-form-item label="Username" prop="account">
              <el-input type="text" v-model="ruleForm2.account" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">submit</el-button>
              <el-button @click="resetForm('ruleForm2')">reset</el-button>
              <el-button type="success" @click="login">login</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
    import { mapMutations } from 'vuex';

    export default {
        name: 'login',
        data () {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Input your password'))
                } else {
                    /*if (this.ruleForm2.pass !== '') {
                      this.$refs.ruleForm2.validateField('pass')
                    }*/
                    callback()
                }
            }
            var validateAccount = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Input your username'))
                } else {
                    /* if (this.ruleForm2.account !== '') {
                       this.$refs.ruleForm2.validateField('account')
                     }*/
                    callback()
                }
            }
            return {
                userToken:"",
                ruleForm2: {
                    pass: '',
                    account: '',
                },
                rules2: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    account: [
                        {validator: validateAccount, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            ...mapMutations(['register']),
            submitForm (formName) {
                let _this=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios({
                            method: 'post',
                            url: 'http://localhost:3000/api/signup',

                            data: {
                                'name': this.ruleForm2.account,
                                'password': this.ruleForm2.pass,
                            },
                            headers:{
                                "Authorization":" ",

                            }
                        }).then(res => {  //res是返回结果
                            this.$router.push('/login');
                            alert('Sign in successfully');
                        }).catch(err => { //请求失败就会捕获报错信息
                            console.log('Fail to connect server');
                            console.log(err);
                        })
                    } else {
                        console.log('Error information')
                        return false
                    }
                })
            },
            resetForm (formName) {
                this.$refs[formName].resetFields()
            },
            login () {
                this.$router.push('/login')
            }
        },
    }
</script>
