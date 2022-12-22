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


    <div class="wrapper">
        <h4>{{ store.headacheFree.smallTitle }}</h4>
        <h2>{{ store.headacheFree.topTitle }}</h2>
        <h2>{{ store.headacheFree.botTitle }}</h2>

        <p>{{ store.headacheFree.text }}</p>
        <Bottone :data="store.headacheFreeBut" />
    </div>


</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.wrapper {
    text-align: center;
    height: 670px;
    background-color: $mercury ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h4 {
        color: $silver-chalice;
        font-weight: 700;
        font-size: 0.8rem;
    }

    h2 {
        color: $lima;
        font-weight: 700;
    }

    p {
        width: 575px;
    }
}
</style>
