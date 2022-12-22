<script >


export default {

    name: "bottone",

    props: {
        texts: Object,
        logo: Object,
    }
}
</script>

<template>
    <div class="about-cont">
        <h3>{{ texts.title }}</h3>
        <p>{{ texts.text }}</p>
        <img :src="logo.path" :alt="logo.alt">
    </div>


</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.about-cont {
    h3 {
        font-size: 1.2rem;
        font-weight: 700;
        padding-bottom: 20px;
    }

    p {
        line-height: 30px;
        margin-bottom: 40px;
    }

}
</style>
