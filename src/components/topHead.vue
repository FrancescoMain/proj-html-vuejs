<script >

</script>

<template>

    <div class="wrap">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-10">

                    <a href=""> <font-awesome-icon class="me-2" icon="fa-solid fa-phone-flip" />Call us for a Free
                        Quote:
                        1.800.555.6789</a>
                </div>
                <div class="col brands">
                    <a href=""> <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4" /></a>
                    <a href=""> <font-awesome-icon icon="fa-brands fa-twitter" class="me-4" /></a>
                    <a href=""> <font-awesome-icon icon="fa-brands fa-instagram" class="me-4" /></a>
                    <a href=""> <font-awesome-icon icon="fa-brands fa-youtube" class="me-4" /></a>
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.wrap {
    color: $white;
    background-color: $lima;
    height: 47px;
    font-size: 0.8rem;

    .row {
        height: 47px;

        .brands {
            font-size: medium;

        }
    }

}
</style>
