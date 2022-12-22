<script >
import HeadacheFree from './HeadacheFree.vue'
import Services from './Services.vue'



export default {

    name: "AppMain",
    components: {
        HeadacheFree,
        Services
    }

}



</script>

<template>
    <main>
        <!-- headache free -->
        <HeadacheFree />
        <!-- Services -->
        <Services />
    </main>

</template>

<style lang="scss" scoped>

</style>