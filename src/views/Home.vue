<template>
  <div class="home">
    <home-header></home-header>
    <div style="height:3.57rem;"></div>
    <link-to-app></link-to-app>
    <home-icons :iconsList="iconsList"></home-icons>
    <headline></headline>
    <redbag></redbag>
    <super-reduce></super-reduce>
    <recommand></recommand>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from  '@/components/Header.vue'
import homeIcons from '@/components/icons.vue'
import headline from '@/components/headline.vue'
import redbag from '@/components/redbag.vue'
import superReduce from '@/components/superReduce.vue'
import recommand from '@/components/recommand.vue'
import linkToApp from '@/components/linkToApp.vue'
import axios from 'axios'

export default {
  name: 'home',
  data(){
    return{
      iconsList:[] 
    }
  },
  components: {
    homeHeader,
    homeIcons,
    headline,
    redbag,
    superReduce,
    recommand,
    linkToApp
  },
  methods:{
    getHomeInfo(){
      axios.get('https://www.easy-mock.com/mock/5af03ef9d71ec96a76df8b01/example/http:/dazhongdianping.com/iconList.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      if(res.data.status == "success" && res.data.iconsList){
        this.iconsList = res.data.iconsList
      }
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>
<style>
</style>
