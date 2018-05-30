<template>
  <div class="home">
    <home-header></home-header>
    <div style="height:3.57rem;"></div>
    <link-to-app></link-to-app>
    <home-icons></home-icons>
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

export default {
  name: 'home',
  components: {
    homeHeader,
    homeIcons,
    headline,
    redbag,
    superReduce,
    recommand,
    linkToApp
  }
}
</script>
<style>
</style>
