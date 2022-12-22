<script >
import NavBar from './NavBar.vue'
import Hero from './Hero.vue'


export default {

    name: "navHero",
    components: {
        NavBar,
        Hero
    }

}



</script>

<template>
    <div class="wrapper">
        <!-- nav -->
        <NavBar />
        <!-- hero -->
        <Hero />
    </div>

</template>

<style lang="scss" scoped>
.wrapper {
    background-image: url(../../public/img/avada-movers-homeherobackground-final.jpg);
    height: 775px;
    background-size: 2650px;
    background-position-x: -419px;
    background-position-y: -66px;
}
</style>
