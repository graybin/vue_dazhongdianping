<template>
    <div class="citylist">
        <div class="citymodel">
            <div class="head">
                更多城市
            </div>
            <div class="city-letter">
                <ul>
                    <li v-for="(item,index) of cityList" :key='index + "0"'>
                        <a :href="'#'+ item.letter">{{item.letter}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="C-list">
            <div v-for="(item,index) of cityList" :key="index+'1'">
                <div :id="item.letter" class="letter-title">{{item.letter}}</div>
                <div class="city-name">
                    <div class="locate-name" v-for="(item1,index) of item.city" :key='index+"2"'>
                        {{item1}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CityList',
    props:{
        cityList:Array
    },
    data(){
        return{  
        }
    }
}
</script>

<style lang="scss" scoped>
    .citymodel{

        .head{
            padding-left: 10px;
            font-size: 14px;
            color: #323232;
            line-height: 30px;
            background-color: #f2f2f2;
            border-bottom: 1px solid #e2e2e2;
            font-weight: 700;
            display: block;
        }

        .city-letter{

            ul{
                display: flex;
                flex-wrap: wrap;

                li{
                    box-sizing: border-box;
                    width: 20%;
                    line-height: 48px;
                    border-bottom: 1px solid #ededed;
                    border-right: 1px solid #ededed;
                    text-align: center;
                    a{
                        text-decoration: none;
                        color: #323232;
                        font-size: 16px;
                    }
                }
            }
        }
    }

    .C-list{

        .letter-title{
            padding-left: 10px;
            font-size: 14px;
            color: #323232;
            line-height: 30px;
            background-color: #f2f2f2;
            border-bottom: 1px solid #e2e2e2;
            font-weight: 700;
            display: block;
        }

        .city-name{
            display: flex;
            flex-wrap: wrap;

            .locate-name{
            box-sizing: border-box;
            width: 33.3333%;
            height: 48px;
            line-height: 48px;
            border-bottom: 1px solid #ededed;
            border-right: 1px solid #ededed;
            text-align: center;
            color: #323232;
            font-size: 16px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            }    
        }
        

    }
</style>


