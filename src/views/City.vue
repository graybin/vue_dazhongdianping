<template>
  <div class="City">
    <city-header></city-header>
    <hot-city :hotCityList='hotCityList'></hot-city>
    <city-list :cityList='cityList'></city-list>
  </div>
</template>

<script>
import CityHeader from '@/components/City/CityHeader.vue'
import CityList from '@/components/City/CityList.vue'
import HotCity from '@/components/City/HotCity'
import axios from "axios"

export default {
  name:'City',
  data(){
    return{
      hotCityList:[],
      cityList:[]
    }
  },
  components:{
    CityHeader,
    CityList,
    HotCity
  },
  methods:{
    getCityInfo(){
      axios.get("https://www.easy-mock.com/mock/5af03ef9d71ec96a76df8b01/example/city.json")
        .then(this.handleCityInfo)
    },
    handleCityInfo(res){
      this.hotCityList = res.data.hotCityList
      this.cityList = res.data.cityList
    }
  },
  mounted(){
    this.getCityInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>


