<template>
  <div class="home">
    <home-header></home-header>
    <div style="height:3.57rem;"></div>
    <home-icons></home-icons>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from  '@/components/Header.vue'
import homeIcons from '@/components/icons.vue'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeIcons
  }
}
</script>
<style>
</style>
