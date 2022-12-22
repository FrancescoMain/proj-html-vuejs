<script >
import { store } from "../store.js";
import About from './About.vue'
import NavFoot from './NavFoot.vue'




export default {

    name: "AppFooter",
    components: {
        About,
        NavFoot,

    },
    data() {
        return {
            store,
        }
    }

}



</script>

<template>
    <div class="cont">
        <div class="container">
            <div class="row align-items-center">
                <!-- about section  -->
                <div class="col-4">
                    <About :texts="store.about" :logo="store.logo" />
                </div>
                <!-- navbar  -->
                <div class="col-4">
                    <NavFoot :title="store.footTitle" :links="store.navbarLinks" />
                </div>

                <!-- recent post  -->
                <div class="col-4">
                    <NavFoot :title="store.footTitle" :links="store.navbarLinks" />
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.cont {
    background-color: $white;
    height: 445px;

    .row {
        height: 445px;
    }
}
</style>
