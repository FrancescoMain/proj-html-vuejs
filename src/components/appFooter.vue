<script >
import topFoot from './topFoot.vue'

export default {

    name: "AppFooter",
    components: {
        topFoot
    }

}



</script>

<template>
    <div class="wrapper">
        <!-- topFoot  -->
        <topFoot />
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
