<script >
import { store } from "../store.js";

export default {

    name: "topHead",

    data() {
        return {
            store,
        }
    }

}
</script>

<template>

    <div class="wrap">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-10">
                    <a :href="store.topHeadLink.href">
                        <font-awesome-icon class="me-2" :icon="store.topHeadLink.icon" />
                        {{ store.topHeadLink.Text }}</a>
                </div>
                <div class="col brands">
                    <a v-for="social in store.socials" :href="social.href" :key="social.id">
                        <font-awesome-icon :icon="social.icon" class="me-4" /></a>
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.wrap {
    color: $white;
    background-color: $lima;
    height: 47px;
    font-size: 0.8rem;

    .row {
        height: 47px;

        .brands {
            font-size: medium;

        }
    }

}
</style>
