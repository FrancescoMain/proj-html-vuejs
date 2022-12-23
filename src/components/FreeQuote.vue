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
        url(../../public/img/avada-movers-movewithease-background-new.jpg);
    height: 800px;
    background-repeat: no-repeat;
    background-size: 2000px;
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
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;

        h2 {
            font-weight: 700;
            font-size: 3rem;
        }

        h4 {
            font-size: 1rem;
            font-weight: 700;
        }

        .line {
            border-bottom: $white solid 1px;
            width: 350px;
            margin: 20px 0;
        }

        p {
            width: 400px;
            margin: 20px 0;
        }
    }
}
</style>
