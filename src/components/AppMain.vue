<script >
import HeadacheFree from './HeadacheFree.vue'
import Services from './Services.vue'
import FreeQuote from './FreeQuote.vue'
import Testimonials from './Testimonials.vue'


export default {

    name: "AppMain",
    components: {
        HeadacheFree,
        Services,
        FreeQuote,
        Testimonials
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
        <!-- testimonials  -->
        <Testimonials />
    </main>

</template>

<style lang="scss" scoped>

</style>