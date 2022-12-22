<script >
import ServicesCard from './ServicesCard.vue'

import { store } from "../store.js";


export default {

    name: "Services",
    components: {
        ServicesCard
    },
    data() {
        return {
            store,
        }
    }

}

</script>

<template>
    <div class="wrapper">
        <div class="titleCont">
            <h4>{{ store.servicesTitles.topTitle }}</h4>
            <h2>{{ store.servicesTitles.botTitle }}</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="card in store.servicesCards">
                    <ServicesCard :data="card" :buttonInfo="store.readMoreBut" />
                </div>
            </div>
        </div>
    </div>



</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;


.wrapper {
    height: 900px;

    .titleCont {

        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 200px;
        margin-bottom: 40px;

        h4 {
            color: $silver-chalice;
            font-weight: 700;
            font-size: 1rem;
        }

        h2 {
            color: $lima;
            font-weight: 700;
            font-size: 3rem;
        }

    }
}
</style>
