<template>
    <div class="user_header">
        <router-link to="/" class="uh_left">&lt;</router-link> 
        <div class="uh_right">{{headername}}</div>
    </div>
</template>

<script>
export default {
    name:'UserHeader',
    data(){
        return{
            headername:'手机号快速登录'
        }
    }
}
</script>

<style lang="scss" scoped>
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
</style>

