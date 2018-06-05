<template>
    <div>
        <user-header :loginName = 'loginName'></user-header>
        <div class="number_form">
            <div class="login_number">
                <span>密码</span>
                <input type="text" placeholder="请输入密码" v-model="password">
            </div>
            <div class="login_password">
                <span>确定密码</span>
                <input type="text" placeholder="再次确定密码" v-model="passwordc">
            </div>
        </div>
        <div  class="btn_login" @click="handleCommit">提交</div>
    </div>
</template>

<script>
import UserHeader from '@/components/User/UserHeader.vue'
import jquery from 'jquery'
import '@/assets/script/key'

export default {
    name: 'CheckPassword',
    data() {
        return {
            loginName: '设置密码',
            password: '',
            passwordc: ''
        }
    },
    components: {
        UserHeader
    },
    methods: {
        handleCommit(){
            var that = this
            var phonenumber = this.$store.state.phone
            if (this.password && this.password === this.passwordc){
                var Dazhong = Bmob.Object.extend("dazhong");
                var dazhong = new Dazhong();
                dazhong.set("phone", phonenumber);
                dazhong.set("password", that.password);
                dazhong.save(null, {
                    success: function(dazhong) {
                        that.$store.state.phone = ''
                        alert('密码设置成功!即将回到首页。')
                        that.$router.push('/')
                    },
                    error: function(gameScore, error) {
                        alert('抱歉！本次密码设置失败，请重试。');
                    }
                });
            }
            else {
                alert('密码为空或两次密码输入不一致，请检查后提交！')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
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
            padding-right: 8px;
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
</style>


