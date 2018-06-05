<template>
    <div>
        <div class="hotcity-head" v-show="hotCityList.length">
            热门城市
        </div>
        <div class="hot-city-name">
            <div class="hot-locate-name" v-for="(item,index) of hotCityList" :key="index"
            @click="handleCityClick(item)">
                {{item}}
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name:'HotCity',
    props:{
        hotCityList:Array
    },
    data(){
        return{
        }
    },
    methods:{
        handleCityClick(city){
            this.$store.dispatch('changeCity',city)
            this.$router.push("/")
        }
    }
}
</script>

<style lang="scss" scoped>
.hotcity-head{
    padding-left: 10px;
    font-size: 14px;
    color: #323232;
    line-height: 30px;
    background-color: #f2f2f2;
    border-bottom: 1px solid #e2e2e2;
    font-weight: 700;
    display: block;
}
.hot-city-name{
    display: flex;
    flex-wrap: wrap;

    .hot-locate-name{
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
</style>


