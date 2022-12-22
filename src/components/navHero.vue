<script >
import navBar from './navBar.vue'
import hero from './hero.vue'


export default {

    name: "navHero",
    components: {
        navBar,
        hero
    }

}



</script>

<template>
    <div class="wrapper">
        <!-- nav -->
        <navBar />
        <!-- hero -->
        <hero />
    </div>

</template>

<style lang="scss" scoped>
.wrapper {
    background-image: url(../../public/img/avada-movers-homeherobackground-final.jpg);
    height: 800px;
    background-size: 2650px;
    background-position-x: -419px;
    background-position-y: -66px;
}
</style>
