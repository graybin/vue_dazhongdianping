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
        <div v-show="value" class="result">
            <div class="search-result" v-for="(item,index) of searchList" :key="index"
            @click="handleResultClick(item)">
                {{item}}
            </div>
            <div class="no-result" v-show="!searchList.length">抱歉！没有找到匹配的城市名</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CitySearch',
    data(){
        return{
            value:'',
            cityList:[],
            searchList:[],
            timer:''
        }
    },
    methods:{
        getCityList(){
            var cityList = this.$store.state.cityList
            for(let cityobj in cityList){
                for(let cityname in cityList[cityobj].city){
                    this.cityList.push(cityList[cityobj].city[cityname])
                }
            }
        },
        handleResultClick(cityname){
            this.$store.commit('changeCity',cityname)
            this.$router.push('/')
            window.scrollTo(0,0)
        }
    },
    watch:{
        value(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{
                this.searchList =[]
                if(this.value){
                    for(let item in this.cityList){
                    let value = this.cityList[item]
                    var isfind = value.indexOf(this.value) 
                    if(isfind !== -1){
                        this.searchList.push(value)
                    }
                    }
                }
            },100)    
        } 
    },
    mounted(){
        this.getCityList()
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
        background-image: url(../assets/images/CSkeybland.jpg);
        background-color: #fff;
        background-repeat: no-repeat;
        background-size: 84px;
        color: #7d7b7b;
        padding:20px 0 0 100px;
    }

    .result{
        color: #333;
        font-size: 12px;

        .search-result{
            height: 1rem;
            margin-top: 1.3rem;
            padding-left:1rem; 
        }

        .no-result{
            margin-top: 1.3rem;
            padding-left:1rem;
        }
    }
        
}
</style>


