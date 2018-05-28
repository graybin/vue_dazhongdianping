<template>
  <div class="home">
    <home-header></home-header>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from  '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    homeHeader
  }
}
</script>
<style>
</style>
