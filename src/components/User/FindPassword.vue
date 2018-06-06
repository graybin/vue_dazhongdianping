<template>
    <div>
        <user-header :loginName = 'loginName'></user-header>
        <div class="login_number">
            <span>86</span>
            <input type="text" placeholder="请输入手机号" v-model="phonenumber">
            <div @click="handleSend">发送验证码</div>
        </div>
        <div class="login_password">
            <span>验证码</span>
            <input type="text" placeholder="请输入验证码" v-model="checknumber">
        </div>
        <div  class="btn_login" @click="handleHand">提交</div>
    </div>
</template>

<script>
import UserHeader from '@/components/User/UserHeader.vue'
import jquery from 'jquery'
import '@/assets/script/key'

export default {
    name: 'NumberLogin',
    data() {
        return {
            loginName: '找回密码',
            phonenumber: '',
            checknumber: ''
        }
    },
    components: {
        UserHeader
    },
    methods: {
        handleSend() {
            var that = this
            Bmob.Sms.requestSmsCode({"mobilePhoneNumber": that.phonenumber} ).then(function(obj) {
                alert("验证码已发送，请注意查收。");
                }, function(err) {
                alert("验证码发送失败，请重试！");
            });
        },
        handleHand() {
            var dazhong = Bmob.Object.extend("dazhong");
            var query = new Bmob.Query(dazhong);
            var that = this;
            Bmob.Sms.verifySmsCode(this.phonenumber, this.checknumber).then(function(obj) {
                query.equalTo("phone", that.phonenumber);
                query.find({
                    success: function(results) {
                        that.$store.state.phone = that.phonenumber
                        if(!results.length){
                            alert('你是新用户，欢迎使用，请设置密码！')
                            that.$router.push('/checkpassword')
                        }
                        else{
                            that.$router.push('/checkpassword')
                        }
                    },
                    error: function(error) {
                    }
                });
            }, function(err) {
                alert("验证码输入错误,请重新输入。");
            });
        }
    }
}
</script>

<style lang="scss" scoped>
input{
        border: none;
        outline: none;
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
</style>