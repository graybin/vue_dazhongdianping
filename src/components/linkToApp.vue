<template>
    <div class="link-to-app">
        <div class="link-title">
            <img src="../assets/images/linkicon.jpg" alt="">
            <span class="title-name">吃喝玩乐，找优惠</span>
        </div>
        <div class="link-btn">
            <a class="btn-openapp">
                打开大众点评
            </a>
            <a class="btn-downloadapp">
                下载APP享特权
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'linkToApp',
    data(){
        return{

        }
    }
}
</script>


<style lang="scss" scoped>
.link-to-app{
    height: 8.6rem;
    background-image: url(//www.dpfile.com/app/app-m-module/static/666419d6641cf0faec444fc12b50383d.jpg);
    padding:24px 0 0 0;
    background-size: 100% 100%;

    .link-title{
        display: flex;
        justify-content: center;
        height: 30px;
        
        img{
            width: 30px;
            height: 30px;
            margin-right: 8px;
            margin-top: -4px;
        }

        .title-name{
            font-size: 20px;
            color: #111;
            font-weight: bolder;
        }
    }
    .link-btn{
        display: flex;
        justify-content: center;
        margin-top: 14px;

        .btn-openapp{
            color: #f63;
            margin-right: 15px;
            height: 40px;
            width: 126px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            border-radius: 2px;
            border: 1px solid #f63;
        }
        .btn-downloadapp{
            color: #fff;
            background-color: #f63;
            height: 40px;
            width: 126px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            border-radius: 2px;
            border: 1px solid #f63;
        }
    }
}
</style>

