<script >
import { store } from "../store.js";
import About from './About.vue'




export default {

    name: "AppFooter",
    components: {
        About,

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

                <!-- recent post  -->
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
