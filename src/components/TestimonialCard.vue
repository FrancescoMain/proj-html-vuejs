<script >




export default {

    name: "Testimonial",

    props: {
        data: Object,
        buttonInfo: Object,
    }


}

</script>

<template>


    <div class="card-container">
        <img :src="data.img" :alt="data.title">
        <div class="text-container">
            <h2>{{ data.title }}</h2>
            <p>{{ data.text }}</p>

        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.card-container {

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8px;

    img {
        border-radius: 50%;
        height: 180px;
        width: 180px;
    }

    .text-container {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;


        h2 {
            color: $denim;
            font-weight: 700;
            margin: 40px 0;
        }
    }

}
</style>
