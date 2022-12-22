<script >
import Bottone from './Bottone.vue'

import { store } from "../store.js";


export default {

    name: "FreeQuote",
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
    <div class="effect">
        <div class="wrapper">
            <div class="text-cont">
                <h4>{{ store.freeQuoteTexts.topTitle }}</h4>
                <h2>{{ store.freeQuoteTexts.title }}</h2>
                <div class="line"></div>
                <p>{{ store.freeQuoteTexts.text }}</p>
                <bottone :data="store.freeQuoteBut" />
            </div>
        </div>
    </div>




</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;



.wrapper {
    background-image:
        url(../../public/img/avada-movers-servicetwophoto-final.jpg);
    height: 800px;
    background-repeat: no-repeat;
    background-size: 1900px;
    background-position-y: -200px;
    position: relative;

    .text-cont {
        height: 424px;
        width: 619px;
        position: absolute;
        top: 219px;
        right: 245px;
        background-color: $lima;
        border: 14px solid $border;
        color: $white;
    }
}
</style>
