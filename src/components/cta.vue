<script >

import { store } from "../store.js";

export default {

    name: "cta",

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
            <div class="row  justify-content-center align-items-center text-center">
                <div class="col-5">

                    <a :href="store.cta.href"> <font-awesome-icon class="me-2" :icon="store.cta.icons" />{{
                            store.cta.text
                    }}</a>
                </div>

            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.wrap {
    color: $white;
    background-color: $denim;
    height: 110px;
    font-size: 1.2rem;

    .row {
        height: 110px;


    }

}
</style>
