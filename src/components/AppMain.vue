<script >
import HeadacheFree from './HeadacheFree.vue'
import Services from './Services.vue'
import FreeQuote from './FreeQuote.vue'


export default {

    name: "AppMain",
    components: {
        HeadacheFree,
        Services,
        FreeQuote
    }

}



</script>

<template>
    <main>
        <!-- headache free -->
        <HeadacheFree />
        <!-- Services -->
        <Services />
        <!-- freeQuote -->
        <FreeQuote />
    </main>

</template>

<style lang="scss" scoped>

</style>