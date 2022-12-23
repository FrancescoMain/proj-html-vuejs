<script >
import TestimonialCard from './TestimonialCard.vue'
import Bottone from './Bottone.vue'

import { store } from "../store.js";


export default {

    name: "Testimonial",
    components: {
        TestimonialCard,
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
    <div class="wrapper">
        <div class="titleCont">
            <h4>{{ store.testimonialTitles.topTitle }}</h4>
            <h2>{{ store.testimonialTitles.botTitle }}</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="card in store.testimonialCards">
                    <TestimonialCard :data="card" />
                </div>
            </div>
        </div>
        <bottone :data="store.readMoreTestimonial" />
    </div>



</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;


.wrapper {
    height: 900px;
    background-image: url(../../public/img/avada-movers-testimonial-background.jpg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .titleCont {

        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 60px;
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

    .container {
        margin-bottom: 40px;
    }
}
</style>
