<template>
  <div class="home">
    <home-header></home-header>
    <div style="height:3.57rem;"></div>
    <link-to-app></link-to-app>
    <home-icons :iconsList="iconsList"></home-icons>
    <headline :news = 'news'></headline>
    <redbag></redbag>
    <super-reduce :saleList = 'saleList'></super-reduce>
    <recommand :recommandList = 'recommandList'></recommand>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from  '@/components/Home/Header.vue'
import homeIcons from '@/components/Home/icons.vue'
import headline from '@/components/Home/headline.vue'
import redbag from '@/components/Home/redbag.vue'
import superReduce from '@/components/Home/superReduce.vue'
import recommand from '@/components/Home/recommand.vue'
import linkToApp from '@/components/Home/linkToApp.vue'
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      iconsList: [],
      recommandList: [],
      news: [],
      saleList: [] 
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
  methods: {
    getHomeInfo() {
      axios.get('https://www.easy-mock.com/mock/5af03ef9d71ec96a76df8b01/example/http:/dazhongdianping.com/iconList.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      if(res.data.status == "success") {
        this.iconsList = res.data.iconsList
        this.recommandList = res.data.recommandList
        this.news = res.data.news
        this.saleList = res.data.saleList
      }
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>
<style>
</style>
