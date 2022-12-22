<script >
import { store } from "../store.js";
import about from './about.vue'




export default {

    name: "AppFooter",
    components: {
        about,

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
            <div class="row">
                <!-- about section  -->
                <div class="col-4">
                    <about />
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
}
</style>
