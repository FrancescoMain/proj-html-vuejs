<script >
import bottone from './bottone.vue'



export default {

    name: "navHero",
    components: {
        bottone
    }

}

</script>

<template>

    <div class="container">
        <div class="row justify-content-center align-items-center mt-3">
            <div class="col-4">
                <img src="../../public/img/avada-movers-logo.png" alt="">
            </div>
            <div class="col">
                <nav class="d-flex align-items-center">
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Rates</a>
                        </li>
                        <li>
                            <a href="">Testimonial</a>
                        </li>
                        <li>
                            <a href="">Faq</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                    <bottone />
                </nav>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

nav {


    ul {
        display: flex;
        margin: 0;

        li {
            margin-right: 40px;

            a {
                color: $shark;
                font-weight: 700;

                &:hover {
                    color: $lima-dark-vibrant;
                }
            }
        }


    }


}
</style>
