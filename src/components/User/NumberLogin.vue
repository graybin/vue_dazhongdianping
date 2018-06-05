<template>
    <div class="number_login">
        <div class="user_header">
            <router-link to="/user" class="uh_left">&lt;</router-link> 
            <div class="uh_right">{{headername}}</div>
        </div>
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
                <router-link to="/numberlogin">忘记密码？</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/script/key.js'

export default {
    name:'NumberLogin',
    data() {
        return {
            headername:'账号密码登录',
            number:'',
            password:''
        }
    },
    methods: {
        handleLogin(){
            var GameScore = Bmob.Object.extend("GameScore");
            var gameScore = new GameScore();
            gameScore.set('', this.password);
            gameScore.save(null, {
            success: function(object) {
                alert("create object success, object id:"+object.id);
            },
            error: function(model, error) {
                alert("create object fail");
            }
            });
        }
    }
}
</script>


<style lang="scss" scoped>
.number_login{

    .user_header{
        display: flex;
        height: 45px;
        line-height: 45px;
        background: #fcfcfc;
        border-bottom: 1px solid #f63;

        .uh_left{
            text-decoration: none;
            float: left;
            color:#f63;
            font-size:25px;
            margin-left: 15px;
        }

        .uh_right{
            flex:1;
            display: inline-block;
            text-align: center;
            font-size: 18px;
        }
    }
    
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

            a{
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

