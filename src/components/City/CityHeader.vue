<template>
    <div>
       <div class="C-header">
           <router-link class="C-back" to="/">&lt;</router-link>
           <div class="C-area" >
               <a class="area-left">国内</a>
               <a class="area-right">国际/港澳台</a>
           </div>
       </div>
       <div class="C-search">
           <div class="search-box">
               <div class="search-text">
                   <span class="iconfont text-left">&#xe60b;</span>
                   <router-link to="/citysearch">
                       <span>输入城市名或拼音查询</span>
                   </router-link>
               </div>
           </div>
       </div>
       <div class="C-locate">
           <span>
               无法获取你的定位
           </span>
       </div>
    </div>
</template>

<script>
export default {
    name: 'CityHeader',
    data() {
        return {

        }
    },
    methods: {
       
    }

}
</script>

<style lang="scss" scoped>
.C-header{
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    text-align: center;
    color: #f63;
    position: relative;
    background-color: #fff;

    a{
        display: inline-block;
        text-decoration: none;
    }

    a.on{
        color: #fff;
        background: #f63;
    }

    .C-back{
        float: left;
        font-size: 30px;
        color:#f63;
    }

    .C-area{
        display: inline-block;
        position: absolute;
        width: 200px;
        height: 30px;
        left: 50%;
        top: 50%;
        margin-left: -100px;
        margin-top: -15px;
        font-size: 16px;
        display: flex;

        .area-left{
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            width: 50%;
            height: 100%;
            float: left;
            line-height: 28px;
            box-sizing: border-box;
            border: 1px solid #f63;
            
        }

        .area-right{
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            width: 50%;
            height: 100%;
            float: left;
            line-height: 28px;
            box-sizing: border-box;
            border: 1px solid #f63;
        }
    }
}
.C-search{
    height: 32px;
    background-color: #f2f2f2;
    padding: 9px 28px;

    .search-box{
        height: 32px;
        background-color: #fff;
        border-radius: 18px;
        text-align: center;
        line-height: 32px;
        color: #999;

        .search-text{
            display: inline-block;
            vertical-align: 10px;
            margin-left: 16px;
            position: relative;

            a{
                text-decoration: none;
            }
            
            a:visited{
                color: #999;
            }

            .text-left{
                font-size: 16px;
            }

        }
    }
}
.C-locate{
    height: 50px;
    background-color: #fff;
    line-height: 50px;
    text-align: center;
}
</style>

