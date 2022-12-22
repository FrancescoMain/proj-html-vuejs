<script >
import appHeader from './components/appHeader.vue'
import appFooter from './components/appFooter.vue'

export default {

  name: "App",
  components: {
    appHeader,
    appFooter
  }

}

</script>

<template>
  <!-- header  -->
  <appHeader />
  <!-- main  -->
  <!-- footer  -->
  <appFooter />

</template>

<style lang="scss">
@use "../src/styles/generals.scss";
</style>
