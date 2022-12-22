<script >
import TopFoot from './TopFoot.vue'
import BotFoot from './BotFoot.vue'

export default {

    name: "AppFooter",
    components: {
        TopFoot,
        BotFoot
    }

}



</script>

<template>
    <div class="wrapper">
        <!-- topFoot  -->
        <TopFoot />
        <!-- botFoot  -->
        <BotFoot />
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.wrapper {
    padding: 16px 0;
    background-color: $lima ;
    height: 600px;
}
</style>
