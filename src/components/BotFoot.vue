<script >
import { store } from "../store.js";

export default {

    name: "BotFoot",

    data() {
        return {
            store,
        }
    }

}
</script>

<template>

    <div class="wrap">


        <p>{{ store.footerText }}</p>

        <div>
            <a v-for="social in store.socials" :href="social.href" :key="social.id">
                <font-awesome-icon :icon="social.icon" class="me-4" /></a>
        </div>




    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.wrap {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $white;
    background-color: $lima;
    height: 100px;

    a {
        font-size: 1.2rem;
    }


}
</style>
