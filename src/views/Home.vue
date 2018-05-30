<template>
  <div class="home">
    <home-header></home-header>
    <div style="height:3.57rem;"></div>
    <home-icons></home-icons>
    <headline></headline>
    <redbag></redbag>
    <super-reduce></super-reduce>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from  '@/components/Header.vue'
import homeIcons from '@/components/icons.vue'
import headline from '@/components/headline.vue'
import redbag from '@/components/redbag.vue'
import superReduce from '@/components/superReduce'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeIcons,
    headline,
    redbag,
    superReduce
  }
}
</script>
<style>
</style>
