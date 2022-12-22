<script >
import topHead from './topHead.vue'
import navHero from './navHero.vue'
import cta from './cta.vue'

export default {

  name: "AppHeader",
  components: {
    topHead,
    navHero,
    cta
  }

}



</script>

<template>
  <header>
    <!-- topHead  -->
    <topHead />
    <!-- navHero  -->
    <navHero />
    <!-- cta -->
    <cta />
  </header>

</template>

<style lang="scss" scoped>

</style>
