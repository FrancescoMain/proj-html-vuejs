<script >


export default {

    name: "bottone",

    props: {
        data: Object,
    }
}
</script>

<template>
    <a :href="data.href
    ">
        <div class="bottone">
            {{ data.text }}
        </div>
    </a>


</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.bottone {
    background-color: $denim;
    color: $white;
    font-weight: 700;
    border-radius: 20px;
    padding: 9px 25px;
    align-self: baseline;

    &:hover {
        color: $shark;
    }

}
</style>
