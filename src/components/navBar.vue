<script >
import Bottone from './Bottone.vue'

import { store } from "../store.js";


export default {

    name: "navHero",
    components: {
        Bottone
    },
    data() {
        return {
            store,
        }
    }

}

</script>

<template>

    <div class="container">
        <div class="row justify-content-center align-items-center mt-3">
            <div class="col-4">
                <img :src="store.logo.path" :alt="store.logo.path">
            </div>
            <div class="col">
                <nav class="d-flex align-items-center">
                    <ul>
                        <li v-for="link in store.navbarLinks" :key="link.id">
                            <a :href="link.href">{{ link.title }}</a>
                        </li>
                    </ul>
                    <Bottone :data="store.navBut" />
                </nav>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

nav {


    ul {
        display: flex;
        margin: 0;

        li {
            margin-right: 40px;

            a {
                color: $shark;
                font-weight: 700;

                &:hover {
                    color: $lima-dark-vibrant;
                }
            }
        }


    }


}
</style>
