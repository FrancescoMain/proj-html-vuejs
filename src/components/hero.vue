<script >
import { store } from "../store.js";
export default {

    name: "hero",

    data() {
        return {
            store,
        }
    }

}
</script>

<template>
    <div class="cont">
        <h4>{{ store.heroText.textTop }}</h4>
        <h1>{{ store.heroText.title }}</h1>
        <h4>{{ store.heroText.textBottom }}</h4>

    </div>


</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;


.cont {
    margin-top: 270px;

    h1,
    h4 {
        text-align: center;
        font-weight: 700;
    }

    h4 {
        color: $dove-gray;
        font-size: 0.8rem;

    }

    h1 {
        font-size: 3.5rem;
    }
}
</style>
