<template>
    <div class="login">
        <user-header></user-header>
        <mobile-login></mobile-login>
    </div>
</template>

<script>
import UserHeader from '@/components/User/UserHeader.vue'
import MobileLogin from '@/components/User/MobileLogin.vue'

export default {
    name:'User',
    components:{
        UserHeader,
        MobileLogin
    }
}
</script>

<style lang='scss' scoped>
</style>

