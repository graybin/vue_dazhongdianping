<template>
    <div class="number_login">
        <user-header :loginName = 'loginName'></user-header>
        <div class="number_form">
            <div class="login_number">
                <span>86</span>
                <input type="text" placeholder="手机号" v-model="number">
            </div>
            <div class="login_password">
                <span>密码</span>
                <input type="text" placeholder="密码" v-model="password">
            </div>
        </div>
        <div class="login_footer">
            <div  class="btn_login" @click="handleLogin">登录</div>
            <div class="link_normal">
                <div @click="handleReset">忘记密码？</div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/script/key.js'
import UserHeader from '@/components/User/UserHeader.vue'
import jquery from 'jquery'
import '@/assets/script/key'

export default {
    name: 'NumberLogin',
    data() {
        return {
            number: '',
            password: '',
            loginName: '账号密码登录'
        }
    },
    components: {
        UserHeader  
    },
    methods: {
        handleLogin() {
            var that = this
            var Dazhong = Bmob.Object.extend("dazhong");
            var query = new Bmob.Query(Dazhong);
            query.equalTo("phone", this.number);
            query.equalTo("password", this.password);
            query.find({
                success: function(results) {
                    if(results.length){
                        alert('登录成功，即将回到首页！')
                        that.$router.push('/')
                    }
                    else{
                        alert('您的账号密码输入不一致或尚未注册！')
                    }
                },
                error: function(error) {
                    alert("网络或Bmob原因登录失败");
                }
            });
        },
        handleReset() {
            this.$router.push('/findpassword')
        }
    }
}
</script>


<style lang="scss" scoped>
.number_login{

    
    .number_form{
        .login_number{
            height: 45px;
            line-height: 45px;
            border-bottom: 1px solid #e0e0e0;
            padding-left: 15px;

            span{
                display: inline-block;
                height: 22px;
                line-height: 22px;
                border-right: 1px solid #e0e0e0;
                padding-right: 35px;
            }

            input{
                padding: 10px 0 10px 10px;
                font-size: 15px;
                color: #333;
                border: none;
                outline: none;
            }

        }

        .login_password{
            height:45px;
            line-height: 45px;
            padding-left: 15px;

            span{
                display: inline-block;
                height: 22px;
                line-height: 22px;
                border-right: 1px solid #e0e0e0;
                padding-right: 23px;
            }

            input{
                padding: 10px 0 10px 10px;
                font-size: 15px;
                color: #333;
                border:none;
                outline: none;
            }

        }
    }
    .login_footer{

        .btn_login{
            line-height: 40px;
            color: #fff;
            background: #f63;
            border-radius: 4px;
            font-size: 14px;
            display: block;
            text-align: center;
            margin: 15px 15px 0;
        }

        .link_normal{
            text-align: left;;
            margin-top: 14.5px;

            div{
                color:gray;
                text-decoration: none;
                font-size: 14px;
                display: inline-block;
                margin-left: 15px;
            }
        }
    }
}
</style>

