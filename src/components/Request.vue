<script >
import Bottone from './Bottone.vue'

import { store } from "../store.js";


export default {

    name: "Request",
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


    <div class="wrapper">


        <h2>{{ store.requestTexts.Title }}</h2>

        <p>{{ store.requestTexts.text }}</p>
        <Bottone :data="store.clickHere" />
    </div>


</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.wrapper {
    margin-top: 120px;
    text-align: center;
    height: 600px;
    background-image: url(../../public/img/avada-movers-request-quote-background.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        color: $lima;
        font-weight: 700;
        font-size: 2.5rem;
    }

    p {
        width: 700px;
        margin: 40px 0;
    }
}
</style>
