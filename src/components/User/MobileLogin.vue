<template>
    <div class="m_login">
        <div class="login_number">
            <span>86</span>
            <input type="text" placeholder="请输入手机号" v-model="phonenumber">
            <div @click="handleSend">发送验证码</div>
        </div>
        <div class="login_password">
            <span>验证码</span>
            <input type="text" placeholder="请输入验证码" v-model="checknumber">
        </div>
        <div class="login_footer">
            <div class="tip">
                未注册的手机号码验证后自动创建点评账户
            </div>
            <div  class="btn_login" @click="handleCheck">登录</div>
            <div class="link_normal">
                <div @click="handlenumberlogin">账号密码登录</div>
            </div>
        </div>     
    </div>
</template>

<script>
import jquery from 'jquery'
import '@/assets/script/key'

export default {
    name:'MobileLogin',
    data(){
        return{
            phonenumber:'',
            checknumber:''
        }
    },
    methods:{
        handleSend(){
            var number = this.phonenumber
            if(!number){
                alert('请输入你的手机号码');
            }
            if(number && number.length != 11){
                alert("请输入11位的手机号码")
            }
            if(number.length == 11){
                Bmob.Sms.requestSmsCode({"mobilePhoneNumber": number} ).then(function(obj) {
                    alert("验证码已发送，请注意查收。"); //
                    }, function(err){
                    alert("验证码发送失败，请重试。");
                });
            }
        },
        handleCheck(){
            var dazhong = Bmob.Object.extend("dazhong");
            var query = new Bmob.Query(dazhong);
            var that = this;
            Bmob.Sms.verifySmsCode(this.phonenumber, this.checknumber).then(function(obj) {
                query.equalTo("phone", that.phonenumber);
                query.find({
                    success: function(results) {
                        if(!results.length){
                            if(confirm('首次登录请设置密码。')){
                                if(!that.phonenumber && that.phonenumber.length != 11){
                                    alert('在填写验证码前请不要删除手机号码，请重新验证')
                                }
                                else{
                                    that.$store.state.phone = that.phonenumber
                                    that.$router.push('/checkpassword')    
                                }
                            }
                            else{
                                alert('不登录随便逛逛？')
                                that.$router.push('/')
                            }
                        }
                    },
                    error: function(error) {
                    }
                });
            }, function(err){
                alert("验证码输入错误,请重新输入。");
            });
        },
        handlenumberlogin(){
            this.$router.push('/numberlogin')
        }
    }

}
</script>

<style lang="scss" scoped>
.m_login{
    flex-direction: column;
    margin-top: 17px;
    font-size: 16px;
    background-color: #fff;

    input{
        outline:none;
        border:none;
    }

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
        }

        div{
            border: solid 1px #bbb;
            font-size: 14px;
            color: #333;
            padding: 0 10px;
            margin: 9px 10px 10px 0;
            line-height: 25px;
            height: 25px;
            display: inline-block;
            text-decoration: none;
            border-radius: 3px;
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
            padding-right: 4px;
        }

        input{
            padding: 10px 0 10px 10px;
            font-size: 15px;
            color: #333;
        }

    }
    .login_footer{

        .tip{
        color: #999;
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        margin-top: 5px;
        text-align: center;
        }

        .btn_login{
            line-height: 40px;
            color: #fff;
            background: #f63;
            border-radius: 4px;
            font-size: 14px;
            display: block;
            text-align: center;
            margin: 0 15px;
        }

        .link_normal{
            text-align: right;
            margin-top: 14.5px;

            div{
                color:gray;
                text-decoration: none;
                font-size: 14px;
                display: inline-block;
                margin-right: 15px;
            }
        }
    }
    
}
</style>


