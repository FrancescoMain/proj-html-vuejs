<script >
import TopFoot from './TopFoot.vue'

export default {

    name: "AppFooter",
    components: {
        TopFoot
    }

}



</script>

<template>
    <div class="wrapper">
        <!-- topFoot  -->
        <TopFoot />
        <!-- botFoot  -->
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
