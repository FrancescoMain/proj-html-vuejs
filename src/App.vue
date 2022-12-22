<script >
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {

  name: "App",
  components: {
    AppHeader,
    AppFooter
  }

}

</script>

<template>
  <!-- header  -->
  <AppHeader />
  <!-- main  -->
  <!-- footer  -->
  <AppFooter />

</template>

<style lang="scss">
@use "../src/styles/generals.scss";
</style>
