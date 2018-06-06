<template>
    <div class="user_header">
        <div to="/" class="uh_left" @click="handleBack">&lt;</div> 
        <div class="uh_right">{{loginName}}</div>
    </div>
</template>

<script>
export default {
    name: 'UserHeader',
    props: {
        loginName: String
    },
    data() {
        return {
            headername:''
        }
    },
    methods: {
        handleBack() {
            this.$router.go(-1);
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

