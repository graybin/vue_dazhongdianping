<template>
    <div class="CS">
        <div class="CS-header">
            <router-link class="CS-back" to="/city">&lt;</router-link>
            <input type="text" placeholder="输入城市名查询" v-model="value">
        </div>
        <div class="fix-box"></div>
        <div class="key_blank" v-if="!value">
            请输入城市名以便查询
        </div>
    </div>
</template>

<script>
export default {
    name:'CitySearch',
    data(){
        return{
            value:''
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
.CS{

    .CS-header{
        width: 100%;
        height: 45px;
        line-height: 45px;
        padding: 0 10px;
        text-align: center;
        color: #f63;
        position: relative;
        background-color: #fff;
        display: flex;
        box-shadow: 0 0 1px #888;
        position: fixed;


        a{
            display: inline-block;
            text-decoration: none;
        }

        .CS-back{
            float: left;
            font-size: 30px;
            color:#f63;
        }

        input{
            flex: 1;
            margin: 7px 23px 0px 8px;
            font-size: 13px;
            height: 30px;
            border-radius: 15px;
            -webkit-border-radius: 15px;
            box-sizing: border-box;
            padding-left: 12px;
            border: none;
            background-color: #f0f0f0;
            outline:none;
        }
    }

    .fix-box{
        height: 46px;
    }

    .key_blank{
        height: 100%;
        position: fixed;
        width: 100%;
        z-index: 100;
        background-image: url(../../assets/images/CSkeybland.jpg);
        background-color: #fff;
        background-repeat: no-repeat;
        background-size: 84px;
        color: #7d7b7b;
        padding:20px 0 0 100px;
    }
}
</style>


