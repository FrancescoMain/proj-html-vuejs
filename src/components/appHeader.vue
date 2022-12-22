<script >
import TopHead from './TopHead.vue'
import NavHero from './NavHero.vue'
import Cta from './Cta.vue'

export default {

  name: "AppHeader",
  components: {
    TopHead,
    NavHero,
    Cta
  }

}



</script>

<template>
  <header>
    <!-- topHead  -->
    <TopHead />
    <!-- navHero  -->
    <NavHero />
    <!-- cta -->
    <Cta />
  </header>

</template>

<style lang="scss" scoped>

</style>
