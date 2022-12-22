<script >
import Bottone from './Bottone.vue'



export default {

    name: "ServicesCard",
    components: {
        Bottone
    },
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
            <bottone :data="buttonInfo" />
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.card-container {
    background-color: $mercury;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8px;

    .text-container {
        background-color: $white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 10px;
        height: 330px;
        text-align: center;

        h2 {
            color: $denim;
            font-weight: 700;
        }
    }

}
</style>
