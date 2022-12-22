<script >


export default {

    name: "NavFoot",
    props: {
        title: String,
        links: Array,
    },


}

</script>

<template>



    <div class="nav-cont">
        <h3>{{ title }}</h3>
        <ul>
            <li v-for="link in links" :key="link.id" v-show="link.footer">
                <a :href="link.href">{{ link.title }}</a>
            </li>
            <li>
                <a href="">Free Quote</a>
            </li>
        </ul>
    </div>







</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.nav-cont {
    margin-bottom: 20px;
}

h3 {
    font-size: 1.2rem;
    font-weight: 700;
    padding-bottom: 20px;
}

ul {
    color: $shark ;
    margin: 0;
    list-style: url('../../public/img/chevron-right-solid.svg');

    li {
        line-height: 40px;

        a {
            color: $shark;

            &:hover {
                color: $lima-dark-vibrant;
            }
        }
    }


}
</style>
