<template>
    <div class="citylist">
        <div class="citymodel">
            <div class="head">
                更多城市
            </div>
            <div class="city-letter">
                <ul>
                    <li v-for="(item,index) of cityLetter" :key='index'>
                        <a :href="'#'+item">{{item}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="C-list">
            <div v-for="item of cityLetter" :key="item + 0">
                <div :id="item" class="letter-title">{{item}}</div>
                <div class="city-name">
                    <div class="locate-name" v-for="(item,index) of cityList" :key='index'>
                        {{item}}
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
        cityList:Array,
        cityLetter:Array
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
            line-height: 48px;
            border-bottom: 1px solid #ededed;
            border-right: 1px solid #ededed;
            text-align: center;
            color: #323232;
            font-size: 16px;
            overflow: hidden;
            }    
        }
        

    }
</style>


