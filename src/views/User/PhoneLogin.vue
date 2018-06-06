<template>
    <div class="login">
        <user-header :loginName = 'loginName'></user-header>
        <mobile-login></mobile-login>
    </div>
</template>

<script>
import UserHeader from '@/components/User/UserHeader.vue'
import MobileLogin from '@/components/User/MobileLogin.vue'

export default {
    name: 'PhoneLogin',
    data() {
        return {
            loginName: '手机快捷登录'
        }
    },
    components: {
        UserHeader,
        MobileLogin
    }
}
</script>

<style lang='scss' scoped>
</style>

